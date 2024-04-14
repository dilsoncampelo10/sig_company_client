import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RequestLogin } from '../../../models/auth/RequestLogin';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/auth/login.service';
import { ModalComponent } from '../../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule,FormsModule,ModalComponent,CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  public user: RequestLogin = new RequestLogin;
  public showError = false;

  constructor(private loginService: LoginService, private router: Router){}

   login() {
    this.loginService.login(this.user).subscribe({
      next: (data) =>{
        this.router.navigate(['criar/empresa']);
        
        localStorage.setItem('token', data.token);

        localStorage.setItem('user', JSON.stringify(data.partner));
      },
      error: (errorResponse) => {
        console.error(errorResponse);
        this.showError = true;
      }
    });
      
  }

  closeModal(){
    this.showError = false;
  }

}
