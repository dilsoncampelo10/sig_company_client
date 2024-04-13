import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,MainSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
