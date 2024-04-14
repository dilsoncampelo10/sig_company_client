import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';
import { Partner } from '../models/Partner';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }

  private url: string = environment.api+"/companies";

  public create(company: Company): Observable<Company>{
    const token = localStorage.getItem('token');
    const userString: string | null = localStorage.getItem('user');

    if (userString === null) {
      throw new Error('Nenhum usuário encontrado no localStorage');
    }
    
    const partner: Partner = JSON.parse(userString);

    company.partner_id = partner.id;

    if (!token) {
      throw new Error('Token JWT não encontrado no localStorage');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.post<Company>(`${this.url}`,company,{headers});
  }
}
