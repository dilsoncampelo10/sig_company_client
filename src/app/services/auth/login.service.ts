import { Injectable } from '@angular/core';
import { RequestLogin } from '../../models/auth/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../../models/auth/ResponseLogin';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private url: string = environment.api;

  public login(user: RequestLogin): Observable<ResponseLogin>{
      return this.httpClient.post<ResponseLogin>(`${this.url}/login`,user);
  }
}
