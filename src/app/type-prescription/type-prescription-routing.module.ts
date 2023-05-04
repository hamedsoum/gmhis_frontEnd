import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTypePrescriptionComponent } from './add-type-prescription/add-type-prescription.component';
import { ListTypePrescriptionComponent } from './list-type-prescription/list-type-prescription.component';
import { UpdateTypePrescriptionComponent } from './update-type-prescription/update-type-prescription.component';

const routes: Routes = [
  {path:"add", component:AddTypePrescriptionComponent},
  {path:"update/:id", component: UpdateTypePrescriptionComponent},
  {path:"list", component:ListTypePrescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypePrescriptionRoutingModule { }
