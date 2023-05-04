import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { AppCookieService } from '../_services/app-cookie.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private cookieService: AppCookieService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        // add authorization header with jwt token if available

        let token = this.cookieService.get('token');

        if (token) {

            if (this.authenticationService.isTokenExpired() == false) {

                let requestClone = request.clone({
                    setHeaders: {
                        'Authorization': `Bearer ` + token,
                        //'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': `${environment.baseUrl2}`,
                        'Access-Control-Allow-Methods': '*',
                        'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
                        'Access-Control-Max-Age': '86400'
                    }
                });

                return next.handle(requestClone);
            } else {
                this.router.navigate(['/login'])
            }
        } else {
            this.router.navigate(['/login'])
        }

        return next.handle(request);

        //userName : VIRTUAL_NETWORK
        //password : VIRTUALADMIN123
        // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MDM4Njc3MDksImlhdCI6MTYwMzg0OTcwOX0.x7hKJb_gN4JPFA76rs6IxsbxU5qCbPHDVt9BrRlUQQ2fH7DnUSk-fcpTobofdoWlqiqoKJGcPbIYDLF5X7cTUw

    }
}