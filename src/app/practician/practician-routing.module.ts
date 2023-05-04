import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPracticianComponent } from './add-practician/add-practician.component';
import { ListPracticianComponent } from './list-practician/list-practician.component';
import { UpdatePracticianComponent } from './update-practician/update-practician.component';

const routes: Routes = [
  {path:"add", component:AddPracticianComponent},
  {path:"update/:id", component: UpdatePracticianComponent},
  {path:"list", component:ListPracticianComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticianRoutingModule { }
