import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersmoduleModule } from './users/usersmodule/usersmodule.module';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { authGuardian } from './auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './shared/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { ModifyPatientComponent } from './patients/modify-patient/modify-patient.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PatientProfileComponent,
    AddPatientComponent,  
    ModifyPatientComponent,
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UsersmoduleModule,
    SharedModuleModule,
    HttpClientModule,
    
  ],
  providers: [
    authGuardian,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
