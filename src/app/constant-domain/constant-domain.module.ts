import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantDomainRoutingModule } from './constant-domain-routing.module';
import { AddConstantDomainComponent } from './add-constant-domain/add-constant-domain.component';
import { UpdateConstantDomainComponent } from './update-constant-domain/update-constant-domain.component';
import { ListConstantDomainComponent } from './list-constant-domain/list-constant-domain.component';
import { ConstantDomainFormComponent } from '../_shared/constant-domain/constant-domain-form/constant-domain-form.component';
import { ConstantDomainListComponent } from '../_shared/constant-domain/constant-domain-list/constant-domain-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddConstantDomainComponent, 
    UpdateConstantDomainComponent, 
    ListConstantDomainComponent,
    ConstantDomainFormComponent,
    ConstantDomainListComponent,
    ],
  imports: [
    CommonModule,
    ConstantDomainRoutingModule,
    NgSelectModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTooltipModule
  ]
})
export class ConstantDomainModule { }
