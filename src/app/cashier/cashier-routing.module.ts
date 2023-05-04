import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCashierComponent } from './add-cashier/add-cashier.component';
import { ListCashierComponent } from './list-cashier/list-cashier.component';
import { UpdateCashierComponent } from './update-cashier/update-cashier.component';

const routes: Routes = [
  {path:"add", component:AddCashierComponent},
  {path:"update/:id", component: UpdateCashierComponent},
  {path:"list", component:ListCashierComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
