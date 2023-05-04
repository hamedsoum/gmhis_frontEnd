import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddConstantTypeComponent } from './add-constant-type/add-constant-type.component';
import { ListConstantTypeComponent } from './list-constant-type/list-constant-type.component';
import { UpdateConstantTypeComponent } from './update-constant-type/update-constant-type.component';

const routes: Routes = [
  {path:'add', component:AddConstantTypeComponent},
  {path:'update/:id', component:UpdateConstantTypeComponent},
  {path:'list', component:ListConstantTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstantTypeRoutingModule { }
