import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styles: []
})
export class PatientProfileComponent implements OnInit {
  patientId: string = ''
  patient: any;


  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  loadBackupImage() {
    // Ruta local de la imagen de respaldo
    this.patient.photo = 'assets/imgs/dino.jpg'; // Reemplaza 'assets/backup-image.jpg' con la ruta real de tu imagen de respaldo en local
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id') ?? '';
      if (this.patientId) {
        this.getPatientInfo(this.patientId);
      }
    });
  }

  getPatientInfo(id: string): void {
    this.patientService.getPatientById(id).subscribe(
      (data) => {
        this.patient = data;
        // Asegurarte de que patient.allergies sea un array
        if (typeof this.patient.allergies === 'string') {
          this.patient.allergies = this.patient.allergies.split(',');
        }
        // Asegurarte de que patient.history sea un array (si no lo es ya)
        if (!Array.isArray(this.patient.history)) {
          this.patient.history = [];
        }
      },
      (error) => {
        console.error('Error al obtener la información del paciente', error);
      }
    );
  }
}
