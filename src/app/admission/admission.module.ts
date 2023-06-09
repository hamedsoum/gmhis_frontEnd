import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [AdmissionFormComponent, AdmissionListComponent, ConfirmationComponent, ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    SharedModule,
    InvoiceModule,
    NgxExtendedPdfViewerModule

  ],
  exports: [
    AdmissionFormComponent
  ]
})
export class AdmissionModule { }
