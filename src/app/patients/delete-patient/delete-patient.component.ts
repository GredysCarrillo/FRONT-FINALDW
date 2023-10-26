
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { PatientService } from 'src/app/services/patient.service';
  
  @Component({
    selector: 'app-delete-patient',
    templateUrl: './delete-patient.component.html',
    styles: []
  })
  export class DeletePatientComponent implements OnInit {
    patientId: string = '';
  
    constructor(
      private route: ActivatedRoute,
      private patientService: PatientService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.patientId = id as string;
        }
      });
    }
  
    deletePatient(): void {
      if (confirm('¿Estás seguro de que deseas eliminar a este paciente?')) {
        this.patientService.deletePatient(this.patientId).subscribe( // Cambia "suscribe" a "subscribe"
          (data: any) => {
            console.log('Paciente eliminado con éxito', data);
            this.router.navigate(['/dashbor']);
          },
          (error: any) => {
            console.error('Error al eliminar al paciente', error);
          }
        );
        
      }
    }
    
  }
  

