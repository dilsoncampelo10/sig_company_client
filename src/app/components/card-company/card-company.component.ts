import { Component, Input } from '@angular/core';
import { Company } from '../../models/Company';

@Component({
  selector: 'app-card-company',
  standalone: true,
  imports: [],
  templateUrl: './card-company.component.html',
  styleUrl: './card-company.component.scss'
})
export class CardCompanyComponent {
  @Input() company: Company = new Company;
}
