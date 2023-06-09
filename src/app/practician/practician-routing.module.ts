import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticianListComponent } from './practician-list/practician-list.component';

const routes: Routes = [
  {path: 'list', component: PracticianListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticianRoutingModule { }
