import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCheckUpComponent } from './add-check-up/add-check-up.component';
import { ListCheckUpComponent } from './list-check-up/list-check-up.component';
import { UpdateCheckUpComponent } from './update-check-up/update-check-up.component';

const routes: Routes = [
  {path:'add', component: AddCheckUpComponent},
  {path:'update/:id', component: UpdateCheckUpComponent},
  {path:'list', component: ListCheckUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckUpRoutingModule { }
