import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { GMHISEmergencyAdmissionListComponent } from './urgency/gmhis-emergency-admission-list.component';

const routes: Routes = [
  {path : 'list', component : AdmissionListComponent},
  {path : 'emergency', component : GMHISEmergencyAdmissionListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
