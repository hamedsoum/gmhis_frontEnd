import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { ListInsuranceComponent } from './list-insurance/list-insurance.component';
import { UpdateInsuranceComponent } from './update-insurance/update-insurance.component';
import { AddSubscriberComponent } from "./add-subscriber/add-subscriber.component";
import { UpdateSubscriberComponent } from "./update-subscriber/update-subscriber.component";
import { ListSubscriberComponent } from "./list-subscriber/list-subscriber.component";

const routes: Routes = [
  {path:"add", component:AddInsuranceComponent},
  {path:"update/:id", component: UpdateInsuranceComponent},
  {path:"list", component:ListInsuranceComponent},
  {path:"add-subscriber", component:AddSubscriberComponent},
  {path:"update-subscriber/:id", component:UpdateSubscriberComponent},
  {path:"list-subscriber", component:ListSubscriberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
