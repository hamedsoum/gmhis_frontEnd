import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRegisterMovementRoutingModule } from './cash-register-movement-routing.module';
import { CrMListComponent } from './cr-mlist/cr-mlist.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CrMListComponent],
  imports: [
    CommonModule,
    CashRegisterMovementRoutingModule,
    SharedModule
  ]
})
export class CashRegisterMovementModule { }
