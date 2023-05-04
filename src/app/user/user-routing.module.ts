import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from "./add-user/add-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: 'add', component:AddUserComponent },
  { path: 'list', component:ListUserComponent },
  { path: 'update/:id', component:UpdateUserComponent },
  { path: 'password-changing/:id', component:ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
