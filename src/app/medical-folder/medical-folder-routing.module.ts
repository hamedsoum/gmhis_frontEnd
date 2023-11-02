import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewExaminationComponent } from './examination/new-examination/new-examination.component';
import { PatientFolderAdmissionComponent } from './patient-folder-admission/patient-folder-admission.component';
import { PatientFolderComponent } from './patient-folder/patient-folder.component';

const routes: Routes = [
  {path : "patient-folder/:id", component : PatientFolderComponent},
  {path : "patient-folder-admission/:id", component : PatientFolderAdmissionComponent },
  {path : "new-examination", component : NewExaminationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalFolderRoutingModule { }
