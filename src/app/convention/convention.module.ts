import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConventionRoutingModule } from './convention-routing.module';
import { AddConventionComponent } from './add-convention/add-convention.component';
import { ListConventionComponent } from './list-convention/list-convention.component';
import { UpdateConventionComponent } from './update-convention/update-convention.component';
import { ConventionFormComponent } from '../_shared/convention/convention-form/convention-form.component';
import { ConventionListComponent } from '../_shared/convention/convention-list/convention-list.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddConventionComponent, 
    ListConventionComponent, 
    UpdateConventionComponent, 
    ConventionFormComponent, 
    ConventionListComponent
],
  imports: [
    CommonModule,
    ConventionRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConventionModule { }
