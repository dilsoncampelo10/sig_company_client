import { Component } from '@angular/core';
import { Company } from '../../models/Company';
import { CompanyService } from '../../services/company.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-companies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-companies.component.html',
  styleUrl: './form-companies.component.scss'
})
export class FormCompaniesComponent {
    public company: Company = new Company;

    constructor(private companyService:CompanyService){}

    create(){
  
      this.companyService.create(this.company).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (responseError) => {
          console.log(responseError);
        }
      })
  }
}
