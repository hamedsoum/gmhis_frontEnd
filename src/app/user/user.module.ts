import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserFormComponent } from './../_shared/user/user-form/user-form.component';
import { UserListComponent } from './../_shared/user/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoleFormComponent } from './../_shared/user/user-role-form/user-role-form.component';
import { UserInformationFormComponent } from './../_shared/user/user-information-form/user-information-form.component';
import { NgbDatepickerModule, NgbPaginationModule, NgbTimepickerModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    AddUserComponent,
    UpdateUserComponent,
    ListUserComponent,
    UserFormComponent,
    UserListComponent,
    UserInformationFormComponent,
    UserRoleFormComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbTooltipModule,
  ]
})
export class UserModule { }
