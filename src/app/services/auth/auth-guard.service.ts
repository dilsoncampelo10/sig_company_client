import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{

  constructor(private authService: AuthService,private router: Router) { }
  canActivate():boolean {
    const isAuth = this.authService.isAuth();
    if(!isAuth){
        this.router.navigate(['/login']);
        return false;
    }

    return true;
  }
}
