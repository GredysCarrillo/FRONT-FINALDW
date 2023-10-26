import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  deletePatient(patientId: string) {
    throw new Error('Method not implemented.');
  }


  private URL = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addPatient(user: any) {
    return this.http.post<any>(this.URL + '/add-patient', user);
  }

  listPatients() {
    return this.http.get<any>(this.URL + '/list-patient');
  }

  getPatientById(patientId: String) {
    return this.http.get<any>(this.URL + '/patient/' + patientId);
  }

  updatePatient(patientId: String, updates: any) {
    return this.http.put<any>(this.URL + '/update-patient/' + patientId, updates);
  }

}
