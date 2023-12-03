import { Component } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = 'app';
  data1:any=[]
  userId:any
  newData:any
  list:any
  isActive=true;
  constructor(private service:UserserviceService,private router:Router,private route:ActivatedRoute){

    service.getlist().subscribe((val)=>{{
      this.data1=val;
      console.log(this.data1.value);

    }})


  }
  userlist(data: any) {
    this.service.postlist(data).subscribe((val) => {
      this.service.getlist().subscribe((val) => {
        this.data1 = val;
        console.log(this.data1.value);
      });

      // Assuming 'save' is a method to save data, you might want to provide more details on this
      data.save(val);

      // Reset the form here
      this.list.reset();
    });
  }


  updatelist(data:any){
    // this.service.putlist(this.userId,data).subscribe((val)=>{

    //   data.save(val)
    // })
  }


  onEdit(id: any, data2: any) {
    this.router.navigate(['/list/' + id]);
    console.log('id: ' + id);

    this.service.getlistById(id).subscribe((jsonData: any) => {
      // Parse the JSON response
      console.log(' JSON data:', jsonData.list);
      const val = jsonData.list;

      this.service.getlist().subscribe(() => {
        Swal.fire({
          title: 'Edit Value:',
          input: 'text',
          inputValue: val, // Pre-fill the input with the existing value
          showCancelButton: true,
          confirmButtonText: 'Submit',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this.data1 = result.value;
            console.log('this.data1=' + this.data1);

            // Code to execute if the user clicks "Submit"
            this.service.putlist(id, { list: this.data1 }).subscribe(
              (updateData) => {
                this.service.getlist().subscribe((updatedList) => {
                  this.data1 = updatedList;
                  console.log(this.data1.value);
                });
                console.log('Update successful:', updateData);


                console.log('Save:', updateData);
              },

            );
          } else {
            // here cancel data
          }
        });
      });
    });
  }


  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deletelist(id).subscribe(
          (deleteResponse) => {
            console.log('List deleted:', deleteResponse);
            // Optionally, perform additional operations with the response
            this.service.getlist().subscribe((updatedList) => {
              this.data1 = updatedList;
              console.log(this.data1.value);
            });
            Swal.fire('Deleted!', 'Your list has been deleted.', 'success');
          },
          (deleteError) => {
            console.error('Error deleting list:', deleteError);
            Swal.fire('Error!', 'Failed to delete the list.', 'error');
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your list is safe :)', 'info');
      }
    });
  }



  
  backgroundColor:string=""
  toggleColor(id:any){

    this.router.navigate(['/list/'+id]);
    this.service.getlistById(id).subscribe((jsonData: any) => {
      // Parse the JSON response
      console.log(' JSON data:', jsonData.list);
      const val = jsonData.list;
      this.service.getlist().subscribe((item:any) => {
        const user = item.find((item: any) => id === item.id);
   if(user){

   }
  })}
  )}
}

//  delete(id:any){
// this.service.deletelist(id).subscribe((val)=>{
//   this.service.getlist().subscribe((val)=>{{
//     this.data1=val;
//     console.log(this.data1.value);

//   }})
//   alert('List deleted')
// })
//  }

// }
