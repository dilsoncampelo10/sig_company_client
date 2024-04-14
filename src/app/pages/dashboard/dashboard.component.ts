import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ListCompanyComponent } from '../../components/list-company/list-company.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,ListCompanyComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
