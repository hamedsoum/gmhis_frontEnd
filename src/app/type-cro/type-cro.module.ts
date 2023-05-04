import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeCroRoutingModule } from './type-cro-routing.module';
import { ListTypeCroComponent } from './list-type-cro/list-type-cro.component';
import { AddTypeCroComponent } from './add-type-cro/add-type-cro.component';
import { UpdateTypeCroComponent } from './update-type-cro/update-type-cro.component';
import { NgbPaginationModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TypeCroFormComponent } from '../_shared/document/type-cro-form/type-cro-form.component';
import { TypeCroListComponent } from '../_shared/document/type-cro-list/type-cro-list.component';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    ListTypeCroComponent, 
    AddTypeCroComponent, 
    UpdateTypeCroComponent, 
    TypeCroFormComponent,
    TypeCroListComponent,
  ],
  imports: [
    CommonModule,
    TypeCroRoutingModule,
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
export class TypeCroModule { }
