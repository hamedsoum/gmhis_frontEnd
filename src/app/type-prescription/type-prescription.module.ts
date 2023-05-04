import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypePrescriptionRoutingModule } from './type-prescription-routing.module';
import { ListTypePrescriptionComponent } from './list-type-prescription/list-type-prescription.component';
import { AddTypePrescriptionComponent } from './add-type-prescription/add-type-prescription.component';
import { UpdateTypePrescriptionComponent } from './update-type-prescription/update-type-prescription.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonComponentModule } from '../common-component/common-component.module';
import { TypePrescriptionListComponent } from '../_shared/document/type-prescription-list/type-prescription-list.component';
import { TypePrescriptionFormComponent } from '../_shared/document/type-prescription-form/type-prescription-form.component';
import { PrescribingMedicationComponent } from '../_shared/prescribing-medication/prescribing-medication.component';

@NgModule({
  declarations: [
    ListTypePrescriptionComponent, 
    AddTypePrescriptionComponent, 
    UpdateTypePrescriptionComponent, 
    TypePrescriptionFormComponent,
    TypePrescriptionListComponent,
    PrescribingMedicationComponent
  ],
  imports: [
    CommonModule,
    TypePrescriptionRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    CommonComponentModule,
  ],
  exports: [PrescribingMedicationComponent]
})
export class TypePrescriptionModule { }
