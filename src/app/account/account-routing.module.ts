import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [
  {path : 'reset-password/:code', component : PasswordResetComponent},
  {path : 'change-password/:username', component : ChangePasswordComponent},
  {path : 'forgot-password', component : ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
