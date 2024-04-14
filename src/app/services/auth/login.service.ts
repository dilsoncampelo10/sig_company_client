import { Injectable } from '@angular/core';
import { RequestLogin } from '../../models/auth/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../../models/auth/ResponseLogin';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,private authService:AuthService) { }

  private url: string = environment.api;

  public login(user: RequestLogin): Observable<ResponseLogin>{
      return this.httpClient.post<ResponseLogin>(`${this.url}/login`,user)
      .pipe(tap((responseLogin) => (this.authService.responseLogin = responseLogin)));
  }
}
