import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalFolderRoutingModule } from './medical-folder-routing.module';
import { NewExaminationComponent } from './examination/new-examination/new-examination.component';
import { SharedModule } from '../shared/shared.module';
import { PatientFolderComponent } from './patient-folder/patient-folder.component';
import { NbMenuModule } from '@nebular/theme';
import { ExaminationListComponent } from './examination/examination-list/examination-list.component';
import { ConstantModule } from '../constant/constant.module';
import { ExamenModule } from '../examen/examen.module';
import { PrescriptionModule } from '../prescription/prescription.module';
import { MedicalCertificatesModule } from '../medical-certificates/medical-certificates.module';
import { PatientFolderAdmissionComponent } from './patient-folder-admission/patient-folder-admission.component';
import { InvoiceModule } from '../invoice/invoice.module';
import { examinationRecord } from './examination/record/examination-record.component';
import { PatientInformations } from './patient-informations/patient-informations.component';
import { AdmissionModule } from '../admission/admission.module';
import { GMHISEvacuationsModule } from '../evacuation/gmhis-evacuations.module';
import { GMHISDeathModule } from '../death/gmhis-death.module';
import { GMHISHospitalizationModule } from '../hospitalization/gmhis-hospitalization.module';


@NgModule({
  declarations: [
    NewExaminationComponent,
    PatientFolderComponent,
    ExaminationListComponent,
    PatientFolderAdmissionComponent,
    examinationRecord,
    PatientInformations,
    ],
  imports: [
    CommonModule,
    MedicalFolderRoutingModule,
    SharedModule,
    NbMenuModule.forRoot(), 
    ConstantModule,
    ExamenModule,
    PrescriptionModule,
    MedicalCertificatesModule,
    InvoiceModule,
    AdmissionModule,
    GMHISEvacuationsModule,
    GMHISDeathModule,
    GMHISHospitalizationModule
    ],
    exports: [examinationRecord]
})
export class MedicalFolderModule { }
