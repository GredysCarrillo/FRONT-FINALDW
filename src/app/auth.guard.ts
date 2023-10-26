import { userAuthService } from './services/user-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class authGuardian implements CanActivate{

constructor(
  private authService: userAuthService,
  private router: Router){}

canActivate(): boolean{

  if(this.authService.loggedIng()){
    return true;
  }
  this.router.navigate(['/login'])
  return false;
}

}
