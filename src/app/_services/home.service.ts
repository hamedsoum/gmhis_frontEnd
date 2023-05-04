import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppCookieService } from './app-cookie.service';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    ) { }

/**
 * 
 */
 getHome() {
  return this.http.get(environment.baseUrl2);
}
}
