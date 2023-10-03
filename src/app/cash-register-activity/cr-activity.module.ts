import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CractivityListComponent } from './list/cractivity-list.component';
import { SharedModule } from '../shared/shared.module';
import { CractivityFormComponent } from './form/cractivity-form.component';
import { CrActivityRoutingModule } from './cr-activity-routing.module';


@NgModule({
  declarations: [CractivityFormComponent, CractivityListComponent],
  imports: [
    CommonModule,
    CrActivityRoutingModule,
    SharedModule
  ]
})
export class CrActivityModule { }
