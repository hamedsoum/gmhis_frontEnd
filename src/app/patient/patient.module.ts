import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SharedModule } from '../shared/shared.module';
import { PatientCreateUpdateComponent } from './create-update/patient-create-update.component';
import { NbDatepickerModule, NbTabsetModule } from '@nebular/theme';
import { AdmissionModule } from '../admission/admission.module';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { GMHISPatientRecordComponent } from './record/gmhis-patient-record.component';
import { GMHISPatientDetailsComponent } from './detail/gmhis-patient-details.component';
import { GMHISPatientInsuranceComponent } from './insurance/gmhis-patient-insurance.component';
import { GMHISBalanceTransactionComponent } from './caution-transaction/gmhis-caution-transaction.component';

@NgModule({
  declarations: [
    // ***
    PatientListComponent, 
    PatientCreateUpdateComponent,
    GMHISPatientRecordComponent,
    GMHISPatientDetailsComponent,
    GMHISPatientInsuranceComponent,
    GMHISBalanceTransactionComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    NbDatepickerModule, 
    AdmissionModule, 
    Ng2TelInputModule,
    NbTabsetModule
  ],
})
export class PatientModule {}
