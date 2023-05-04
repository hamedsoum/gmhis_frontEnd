import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckUpRoutingModule } from './check-up-routing.module';
import { AddCheckUpComponent } from './add-check-up/add-check-up.component';
import { UpdateCheckUpComponent } from './update-check-up/update-check-up.component';
import { ListCheckUpComponent } from './list-check-up/list-check-up.component';
import { CheckUpFormComponent } from '../_shared/check-up/check-up-form/check-up-form.component';
import { CheckUpListComponent } from '../_shared/check-up/check-up-list/check-up-list.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCheckUpComponent, 
    UpdateCheckUpComponent, 
    ListCheckUpComponent, 
    CheckUpFormComponent, 
    CheckUpListComponent
  ],
  imports: [
    CommonModule,
    CheckUpRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckUpModule { }
