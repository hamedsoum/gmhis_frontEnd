import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorRoutingModule } from './floor-routing.module';
import { FloorListComponent } from './floor-list/floor-list.component';
import { FloorFormComponent } from './floor-form/floor-form.component';


@NgModule({
  declarations: [FloorListComponent, FloorFormComponent],
  imports: [
    CommonModule,
    FloorRoutingModule
  ]
})
export class FloorModule { }
