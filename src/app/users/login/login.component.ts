import { Component } from '@angular/core';
import { userAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    ngOnInit(){
        const token = localStorage.getItem('token');
        if (token) {
          localStorage.removeItem('token');
        }else{
            this.router.navigate(['/login'])
        }
    }

    showError: boolean = false;
    showError2: boolean = false

    user = {
        email: '',
        password: ''
    }

    constructor(
        private authService: userAuthService,
        private router: Router) { }

    entrar() {
        if (this.validateFields()) {
            this.authService.entrar(this.user)
                .subscribe(
                    res => {
                        console.log(res)
                        localStorage.setItem('token', res.token);
                        this.router.navigate(['/home'])
                    },
                    err => {
                        console.error(err)
                        if (err.status === 401) {
                            this.showError = true;
                        }
                    }

                )
        }
        else {
            this.showError2 = true;
        }
    }

    private validateFields(): boolean {
        return this.user.email !== '' && this.user.password !== '';
    }

    closeErrorModal() {
        this.showError = false;
    }

    
}
