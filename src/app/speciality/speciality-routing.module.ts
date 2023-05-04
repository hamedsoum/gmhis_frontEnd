import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSpecialityComponent } from './add-speciality/add-speciality.component';
import { ListSpecialityComponent } from './list-speciality/list-speciality.component';
import { UpdateSpecialityComponent } from './update-speciality/update-speciality.component';

const routes: Routes = [
  {path:"add", component:AddSpecialityComponent},
  {path:"update/:id", component: UpdateSpecialityComponent},
  {path:"list", component:ListSpecialityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialityRoutingModule { }
