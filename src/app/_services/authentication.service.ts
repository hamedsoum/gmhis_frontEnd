import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import jwt_decode from 'jwt-decode';
import { AppCookieService } from "./app-cookie.service";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: AppCookieService
  ) { }


  getToken(): string {
    return this.cookieService.get('token');
  }

  login(data): Observable<any> {
    let response = this.http.post(environment.baseUrl2 + '/login', data, { observe: 'response' });
    return response;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  getUsername() {
    return atob(this.cookieService.get('username'))
  }

  logout(): void {
    this.cookieService.remove('token');
    this.cookieService.remove('username');
    this.router.navigateByUrl('/login');
  }

}
