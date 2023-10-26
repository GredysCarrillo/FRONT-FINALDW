import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CompleteProfileComponent } from '../complete-profile/complete-profile.component';
import { UserRouterModule } from './user-router-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    CompleteProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    CompleteProfileComponent,
  ],
  providers:[
  ]
})
export class UsersmoduleModule { }
