import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { AddCashierComponent } from './add-cashier/add-cashier.component';
import { UpdateCashierComponent } from './update-cashier/update-cashier.component';
import { ListCashierComponent } from './list-cashier/list-cashier.component';
import { CashierFormComponent } from '../_shared/cashier/cashier-form/cashier-form.component';
import { CashierListComponent } from '../_shared/cashier/cashier-list/cashier-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddCashierComponent, 
    UpdateCashierComponent, 
    ListCashierComponent,
    CashierFormComponent,
    CashierListComponent,
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule
  ]
})
export class CashierModule { }
