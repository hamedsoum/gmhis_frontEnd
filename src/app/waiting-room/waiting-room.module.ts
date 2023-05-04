import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientInWaintingRoomComponent } from './patient-in-wainting-room/patient-in-wainting-room.component';
import { WaitingRoomRoutingModule } from "./waiting-room-routing.module";
import { AdmissionModule } from "./../admission/admission.module";
import { AddWaitingRoomComponent } from './add-waiting-room/add-waiting-room.component';
import { UpdateWaitingRoomComponent } from './update-waiting-room/update-waiting-room.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WaitingRoomFormComponent } from './../_shared/waiting-room/waiting-room-form/waiting-room-form.component';
import { WaitingRoomListComponent } from './../_shared/waiting-room/waiting-room-list/waiting-room-list.component';
import { ListWaitingRoomComponent } from './list-waiting-room/list-waiting-room.component';


@NgModule({
  declarations: [
    PatientInWaintingRoomComponent, 
    AddWaitingRoomComponent, 
    UpdateWaitingRoomComponent,
    ListWaitingRoomComponent, 
    WaitingRoomFormComponent, 
    WaitingRoomListComponent
  ],
  imports: [
    CommonModule,
    WaitingRoomRoutingModule,
    AdmissionModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WaitingRoomModule { }
