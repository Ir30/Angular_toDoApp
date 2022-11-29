import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ViewComponent } from './view/view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const myRoute:Routes=[
  {
    path:"",
    component:ToDoComponent
  },
  {
    path:"view",
    component:ViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
