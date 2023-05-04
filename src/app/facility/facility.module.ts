import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { UpdateFacilityComponent } from './update-facility/update-facility.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import { FacilityFormComponent } from '../_shared/facility/facility-form/facility-form.component';
import { FacilityListComponent } from '../_shared/facility/facility-list/facility-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddFacilityComponent, 
    UpdateFacilityComponent, 
    ListFacilityComponent, 
    FacilityFormComponent, 
    FacilityListComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule

  ]
})
export class FacilityModule { }
