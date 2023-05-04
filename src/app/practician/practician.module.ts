import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticianRoutingModule } from './practician-routing.module';
import { AddPracticianComponent } from './add-practician/add-practician.component';
import { UpdatePracticianComponent } from './update-practician/update-practician.component';
import { ListPracticianComponent } from './list-practician/list-practician.component';
import { PracticianFormComponent } from '../_shared/practician/practician-form/practician-form.component';
import { PracticianListComponent } from '../_shared/practician/practician-list/practician-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonComponentModule } from '../common-component/common-component.module';


@NgModule({
  declarations: [
    AddPracticianComponent, 
    UpdatePracticianComponent, 
    ListPracticianComponent,
    PracticianFormComponent,
    PracticianListComponent, 
  ],
  imports: [
    CommonModule,
    PracticianRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule,
    NgxDropzoneModule,
    CommonComponentModule
  ]
})
export class PracticianModule { }
