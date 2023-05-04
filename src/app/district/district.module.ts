import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { ListDistrictComponent } from './list-district/list-district.component';
import { DistrictListComponent } from '../_shared/district/district-list/district-list.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common-component/common-component.module';


@NgModule({
  declarations: [
    ListDistrictComponent,
    DistrictListComponent,
  ],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentModule,
  ]
})
export class DistrictModule { }
