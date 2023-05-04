import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashRegisterRoutingModule } from "./cash-register-routing-module";
import { AddCashOperationComponent } from './add-cash-operation/add-cash-operation.component';
import { AdmissionModule } from "./../admission/admission.module";
import { AddCashRegisterComponent } from './add-cash-register/add-cash-register.component';
import { UpdateCashRegisterComponent } from './update-cash-register/update-cash-register.component';
import { ListCashRegisterComponent } from './list-cash-register/list-cash-register.component';
import { CashRegisterFormComponent } from './../_shared/cash-register/cash-register-form/cash-register-form.component';
import { CashRegisterListComponent } from './../_shared/cash-register/cash-register-list/cash-register-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import {NgbPaginationModule, NgbTooltipModule  } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AddCashOperationComponent, 
    AddCashRegisterComponent, 
    UpdateCashRegisterComponent, 
    ListCashRegisterComponent,
    CashRegisterFormComponent, 
    CashRegisterListComponent ],
  imports: [
    CommonModule,
    CashRegisterRoutingModule,
    AdmissionModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbTooltipModule
  ]
})
export class CashRegisterModule { }
