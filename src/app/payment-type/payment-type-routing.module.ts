import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentTypeComponent } from './add-payment-type/add-payment-type.component';
import { ListPaymentTypeComponent } from './list-payment-type/list-payment-type.component';
import { UpdatePaymentTypeComponent } from './update-payment-type/update-payment-type.component';

const routes: Routes = [
  {path:"add", component:AddPaymentTypeComponent},
  {path:"update/:id", component: UpdatePaymentTypeComponent},
  {path:"list", component:ListPaymentTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTypeRoutingModule { }
