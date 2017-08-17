import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import pull in the component and reference within this page
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
// array of constant, never change
// var routes, Routes = type
const routes: Routes = [
  // {} object
  // { path: '', component: null }
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
