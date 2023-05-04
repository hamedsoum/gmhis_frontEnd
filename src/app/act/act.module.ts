import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActRoutingModule } from './act-routing.module';
import { AddActCategoryComponent } from './add-act-category/add-act-category.component';
import { UpdateActCategoryComponent } from './update-act-category/update-act-category.component';
import { ListActCategoryComponent } from './list-act-category/list-act-category.component';
import { ActCategoryFormComponent } from './../_shared/act/act-category-form/act-category-form.component';
import { ActCategoryListComponent } from './../_shared/act/act-category-list/act-category-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AddActFamilyComponent } from './add-act-family/add-act-family.component';
import { UpdateActFamilyComponent } from './update-act-family/update-act-family.component';
import { ListActFamilyComponent } from './list-act-family/list-act-family.component';
import { AddActCodeComponent } from './add-act-code/add-act-code.component';
import { ListActCodeComponent } from './list-act-code/list-act-code.component';
import { UpdateActCodeComponent } from './update-act-code/update-act-code.component';
import { ActCodeListComponent } from './../_shared/act/act-code-list/act-code-list.component';
import { ActCodeFormComponent } from './../_shared/act/act-code-form/act-code-form.component';
import { ActFamilyFormComponent } from '../_shared/act/act-family-form/act-family-form.component';
import { ActFamilyListComponent } from '../_shared/act/act-family-list/act-family-list.component';
import { AddActComponent } from './add-act/add-act.component';
import { UpdateActComponent } from './update-act/update-act.component';
import { ListActComponent } from './list-act/list-act.component';
import { ActFormComponent } from '../_shared/act/act-form/act-form.component';
import { ActListComponent } from '../_shared/act/act-list/act-list.component';

@NgModule({
  declarations: [
    AddActCategoryComponent, 
    UpdateActCategoryComponent, 
    ListActCategoryComponent, 
    ActCategoryFormComponent, 
    ActCategoryListComponent, 
    AddActFamilyComponent, 
    UpdateActFamilyComponent, 
    ListActFamilyComponent, 
    AddActCodeComponent, 
    ListActCodeComponent, 
    UpdateActCodeComponent, 
    ActCodeFormComponent, 
    ActCodeListComponent, 
    ActFamilyFormComponent, 
    ActFamilyListComponent, 
    AddActComponent, 
    UpdateActComponent, 
    ListActComponent, 
    ActFormComponent, 
    ActListComponent,
    
  ],
  imports: [ 
    CommonModule,
    ActRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbTooltipModule
  ]
})
export class ActModule { }
