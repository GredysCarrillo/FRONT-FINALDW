import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompleteProfileComponent } from '../users/complete-profile/complete-profile.component';
import { userAuthService } from './user-auth.service';

@Injectable({
  
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: userAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenize = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenize);
  }
}
