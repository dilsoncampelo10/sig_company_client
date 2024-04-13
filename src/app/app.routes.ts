import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateCompanyComponent } from './pages/companies/create-company/create-company.component';
import { CreatePartnerComponent } from './pages/partners/create-partner/create-partner.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'',component:HomeComponent},
    {path:'criar/empresa',component:CreateCompanyComponent},
    {path:'criar/socio',component:CreatePartnerComponent}
];
