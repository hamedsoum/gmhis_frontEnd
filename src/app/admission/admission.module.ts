import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { UpdateAdmissionComponent } from './update-admission/update-admission.component';
import { ListAdmissionComponent } from './list-admission/list-admission.component';
import { AdmissionFormComponent } from "./../_shared/admission/admission-form/admission-form.component";
import { AdmissionListComponent } from './../_shared/admission/admission-list/admission-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import { InvoiceFormComponent } from "./../_shared/admission/invoice-form/invoice-form.component";
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { InvoiceListComponent } from "./../_shared/admission/invoice-list/invoice-list.component";
import { NgbDatepickerModule, NgbTimepickerModule, NgbPaginationModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PatientModule } from '../patient/patient.module';


@NgModule({
  declarations: [
    AddAdmissionComponent, 
    UpdateAdmissionComponent, 
    ListAdmissionComponent,
    AdmissionFormComponent, 
    AdmissionListComponent, 
    InvoiceFormComponent, 
    AddInvoiceComponent, 
    UpdateInvoiceComponent,
    ListInvoiceComponent, 
    InvoiceListComponent
   ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPaginationModule,  
    NgbTooltipModule,
    NgxExtendedPdfViewerModule,
    PatientModule
  ],
  exports: [
    AdmissionListComponent,
    InvoiceFormComponent
  ]
})
    
    export class AdmissionModule { }
