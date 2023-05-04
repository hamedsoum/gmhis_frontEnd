import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDciComponent } from './dci/add-dci/add-dci.component';
import { ListDciComponent } from './dci/list-dci/list-dci.component';
import { UpdateDciComponent } from './dci/update-dci/update-dci.component';
import { AddDcuComponent } from './dcu/add-dcu/add-dcu.component';
import { ListDcuComponent } from './dcu/list-dcu/list-dcu.component';
import { UpdateDcuComponent } from './dcu/update-dcu/update-dcu.component';
import { AddDrugComponent } from './drug/add-drug/add-drug.component';
import { ListDrugComponent } from './drug/list-drug/list-drug.component';
import { UpdateDrugComponent } from './drug/update-drug/update-drug.component';
import { AddLaboratoryComponent } from './laboratory/add-laboratory/add-laboratory.component';
import { ListLaboratoryComponent } from './laboratory/list-laboratory/list-laboratory.component';
import { UpdateLaboratoryComponent } from './laboratory/update-laboratory/update-laboratory.component';
import { AddPharmacologicalFormComponent } from './pharmacological-form/add-pharmacological-form/add-pharmacological-form.component';
import { ListPharmacologicalFormComponent } from './pharmacological-form/list-pharmacological-form/list-pharmacological-form.component';
import { UpdatePharmacologicalFormComponent } from './pharmacological-form/update-pharmacological-form/update-pharmacological-form.component';
import { ListPrescriptionComponent } from './list-prescription/list-prescription.component';
import { AddTherapeuticClassComponent } from './therapeutic-class/add-therapeutic-class/add-therapeutic-class.component';
import { ListTherapeuticClassComponent } from './therapeutic-class/list-therapeutic-class/list-therapeutic-class.component';
import { UpdateTherapeuticClassComponent } from './therapeutic-class/update-therapeutic-class/update-therapeutic-class.component';


const routes: Routes = [
  // DCI
  { path: "dci-add", component: AddDciComponent },
  { path: "dci-update/:id", component: UpdateDciComponent },
  { path: "dci-list", component: ListDciComponent },
  // drug 
  { path: "drug-add", component: AddDrugComponent },
  { path: "drug-update/:id", component: UpdateDrugComponent },
  { path: "drug-list", component: ListDrugComponent },
  // laboratory 
  { path: "laboratory-add", component: AddLaboratoryComponent },
  { path: "laboratory-update/:id", component: UpdateLaboratoryComponent },
  { path: "laboratory-list", component: ListLaboratoryComponent },
  // pharmacological form 
  { path: "pharmacological-form-add", component: AddPharmacologicalFormComponent },
  { path: "pharmacological-form-update/:id", component: UpdatePharmacologicalFormComponent },
  { path: "pharmacological-form-list", component: ListPharmacologicalFormComponent },
  // therapeutic class
  { path: "therapeutic-class-add", component: AddTherapeuticClassComponent },
  { path: "therapeutic-class-update/:id", component: UpdateTherapeuticClassComponent },
  { path: "therapeutic-class-list", component: ListTherapeuticClassComponent },

   // conditioning unit
   { path: "dcu-add", component: AddDcuComponent },
   { path: "dcu-update/:id", component: UpdateDcuComponent },
   { path: "dcu-list", component: ListDcuComponent },

   //prescription
   //  { path: "dcu-update/:id", component: UpdateDcuComponent },
   { path: "prescription-list", component: ListPrescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
