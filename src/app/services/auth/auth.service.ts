import { Injectable } from '@angular/core';
import { ResponseLogin } from '../../models/auth/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public responseLogin: ResponseLogin = new ResponseLogin;
  constructor() {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.responseLogin.token = storedToken;
    }
   }


  public isAuth():boolean{
    return Boolean(this.responseLogin?.token)
  }
}
