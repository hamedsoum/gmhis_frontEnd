import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalFolderRoutingModule } from './medical-folder-routing.module';
import { FolderComponent } from './folder/folder.component';
import { AntecedentComponent } from './antecedent/antecedent.component';
import { NewConsultationComponent } from './new-consultation/new-consultation.component';
import { ConsultationFollowUpComponent } from './consultation-follow-up/consultation-follow-up.component';
import { ExamFollowUpComponent } from './exam-follow-up/exam-follow-up.component';
import { PrescriptionFollowUpComponent } from './prescription-follow-up/prescription-follow-up.component';
import { CertificateFollowUpComponent } from './certificate-follow-up/certificate-follow-up.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule, NgbDatepickerModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ConstantFollowUpComponent } from './constant-follow-up/constant-follow-up.component';
import { PatientConstantModule } from '../patient-constant/patient-constant.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CroFollowUpComponent } from './cro-follow-up/cro-follow-up.component';
import { CheckUpFollowUpComponent } from './check-up-follow-up/check-up-follow-up.component';
import { TypePrescriptionModule } from '../type-prescription/type-prescription.module';
import { PatientModule } from '../patient/patient.module';
import { MailFollowUpComponent } from './mail-follow-up/mail-follow-up.component';


@NgModule({
  declarations: [
    FolderComponent, 
    AntecedentComponent, 
    NewConsultationComponent, 
    ConsultationFollowUpComponent, 
    ExamFollowUpComponent, 
    PrescriptionFollowUpComponent, 
    CertificateFollowUpComponent, 
    ConstantFollowUpComponent, 
    CroFollowUpComponent, 
    CheckUpFollowUpComponent,
    MailFollowUpComponent,
  ],
  imports: [
    CommonModule,
    MedicalFolderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgSelectModule,
    CKEditorModule,
    PatientConstantModule,
    NgxExtendedPdfViewerModule,
    TypePrescriptionModule,
    NgbTooltipModule,
    PatientModule
  ]
})
export class MedicalFolderModule { }
