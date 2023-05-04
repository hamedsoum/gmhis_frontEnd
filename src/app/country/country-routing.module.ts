import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCountryComponent } from "./add-country/add-country.component";
import { UpdateCountryComponent } from "./update-country/update-country.component";
import { ListCountryComponent } from "./list-country/list-country.component";

const routes: Routes = [
  {path:"add", component:AddCountryComponent},
  {path:"update/:id", component: UpdateCountryComponent},
  {path:"list", component:ListCountryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
