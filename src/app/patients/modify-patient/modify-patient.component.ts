import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styles: []
})
export class ModifyPatientComponent implements OnInit {
  patientId: string = '0'; // Inicializa patientId
  patient: any = {};
  newMedicalHistory: string = '';
  newAlergias: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.patientId = params.get('id') || '';
      if (this.patientId) {
        this.getPatientDetails(this.patientId);
      }
    });
  }

  ngOnInit(): void {}

  getPatientDetails(patientId: string): void {
    this.patientService.getPatientById(patientId).subscribe(
      (data) => {
        this.patient = data;
      },
      (error) => {
        console.error('Error al obtener los detalles del paciente', error);
      }
    );
  }

  addMedicalHistory(): void {
    if (this.newMedicalHistory) {
      if (!Array.isArray(this.patient.history)) {
        this.patient.history = [];
      }
      this.patient.history.push(this.newMedicalHistory);
      this.newMedicalHistory = '';
    }
  }

  addAlergias(): void {
    if (this.newAlergias) {
      if (!Array.isArray(this.patient.allergies)) {
        this.patient.allergies = [];
      }
      this.patient.allergies.push(this.newAlergias);
      this.newAlergias = '';
    }
  }

  updatePatient(): void {
    this.patientService.updatePatient(this.patientId, this.patient).subscribe(
      (data) => {
        console.log('Paciente actualizado con éxito', data);
        this.router.navigate(['/patient-profile', this.patientId]);
      },
      (error) => {
        console.error('Error al actualizar al paciente', error);
      }
    );
  }
}
