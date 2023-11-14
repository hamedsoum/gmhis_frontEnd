import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { GMHISAdmissionCreateUpdateComponent } from './admission-create-update/admission-create-update.component';
import { AdmissionConsultationsComponent } from './consultation/gmhis-admission-consultations.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { GMHISEmergencyAdmissionListComponent } from './emergency/gmhis-emergency-admission-list.component';
import { GMHISAdmissionsComponent } from './gmhis-admissions.component';
import { NbTabsetModule } from '@nebular/theme';


@NgModule({
  declarations: [
    GMHISAdmissionCreateUpdateComponent, 
    AdmissionConsultationsComponent, 
    ConfirmationComponent,
    GMHISEmergencyAdmissionListComponent,
    GMHISAdmissionsComponent ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    SharedModule,
    InvoiceModule,
    NgxExtendedPdfViewerModule,
    NbDateFnsDateModule,
    NbTabsetModule
  ],
  exports: [
    GMHISAdmissionCreateUpdateComponent
  ]
})
export class AdmissionModule { }
