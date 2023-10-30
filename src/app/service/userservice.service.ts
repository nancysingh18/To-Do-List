import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  getlist(){
    return this.http.get("http://localhost:4444/userdata")
  }
  postlist(data:any){
    return this.http.post("http://localhost:4444/userdata",data)

  }
  putlist(id:any,data:any){
    return this.http.put("http://localhost:4444/userdata/"+id,data)

  }
  deletelist(id:any){
    return this.http.delete("http://localhost:4444/userdata/"+id)

  }

getlistById(id:any){
  return this.http.get("http://localhost:4444/userdata/"+id)
} 
}
