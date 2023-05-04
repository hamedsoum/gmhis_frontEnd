import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListPatientComponent } from './list-patient/list-patient.component';
import { RouterModule } from '@angular/router';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { BaseTemplateModule } from '../base-template/base-template.module';
import { FacturationAdmissionPatientComponent } from './facturation-admission-patient/facturation-admission-patient.component';
import { PatientFormComponent } from "./../_shared/patient/patient-form/patient-form.component";
import { PatientListComponent } from "./../_shared/patient/patient-list/patient-list.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbPaginationModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PatientTagComponent } from '../_shared/patient/patient-tag/patient-tag.component';

@NgModule({
  declarations: [
    AddPatientComponent, 
    ListPatientComponent, 
    UpdatePatientComponent,  
    PatientFormComponent,
    PatientListComponent, 
    FacturationAdmissionPatientComponent,
    PatientTagComponent 
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BaseTemplateModule,
    NgSelectModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgxBarcodeModule,
    NgxExtendedPdfViewerModule,
  ],
  exports: [
    PatientListComponent,
    PatientTagComponent
  ]
 })
export class PatientModule { }
