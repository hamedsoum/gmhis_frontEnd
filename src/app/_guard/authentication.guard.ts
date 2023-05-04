import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from "../_services/authentication.service";
import { AppCookieService} from "../_services/app-cookie.service";
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
 
  private islogged : boolean = false;

  constructor(
    private authService: AuthenticationService,
    private cookieService: AppCookieService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   
    let token = this.cookieService.get('token');

    if(token){
      
      this.islogged= (this.authService.isTokenExpired(token)==false) ? true : false;
    }    
    
    if(!this.islogged)  this.authService.logout()

     return this.islogged;

  }

}
