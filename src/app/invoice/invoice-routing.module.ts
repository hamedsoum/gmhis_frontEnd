import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceBillComponent } from './insurance-bill/insurance-bill.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { PracticianBillComponent } from './practician-bill/practician-bill.component';

const routes: Routes = [
  { path : 'list', component : InvoiceListComponent},
  {path : 'insuranceBill', component : InsuranceBillComponent},
  {path : 'practicianInvoice', component : PracticianBillComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
