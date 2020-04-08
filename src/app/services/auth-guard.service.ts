import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  isLoggedIn: boolean;

  constructor(private router: Router, private loginService: LoginService) {
    this.isLoggedIn = false;
   }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.loginService.logged.asObservable().subscribe(res => this.isLoggedIn = res);
    if(this.isLoggedIn){
      return true;
    }
    
    this.loginService.redirectUrl = state.url
    this.router.navigate(['/login']);
    
    return false;
    
}
}
