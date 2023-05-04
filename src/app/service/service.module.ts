import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { AddServiceComponent } from './add-service/add-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ServiceFormComponent } from './../_shared/service/service-form/service-form.component';
import { ServiceListComponent } from './../_shared/service/service-list/service-list.component';

import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    AddServiceComponent, 
    UpdateServiceComponent, 
    ListServiceComponent, 
    ServiceFormComponent, 
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentModule,
  ]
})
export class ServiceModule { }
