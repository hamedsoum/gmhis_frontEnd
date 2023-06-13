import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialityRoutingModule } from './speciality-routing.module';
import { SpecialityFormComponent } from './speciality-form/speciality-form.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SpecialityFormComponent, SpecialityListComponent],
  imports: [
    CommonModule,
    SpecialityRoutingModule,
    SharedModule
  ]
})
export class SpecialityModule { }
