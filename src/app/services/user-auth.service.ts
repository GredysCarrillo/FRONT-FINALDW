import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userAuthService {

  private URL = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  loguin(user: any) {
    return this.http.post<any>(this.URL + '/register', user);
  }

  entrar(user: any) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  actualizar(user:any){
    return this.http.put<any>(this.URL+'/complete-profile',user);
  }

  //ver si hay token
  loggedIng() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
