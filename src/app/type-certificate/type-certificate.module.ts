import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeCertificateRoutingModule } from './type-certificate-routing.module';
import { AddTypeCertificateComponent } from './add-type-certificate/add-type-certificate.component';
import { ListTypeCertificateComponent } from './list-type-certificate/list-type-certificate.component';
import { UpdateTypeCertificateComponent } from './update-type-certificate/update-type-certificate.component';
import { NgbPaginationModule, NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TypeCertificateFormComponent } from '../_shared/document/type-certificate-form/type-certificate-form.component';
import { TypeCertificateListComponent } from '../_shared/document/type-certificate-list/type-certificate-list.component';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    AddTypeCertificateComponent, 
    ListTypeCertificateComponent, 
    UpdateTypeCertificateComponent, 
    TypeCertificateFormComponent,
    TypeCertificateListComponent
  ],
  imports: [
    CommonModule,
    TypeCertificateRoutingModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    CommonComponentModule,

  ]
})
export class TypeCertificateModule { }
