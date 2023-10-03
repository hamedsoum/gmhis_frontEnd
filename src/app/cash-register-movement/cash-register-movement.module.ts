import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRegisterMovementRoutingModule } from './cash-register-movement-routing.module';
import { GMHISCashRegisterMovementListComponent } from './list/gmhis-cash-register-movement-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [GMHISCashRegisterMovementListComponent],
  imports: [
    CommonModule,
    CashRegisterMovementRoutingModule,
    SharedModule
  ]
})
export class CashRegisterMovementModule { }
