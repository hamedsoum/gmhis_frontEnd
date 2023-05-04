import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdmissionComponent } from "./add-admission/add-admission.component";
import { UpdateAdmissionComponent } from "./update-admission/update-admission.component";
import { ListAdmissionComponent } from "./list-admission/list-admission.component";
import { AddInvoiceComponent } from "./add-invoice/add-invoice.component";
import { UpdateInvoiceComponent } from "./update-invoice/update-invoice.component";
import { ListInvoiceComponent } from "./list-invoice/list-invoice.component";

const routes: Routes = [
  { path: 'add/:patientId', component:AddAdmissionComponent },
  { path: 'update/:id', component:UpdateAdmissionComponent },
  { path: 'list', component:ListAdmissionComponent },
  { path: 'add-invoice/:admissionId', component:AddInvoiceComponent },
  { path: 'update-invoice/:id', component:UpdateInvoiceComponent },
  { path: 'invoice/list', component:ListInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
