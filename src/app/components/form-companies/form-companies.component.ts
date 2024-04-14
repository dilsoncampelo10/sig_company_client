import { Component } from '@angular/core';
import { Company } from '../../models/Company';
import { CompanyService } from '../../services/company.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-companies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-companies.component.html',
  styleUrl: './form-companies.component.scss'
})
export class FormCompaniesComponent {
    public company: Company = new Company;

    constructor(private companyService:CompanyService,private router: Router){}

    create(){
  
      this.companyService.create(this.company).subscribe({
        next: (data) => {
          this.router.navigate(['dashboard']);
          console.log(data);
        },
        error: (responseError) => {
          console.log(responseError);
        }
      })
  }
}
