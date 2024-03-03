import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { SharedModule } from '../shared/shared.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PaymentComponent } from './payment/payment.component';
import { InsuranceBillComponent } from './insurance-bill/insurance-bill.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PracticianBillComponent } from './practician-bill/practician-bill.component';
import { GMHISInvoiceCreateUpdateHeaderInformationComponent } from './invoice-form/gmhis-invoice-create-update-header-information.component';


@NgModule({
  declarations: [
    InvoiceListComponent, 
    InvoiceFormComponent, 
    PaymentComponent, 
    InsuranceBillComponent, 
    PracticianBillComponent,
    GMHISInvoiceCreateUpdateHeaderInformationComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    NgxExtendedPdfViewerModule,
    NgbDropdownModule
  ],
  exports: [
    InvoiceFormComponent,
    PaymentComponent
  ]
})
export class InvoiceModule { }
