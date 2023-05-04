import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTypeCroFamilyComponent } from './add-type-cro-family/add-type-cro-family.component';
import { ListTypeCroFamilyComponent } from './list-type-cro-family/list-type-cro-family.component';
import { UpdateTypeCroFamilyComponent } from './update-type-cro-family/update-type-cro-family.component';

const routes: Routes = [
  {path:"add", component:AddTypeCroFamilyComponent},
  {path:"update/:id", component: UpdateTypeCroFamilyComponent},
  {path:"list", component:ListTypeCroFamilyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCroFamilyRoutingModule { }
