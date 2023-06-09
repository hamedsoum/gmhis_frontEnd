import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticianRoutingModule } from './practician-routing.module';
import { PracticianListComponent } from './practician-list/practician-list.component';
import { PracticianFormComponent } from './practician-form/practician-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PracticianListComponent, PracticianFormComponent],
  imports: [
    CommonModule,
    PracticianRoutingModule,
    SharedModule
  ]
})
export class PracticianModule { }
