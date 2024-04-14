import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Partner } from '../models/Partner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private httpClient: HttpClient) { }

  private url: string = environment.api+"/partners";

  public create(partner: Partner): Observable<Partner>{
    return this.httpClient.post<Partner>(`${this.url}`,partner);
  }
}
