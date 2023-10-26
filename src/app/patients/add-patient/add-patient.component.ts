import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styles: [],
})
export class AddPatientComponent {
  showError: boolean = false;

  patient = {
    photo: '',
    name: '',
    age: '',
    date: '',
    gender: '',
    history: '',
    
  };

  constructor(private authService: PatientService, private router: Router) {}

  register() {
      if (this.validateFields()) {
      this.authService.addPatient(this.patient).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashbor']);
        },
        (err) => console.log(err)
      );
    } else {
      this.showError = true;
    }
  }


  private validateFields(): boolean {
    return (
      
      this.patient.name !== '' &&
      this.patient.age !== '' &&
      this.patient.gender !== '' &&
      this.patient.date !== '' &&
      this.patient.history !== '' 
    
    );
  }
}
