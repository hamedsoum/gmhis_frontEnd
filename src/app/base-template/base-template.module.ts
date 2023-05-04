import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthenticationModule } from "./../authentication/authentication.module";
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AlertComponent  } from "./../_utility/alert/alert/alert.component";
import { ErrorInterceptor } from "./../authorization/error.interceptor";
import { JwtInterceptor } from '../authorization/jwt.interceptor';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    LayoutComponent,
    AlertComponent],
  imports: [
    CommonModule,
    AuthenticationModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  // ],
})
export class BaseTemplateModule { }
