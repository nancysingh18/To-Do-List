import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { UserserviceService } from './service/userservice.service';
import { EditListComponent } from './edit-list/edit-list.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditListComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
