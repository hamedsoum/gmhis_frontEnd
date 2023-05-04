import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTypeMailComponent } from './add-type-mail/add-type-mail.component';
import { ListTypeMailComponent } from './list-type-mail/list-type-mail.component';
import { UpdateTypeMailComponent } from './update-type-mail/update-type-mail.component';

const routes: Routes = [
  {path:"add", component:AddTypeMailComponent},
  {path:"update/:id", component: UpdateTypeMailComponent},
  {path:"list", component:ListTypeMailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeMailRoutingModule { }
