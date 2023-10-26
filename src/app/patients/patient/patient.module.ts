import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';
import { ModifyPatientComponent } from '../modify-patient/modify-patient.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPatientComponent,
    DeletePatientComponent,
    ModifyPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ],
  exports:[
    AddPatientComponent,
    DeletePatientComponent,
    ModifyPatientComponent
  ]
})
export class PatientModule { }
