import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from "./add-role/add-role.component";
import { ListRoleComponent } from './list-role/list-role.component';
import { UpdateRoleComponent } from "./update-role/update-role.component";

const routes: Routes = [
  { path: 'add', component:AddRoleComponent },
  { path: 'update/:id', component:UpdateRoleComponent },
   { path: 'list', component:ListRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
