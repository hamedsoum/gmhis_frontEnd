import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddConventionComponent } from './add-convention/add-convention.component';
import { ListConventionComponent } from './list-convention/list-convention.component';
import { UpdateConventionComponent } from './update-convention/update-convention.component';

const routes: Routes = [
  {path:"add", component:AddConventionComponent},
  {path:"update/:id", component: UpdateConventionComponent},
  {path:"list", component:ListConventionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConventionRoutingModule { }
