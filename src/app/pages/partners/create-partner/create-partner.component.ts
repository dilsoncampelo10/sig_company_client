import { Component } from '@angular/core';
import { FormPartnersComponent } from '../../../components/form-partners/form-partners.component';

@Component({
  selector: 'app-create-partner',
  standalone: true,
  imports: [FormPartnersComponent],
  templateUrl: './create-partner.component.html',
  styleUrl: './create-partner.component.scss'
})
export class CreatePartnerComponent {

}
