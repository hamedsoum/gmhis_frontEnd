import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { UpdateInsuranceComponent } from './update-insurance/update-insurance.component';
import { ListInsuranceComponent } from './list-insurance/list-insurance.component';
import { ListSubscriberComponent } from './list-subscriber/list-subscriber.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { UpdateSubscriberComponent } from './update-subscriber/update-subscriber.component';
import { InsuranceFormComponent } from './../_shared/insurance/insurance-form/insurance-form.component';
import { InsuranceListComponent } from './../_shared/insurance/insurance-list/insurance-list.component';
import { SubscriberListComponent } from './../_shared/insurance/subscriber-list/subscriber-list.component';
import { SubscriberFormComponent } from './../_shared/insurance/subscriber-form/subscriber-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import {NgbPaginationModule, NgbTooltipModule  } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AddInsuranceComponent, 
    UpdateInsuranceComponent, 
    ListInsuranceComponent, 
    ListSubscriberComponent,
    AddSubscriberComponent, 
    UpdateSubscriberComponent, 
    InsuranceFormComponent, 
    InsuranceListComponent,
    SubscriberFormComponent, 
    SubscriberListComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule
  ]
})
export class InsuranceModule { }
