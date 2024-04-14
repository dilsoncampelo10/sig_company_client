import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestLogin } from '../../../models/auth/RequestLogin';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  public user: RequestLogin = new RequestLogin;

  constructor(private loginService: LoginService){}

   login() {
    this.loginService.login(this.user).subscribe({
      next: (data) =>{
        console.log(data);
      },
      error: (errorResponse) => {
        console.error(errorResponse)
      }
    });
      
  }

}
