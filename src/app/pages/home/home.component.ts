import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';
import { MessageSectionComponent } from '../../components/message-section/message-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,MainSectionComponent,MessageSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
