import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDistrictComponent } from './list-district/list-district.component';

const routes: Routes = [
  {path:"list", component:ListDistrictComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
