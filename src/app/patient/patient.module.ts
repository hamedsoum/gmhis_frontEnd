import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SharedModule } from '../shared/shared.module';
import { PatientFormmComponent } from './patient-formm/patient-formm.component';
import { NbDatepickerModule } from '@nebular/theme';
import { AdmissionModule } from '../admission/admission.module';
import {Ng2TelInputModule} from 'ng2-tel-input';


@NgModule({
  declarations: [PatientListComponent, PatientFormmComponent],
  imports: [CommonModule, PatientRoutingModule, SharedModule,NbDatepickerModule, AdmissionModule,Ng2TelInputModule],
})
export class PatientModule {}
