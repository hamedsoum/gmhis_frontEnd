import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTypeCroComponent } from './add-type-cro/add-type-cro.component';
import { ListTypeCroComponent } from './list-type-cro/list-type-cro.component';
import { UpdateTypeCroComponent } from './update-type-cro/update-type-cro.component';

const routes: Routes = [
  {path:"add", component:AddTypeCroComponent},
  {path:"update/:id", component: UpdateTypeCroComponent},
  {path:"list", component:ListTypeCroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCroRoutingModule { }
