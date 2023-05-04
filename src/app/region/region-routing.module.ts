import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRegionComponent } from './list-region/list-region.component';

const routes: Routes = [
  {path:"list", component:ListRegionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
