import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrMListComponent } from './cr-mlist/cr-mlist.component';

const routes: Routes = [
  {path : 'list', component : CrMListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRegisterMovementRoutingModule { }
