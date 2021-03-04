import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { from } from 'rxjs';

import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {ProjectComponent} from './project/project.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [

  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
