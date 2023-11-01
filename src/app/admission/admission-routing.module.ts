import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GMHISAdmissionsComponent } from './gmhis-admissions.component';

const routes: Routes = [
  {path : '', component : GMHISAdmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
