import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLocalityComponent } from './list-locality/list-locality.component';

const routes: Routes = [
  {path:"list", component:ListLocalityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalityRoutingModule { }
