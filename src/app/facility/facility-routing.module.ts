import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import { UpdateFacilityComponent } from './update-facility/update-facility.component';

const routes: Routes = [
  {path:"add", component:AddFacilityComponent},
  {path:"update/:id", component: UpdateFacilityComponent},
  {path:"list", component:ListFacilityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
