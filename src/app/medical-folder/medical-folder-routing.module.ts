import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderComponent } from "./folder/folder.component";

const routes: Routes = [
  { path: ':patientId', component: FolderComponent },
  { path: ':patientId/:admissionId', component: FolderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalFolderRoutingModule { }
