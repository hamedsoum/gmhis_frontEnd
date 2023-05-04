import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { ListRegionComponent } from './list-region/list-region.component';
import { RegionListComponent } from '../_shared/region/region-list/region-list.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common-component/common-component.module';


@NgModule({
  declarations: [
    ListRegionComponent,
    RegionListComponent,
    ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentModule,
  ]
})
export class RegionModule { }
