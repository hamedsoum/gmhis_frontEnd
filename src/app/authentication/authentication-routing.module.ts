import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard  } from "../_guard/authentication.guard";

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
//  providers: [AuthenticationGuard, UserToken, Permissions]
})
export class AuthenticationRoutingModule { }
