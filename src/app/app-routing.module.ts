import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SigninComponent } from './components/signin/signin.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

const routes: Routes = [
  {path:'signin', component:SigninComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'',redirectTo:"/signin",pathMatch:'full'},
  {path:'home', component:DashboardComponent,
  children:[
    {path:'notes', component:CreateNoteComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }