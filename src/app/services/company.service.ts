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
  private token = localStorage.getItem('token');

  public create(company: Company): Observable<Company>{
    const userString: string | null = localStorage.getItem('user');

    if (userString === null) {
      throw new Error('Nenhum usuário encontrado no localStorage');
    }
    
    const partner: Partner = JSON.parse(userString);

    company.partner_id = partner.id;

    if (!this.token) {
      throw new Error('Token JWT não encontrado no localStorage');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.httpClient.post<Company>(`${this.url}`,company,{headers});
  }

  public findAll():Observable<Company[]>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.httpClient.get<Company[]>(`${this.url}`,{headers});
  }
}
