import { NgModule } from '@angular/core';

import { CashierRoutingModule } from './cashier-routing.module';
import { CashierListComponent } from './cashier-list/cashier-list.component';
import { SharedModule } from '../shared/shared.module';
import { CashierCreateComponent } from './cashier-create/cashier-create.component';


@NgModule({
  declarations: [CashierListComponent,CashierCreateComponent],
  imports: [SharedModule,CashierRoutingModule]
})
export class CashierModule { }
