import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddCountryComponent } from './add-country/add-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { ListCountryComponent } from './list-country/list-country.component';

import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryFormComponent } from '../_shared/country/country-form/country-form.component';
import { CountryListComponent } from '../_shared/country/country-list/country-list.component';

@NgModule({
  declarations: [
    AddCountryComponent, 
    UpdateCountryComponent, 
    ListCountryComponent, 
    CountryFormComponent, 
    CountryListComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CountryModule { }
