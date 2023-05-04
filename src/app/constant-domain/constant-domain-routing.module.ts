import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddConstantDomainComponent } from './add-constant-domain/add-constant-domain.component';
import { ListConstantDomainComponent } from './list-constant-domain/list-constant-domain.component';
import { UpdateConstantDomainComponent } from './update-constant-domain/update-constant-domain.component';

const routes: Routes = [
  {path:'add', component:AddConstantDomainComponent},
  {path:'update/:id', component:UpdateConstantDomainComponent},
  {path:'list', component:ListConstantDomainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstantDomainRoutingModule { }
