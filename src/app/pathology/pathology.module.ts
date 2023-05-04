import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologyRoutingModule } from './pathology-routing.module';
import { AddPathologyComponent } from './add-pathology/add-pathology.component';
import { UpdatePathologyComponent } from './update-pathology/update-pathology.component';
import { ListPathologyComponent } from './list-pathology/list-pathology.component';
import { PathologyListComponent } from '../_shared/pathology/pathology-list/pathology-list.component';
import { PathologyFormComponent } from '../_shared/pathology/pathology-form/pathology-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AddPathologyComponent,
    UpdatePathologyComponent,
    ListPathologyComponent,
    PathologyFormComponent,
    PathologyListComponent],
  imports: [
    CommonModule,
    PathologyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule
  ]
})
export class PathologyModule { }
