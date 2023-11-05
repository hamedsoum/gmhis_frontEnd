import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbContextMenuModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { NgbCarouselModule, NgbDropdownModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { SafePipe } from './safe.pipe';
import { SHButtonComponent } from './components/button/sh-button.component';
import { SHDatafieldTextaeraComponent } from './components/data-field/textarea/data-field-textarea.component';
import { SHDataFieldText } from './components/data-field/text/data-field-text.component';
import { SharedxaminationRecord } from './components/record/shared-examination-record.component';
import { SharedPatientInformations } from './components/patient-informations/shared-patient-informations.component';
import { SHIconComponent } from './components/icon/sh-icon.component';



@NgModule({
  declarations: [
    SafePipe, 
    SHButtonComponent, 
    SHDatafieldTextaeraComponent, 
    SHDataFieldText,
    SharedxaminationRecord, 
    SharedPatientInformations,
    SHIconComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NbFormFieldModule,
    NgSelectModule,
    NgxPaginationModule,
    FontAwesomeModule,
    NgbTooltipModule,
    NgxDropzoneModule,
    NbTabsetModule,
    NbContextMenuModule,
    NgxExtendedPdfViewerModule,
    NgbPopoverModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgxCurrencyModule,
    NbDatepickerModule,
    NgbCarouselModule,
    SafePipe,
    SHButtonComponent,
    SHDatafieldTextaeraComponent,
    SHDataFieldText,
    SharedxaminationRecord,
    SharedPatientInformations
  ]
})
export class SharedModule { }
