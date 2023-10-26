import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CompleteProfileComponent } from '../complete-profile/complete-profile.component';
import { authGuardian } from 'src/app/auth.guard';

const routes: Routes = [
    {path:'', component: LoginComponent, pathMatch: "full"},
    {path:'register', component: RegisterComponent},
    {path:'forgot-password', component: ForgotPasswordComponent},
    {path:'login', component: LoginComponent},
    {path: 'complete-profile', component: CompleteProfileComponent, canActivate:[authGuardian]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouterModule { }