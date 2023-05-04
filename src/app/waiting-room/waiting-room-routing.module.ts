import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWaitingRoomComponent } from './add-waiting-room/add-waiting-room.component';
import { ListWaitingRoomComponent } from './list-waiting-room/list-waiting-room.component';
import { PatientInWaintingRoomComponent } from "./patient-in-wainting-room/patient-in-wainting-room.component";
import { UpdateWaitingRoomComponent } from './update-waiting-room/update-waiting-room.component';

const routes: Routes = [
    { path: '', component:PatientInWaintingRoomComponent },
    {path:"add", component:AddWaitingRoomComponent},
    {path:"update/:id", component: UpdateWaitingRoomComponent},
    {path:"list", component:ListWaitingRoomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitingRoomRoutingModule { }