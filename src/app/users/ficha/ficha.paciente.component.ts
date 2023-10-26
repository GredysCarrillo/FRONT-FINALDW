import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userAuthService } from 'src/app/services/user-auth.service';

@Component({
    selector: 'app-ficha',
    templateUrl: './ficha.paciente.component.html',
    styleUrls: ['./ficha.paciente.component.css']
})
export class FichaPacienteComponent {

    showError2 = false;
    showError = false;

    user = {
        name: '',
        consultationType: '',   
        address: '',
        phone: '',
        title: '',
        birthDate: '',
        photo: '',
        biography: '',
        location: '',
    }

    constructor(
        private authService: userAuthService,
        private router: Router){}

    actualizar() {
        if (this.validateFields()) {
            this.authService.actualizar(this.user)
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
        return this.user.address !== '' && this.user.title !== '';
    }
}

