import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialityRoutingModule } from './speciality-routing.module';
import { AddSpecialityComponent } from './add-speciality/add-speciality.component';
import { UpdateSpecialityComponent } from './update-speciality/update-speciality.component';
import { ListSpecialityComponent } from './list-speciality/list-speciality.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecialityListComponent } from '../_shared/speciality/speciality-list/speciality-list.component';
import { SpecialityFormComponent } from '../_shared/speciality/speciality-form/speciality-form.component';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    AddSpecialityComponent, 
    UpdateSpecialityComponent, 
    ListSpecialityComponent, 
    SpecialityFormComponent, 
    SpecialityListComponent
  ],
  imports: [
    CommonModule,
    SpecialityRoutingModule,
    
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentModule,
  ]
})
export class SpecialityModule { }
