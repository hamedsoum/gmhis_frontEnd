import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './permission/permission.component';
import { CommonComponentModule } from '../common-component/common-component.module';


@NgModule({
  declarations: [
    PermissionComponent, 
  ],
  imports: [
    CommonModule,
    PermissionRoutingModule,
    CommonComponentModule
  ]
})
export class PermissionModule { }
