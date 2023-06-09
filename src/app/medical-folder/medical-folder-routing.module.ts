import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewExaminationComponent } from './examination/new-examination/new-examination.component';
import { PatientFolderExaminationDetailsComponent } from './patient-folder-details/patient-folder-examination.details.component';
import { PatientFolderComponent } from './patient-folder/patient-folder.component';

const routes: Routes = [
  {path : "patient-folder/:id", component : PatientFolderComponent},
  {path : "patient-folder-details/:id", component : PatientFolderExaminationDetailsComponent },
  {path : "new-examination", component : NewExaminationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalFolderRoutingModule { }
