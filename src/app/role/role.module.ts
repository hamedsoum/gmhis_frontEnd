import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { RoleFormComponent } from './../_shared/role/role-form/role-form.component';
import { RoleListComponent } from './../_shared/role/role-list/role-list.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbPaginationModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { ListRoleComponent } from './list-role/list-role.component';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    AddRoleComponent,
    UpdateRoleComponent, 
    RoleFormComponent, 
    RoleListComponent, 
    ListRoleComponent,
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbTooltipModule,
    CommonComponentModule
  ]
})
export class RoleModule { }
