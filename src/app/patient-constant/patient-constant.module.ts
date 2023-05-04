import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientConstantRoutingModule } from './patient-constant-routing.module';
import { AddPatientConstantComponent } from './add-patient-constant/add-patient-constant.component';
import { UpdatePatientConstantComponent } from './update-patient-constant/update-patient-constant.component';
import { ListPatientConstantComponent } from './list-patient-constant/list-patient-constant.component';
import { PatientConstantFormComponent } from '../_shared/patient-constant/patient-constant-form/patient-constant-form.component';
import { PatientConstantListComponent } from '../_shared/patient-constant/patient-constant-list/patient-constant-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseTemplateModule } from '../base-template/base-template.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbPaginationModule, NgbPopoverModule, NgbTimepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddPatientConstantComponent, 
    UpdatePatientConstantComponent, 
    ListPatientConstantComponent,
    PatientConstantFormComponent,
    PatientConstantListComponent
    
  ],
  imports: [
    CommonModule,
    PatientConstantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BaseTemplateModule,
    NgSelectModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPaginationModule, 
    NgbTooltipModule,
    NgbPopoverModule,
  ],
  exports: [
    PatientConstantListComponent,
    PatientConstantFormComponent 
   ]
})
export class PatientConstantModule { }
