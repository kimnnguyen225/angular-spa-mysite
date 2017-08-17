import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import pull in the component and reference within this page
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
// array of constant, never change, all array needs coma after each item
// var routes, Routes = type
const routes: Routes = [
  // {} object
  // { path: '', component: null } - depends on how many components you have, changes like below
  // Nothing enter, goes back to home page
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // Go to home page
    { path: 'home', component: HomeComponent },
    // Resume page
    { path: 'resume', component: ResumeComponent },
    // About page
    { path: 'about', component: AboutComponent },
    // Go to a page that doesn't exsist, goes back to home page
    { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
