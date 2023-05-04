import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntecedentRoutingModule } from './antecedent-routing.module';
import { AddAntecedentComponent } from './add-antecedent/add-antecedent.component';
import { UpdateAntecedentComponent } from './update-antecedent/update-antecedent.component';
import { ListAntecedentComponent } from './list-antecedent/list-antecedent.component';
import { AntecedentFormComponent } from './../_shared/antecedent/antecedent-form/antecedent-form.component';
import { AntecedentListComponent } from './../_shared/antecedent/antecedent-list/antecedent-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import {NgbPaginationModule, NgbTooltipModule  } from "@ng-bootstrap/ng-bootstrap";
import { AddAntecedentFamilyComponent } from './add-antecedent-family/add-antecedent-family.component';
import { UpdateAntecedentFamilyComponent } from './update-antecedent-family/update-antecedent-family.component';
import { ListAntecedentFamilyComponent } from './list-antecedent-family/list-antecedent-family.component';
import { AntecedentFamilyFormComponent } from '../_shared/antecedent/antecedent-family-form/antecedent-family-form.component';
import { AntecedentFamilyListComponent } from '../_shared/antecedent/antecedent-family-list/antecedent-family-list.component';



@NgModule({
  declarations: [
    AddAntecedentComponent, 
    UpdateAntecedentComponent, 
    ListAntecedentComponent,
    AntecedentFormComponent, 
    AntecedentListComponent, 
    AddAntecedentFamilyComponent, 
    UpdateAntecedentFamilyComponent, 
    ListAntecedentFamilyComponent,
    AntecedentFamilyFormComponent,
    AntecedentFamilyListComponent,
  ],
  imports: [
    CommonModule,
    AntecedentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbTooltipModule
  ]
})
export class AntecedentModule { }
