import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  patients: any[] = []; // Esta variable almacenará la lista de pacientes

  constructor(private router: Router, private patientService: PatientService) {}

  ngOnInit() {
    this.getPatients(); // Llamamos a la función para obtener los pacientes al cargar el componente
  }

  getPatients() {

    this.patientService.listPatients().subscribe(
      (data) => {
        this.patients = data; // Almacena la lista de pacientes en la variable
        this.seeId();
      },
      (error) => {
        console.error('Error al obtener la lista de pacientes', error);
      }
    );
  }
  seeId() {
    if (this.patients.length > 0) {
      console.log('ID del primer paciente:', this.patients[0]._id);
    }
  }



}
