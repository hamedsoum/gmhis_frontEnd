import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { AnalysisRequestComponent } from './analysis-request/analysis-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonComponentModule } from '../common-component/common-component.module';
import { PerformAnalysisComponent } from './perform-analysis/perform-analysis.component';


@NgModule({
  declarations: [AnalysisRequestComponent, PerformAnalysisComponent],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule,
    NgxDropzoneModule,
    CommonComponentModule
  ]
})
export class LaboratoryModule { }
