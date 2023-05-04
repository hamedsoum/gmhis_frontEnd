import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantTypeRoutingModule } from './constant-type-routing.module';
import { ListConstantTypeComponent } from './list-constant-type/list-constant-type.component';
import { AddConstantTypeComponent } from './add-constant-type/add-constant-type.component';
import { UpdateConstantTypeComponent } from './update-constant-type/update-constant-type.component';
import { ConstantTypeFormComponent } from '../_shared/constant-type/constant-type-form/constant-type-form.component';
import { ConstantTypeListComponent } from '../_shared/constant-type/constant-type-list/constant-type-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListConstantTypeComponent, 
    AddConstantTypeComponent, 
    UpdateConstantTypeComponent, 
    ConstantTypeListComponent, 
    ConstantTypeFormComponent
  ],
  imports: [
    CommonModule,
    ConstantTypeRoutingModule,
    NgSelectModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTooltipModule
  ]
})
export class ConstantTypeModule { }
