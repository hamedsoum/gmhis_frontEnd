import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPathologyComponent } from './add-pathology/add-pathology.component';
import { ListPathologyComponent } from './list-pathology/list-pathology.component';
import { UpdatePathologyComponent } from './update-pathology/update-pathology.component';

const routes: Routes = [
  {path:"add", component:AddPathologyComponent},
  {path:"update/:id", component: UpdatePathologyComponent},
  {path:"list", component:ListPathologyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologyRoutingModule { }
