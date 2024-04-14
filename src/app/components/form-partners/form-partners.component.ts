import { Component } from '@angular/core';
import { Partner } from '../../models/Partner';
import { PartnerService } from '../../services/partner.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-partners',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './form-partners.component.html',
  styleUrl: './form-partners.component.scss'
})
export class FormPartnersComponent {
    public partner: Partner = new Partner;

    constructor(private partnerService: PartnerService){};

    create(){
        this.partnerService.create(this.partner).subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (responseError) => {
            console.log(responseError);
          }
        })
    }

}
