import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTypeCertificateComponent } from './add-type-certificate/add-type-certificate.component';
import { ListTypeCertificateComponent } from './list-type-certificate/list-type-certificate.component';
import { UpdateTypeCertificateComponent } from './update-type-certificate/update-type-certificate.component';

const routes: Routes = [
  {path:"add", component:AddTypeCertificateComponent},
  {path:"update/:id", component: UpdateTypeCertificateComponent},
  {path:"list", component:ListTypeCertificateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCertificateRoutingModule { }
