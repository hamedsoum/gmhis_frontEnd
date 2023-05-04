import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCashOperationComponent } from "./../cash-register/add-cash-operation/add-cash-operation.component";
import { AddCashRegisterComponent } from "./add-cash-register/add-cash-register.component";
import { UpdateCashRegisterComponent } from "./update-cash-register/update-cash-register.component";
import { ListCashRegisterComponent } from "./list-cash-register/list-cash-register.component";

const routes: Routes = [
  {path:'add', component: AddCashRegisterComponent},
  {path:'update/:id', component: UpdateCashRegisterComponent},
  {path:'list', component: ListCashRegisterComponent},
  {path:'add-operation/:invoiceId', component: AddCashOperationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRegisterRoutingModule { }
