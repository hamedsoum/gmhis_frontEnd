import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { ListPaymentTypeComponent } from './list-payment-type/list-payment-type.component';
import { UpdatePaymentTypeComponent } from './update-payment-type/update-payment-type.component';
import { AddPaymentTypeComponent } from './add-payment-type/add-payment-type.component';
import { PaymentTypeListComponent } from '../_shared/payment-type/payment-type-list/payment-type-list.component';
import { PaymentTypeFormComponent } from '../_shared/payment-type/payment-type-form/payment-type-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonComponentModule } from '../common-component/common-component.module';


@NgModule({
  declarations: [
    ListPaymentTypeComponent,
    UpdatePaymentTypeComponent,
    AddPaymentTypeComponent,
    PaymentTypeListComponent,
    PaymentTypeFormComponent],
  imports: [
    CommonModule,
    PaymentTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule,
    NgxDropzoneModule,
    CommonComponentModule
  ]
})
export class PaymentTypeModule { }
