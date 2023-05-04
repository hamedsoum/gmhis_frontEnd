import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymptomRoutingModule } from './symptom-routing.module';
import { SymptomeFormComponent } from '../_shared/symptome/symptome-form/symptome-form.component';
import { SymptomListComponent } from '../_shared/symptome/symptom-list/symptom-list.component';
import { AddSymptomComponent } from './add-symptom/add-symptom.component';
import { ListSymptomComponent } from './list-symptom/list-symptom.component';
import { UpdateSymptomComponent } from './update-symptom/update-symptom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [SymptomeFormComponent, SymptomListComponent, AddSymptomComponent, ListSymptomComponent, UpdateSymptomComponent],
  imports: [
    CommonModule,
    SymptomRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule
  ]
})
export class SymptomModule { }
