import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './edit-list/edit-list.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "list/:id",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
