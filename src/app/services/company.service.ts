import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }

  private url: string = environment.api+"/companies";

  public create(company: Company): Observable<Company>{
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token JWT não encontrado no localStorage');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.post<Company>(`${this.url}`,company,{headers});
  }
}
