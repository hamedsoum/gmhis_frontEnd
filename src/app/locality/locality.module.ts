import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalityRoutingModule } from './locality-routing.module';
import { ListLocalityComponent } from './list-locality/list-locality.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common-component/common-component.module';
import { LocalityListComponent } from '../_shared/locality/locality-list/locality-list.component';


@NgModule({
  declarations: [
    ListLocalityComponent,
    LocalityListComponent,],
  imports: [
    CommonModule,
    LocalityRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentModule,
  ]
})
export class LocalityModule { }
