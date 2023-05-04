import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCityComponent } from './add-city/add-city.component';
import { ListCityComponent } from './list-city/list-city.component';
import { UpdateCityComponent } from './update-city/update-city.component';

const routes: Routes = [
  {path:"add", component:AddCityComponent},
  {path:"update/:id", component: UpdateCityComponent},
  {path:"list", component:ListCityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
