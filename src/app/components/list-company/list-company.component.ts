import { Component, OnInit } from '@angular/core';
import { CardCompanyComponent } from '../card-company/card-company.component';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/Company';

@Component({
  selector: 'app-list-company',
  standalone: true,
  imports: [CardCompanyComponent,CommonModule],
  templateUrl: './list-company.component.html',
  styleUrl: './list-company.component.scss'
})
export class ListCompanyComponent implements OnInit{

  public companies:Company[] = []; 
  constructor(private companyService: CompanyService){}
  ngOnInit(): void {
      this.findAll();
  }

  findAll(){
    this.companyService.findAll().subscribe({
      next: (data) => {
        this.companies = data;
        console.log(this.companies)
      },
      error: (responseError) => {
        console.log(responseError);
      }
    })
  }
}
