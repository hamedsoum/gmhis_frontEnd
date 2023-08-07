import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenRoutingModule } from './examen-routing.module';
import { ExamenListComponent } from './examen-list/examen-list.component';
import { ExamenFormComponent } from './examen-form/examen-form.component';
import { SharedModule } from '../shared/shared.module';
import { NbAccordionModule, NbCheckboxModule } from '@nebular/theme';
import { LaboratoryExamenComponent } from './laboratory-examen/laboratory-examen.component';
import { AnalysisBulletinComponent } from './analysis-bulletin/analysis-bulletin.component';
import { examenComplementaryManagerComponent } from './complementary/examen-complementary-manager.component';
import { BiologicalAnalysisComponent } from './complementary/analysis-biological/biological-analysis.component';
import { ImageryComponent } from './complementary/imagery/imagery.component';


@NgModule({
  declarations: [
    ImageryComponent,
    ExamenListComponent, 
    ExamenFormComponent, 
    LaboratoryExamenComponent, 
    AnalysisBulletinComponent, 
    BiologicalAnalysisComponent,
    examenComplementaryManagerComponent
  ],
  imports: [
    CommonModule,
    ExamenRoutingModule,
    SharedModule,
    NbCheckboxModule,
    NbAccordionModule
  ],
  exports: [
    ImageryComponent,
    ExamenListComponent,
     ExamenFormComponent,
     BiologicalAnalysisComponent,
     examenComplementaryManagerComponent
  ]
})
export class ExamenModule { }
