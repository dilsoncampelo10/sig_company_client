import { Component } from '@angular/core';
import { FormCompaniesComponent } from '../../../components/form-companies/form-companies.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-company',
  standalone: true,
  imports: [FormCompaniesComponent,RouterModule],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.scss'
})
export class CreateCompanyComponent {

}
