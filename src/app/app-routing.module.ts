import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersmoduleModule } from './users/usersmodule/usersmodule.module';
import { UserRouterModule } from './users/usersmodule/user-router-routing.module';
import { HomeComponent } from './shared/home/home.component';
import { authGuardian } from './auth.guard';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ModifyPatientComponent } from './patients/modify-patient/modify-patient.component';




const routes: Routes = [

  {path:'users', loadChildren: () => import('./users/usersmodule/usersmodule.module').then(m => m.UsersmoduleModule)},
  {path: 'home', component: HomeComponent, canActivate:[authGuardian]},
  { path: 'dashbor', component: DashboardComponent, canActivate: [authGuardian] },
  { path: 'patient-profile/:id', component: PatientProfileComponent, canActivate: [authGuardian] },
  { path: 'add-patient', component: AddPatientComponent, canActivate: [authGuardian] },
  { path: 'Perfil', component: ProfileComponent, canActivate: [authGuardian] },
  { path: 'update-patient/:id', component: ModifyPatientComponent, canActivate: [authGuardian] },
 
 

 
 
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  UsersmoduleModule,
  UserRouterModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
