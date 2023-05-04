import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { ListCityComponent } from './list-city/list-city.component';
import { AddCityComponent } from './add-city/add-city.component';
import { UpdateCityComponent } from './update-city/update-city.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityListComponent } from '../_shared/city/city-list/city-list.component';
import { CityFormComponent } from '../_shared/city/city-form/city-form.component';

@NgModule({
  declarations: [
    ListCityComponent, 
    AddCityComponent, 
    UpdateCityComponent, 
    CityListComponent, 
    CityFormComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CityModule { }
