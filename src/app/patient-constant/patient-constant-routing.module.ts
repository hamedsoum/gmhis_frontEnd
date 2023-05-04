import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientConstantComponent } from './add-patient-constant/add-patient-constant.component';
import { ListPatientConstantComponent } from './list-patient-constant/list-patient-constant.component';

const routes: Routes = [
  {path:'add/:patientId', component:AddPatientConstantComponent},
  {path:'list/:patientId', component:ListPatientConstantComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientConstantRoutingModule { }
