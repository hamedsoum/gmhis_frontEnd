import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitOfMeasureRoutingModule } from './unit-of-measure-routing.module';
import { AddUnitOfMeasureComponent } from './add-unit-of-measure/add-unit-of-measure.component';
import { UpdateUnitOfMeasureComponent } from './update-unit-of-measure/update-unit-of-measure.component';
import { ListUnitOfMeasureComponent } from './list-unit-of-measure/list-unit-of-measure.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitOfMeasureFormComponent } from '../_shared/unit-of-measure/unit-of-measure-form/unit-of-measure-form.component';
import { UnitOfMeasureListComponent } from '../_shared/unit-of-measure/unit-of-measure-list/unit-of-measure-list.component';
import { CommonComponentModule } from '../common-component/common-component.module';


@NgModule({
  declarations: [
    AddUnitOfMeasureComponent, 
    UpdateUnitOfMeasureComponent, 
    ListUnitOfMeasureComponent,
    UnitOfMeasureFormComponent,
    UnitOfMeasureListComponent,
  ],
  imports: [
    CommonModule,
    UnitOfMeasureRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentModule,
  ]
})
export class UnitOfMeasureModule { }
