import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GMHISCashRegisterMovementListComponent } from './list/gmhis-cash-register-movement-list.component';

const routes: Routes = [
  {path : 'list', component : GMHISCashRegisterMovementListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRegisterMovementRoutingModule { }
