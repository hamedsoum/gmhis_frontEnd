import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeMailRoutingModule } from './type-mail-routing.module';
import { AddTypeMailComponent } from './add-type-mail/add-type-mail.component';
import { ListTypeMailComponent } from './list-type-mail/list-type-mail.component';
import { UpdateTypeMailComponent } from './update-type-mail/update-type-mail.component';
import { NgbPaginationModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TypeMailFormComponent } from '../_shared/document/type-mail-form/type-mail-form.component';
import { TypeMailListComponent } from '../_shared/document/type-mail-list/type-mail-list.component';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    AddTypeMailComponent, 
    ListTypeMailComponent, 
    UpdateTypeMailComponent, 
    TypeMailFormComponent,
    TypeMailListComponent,
    
  ],
  imports: [
    CommonModule,
    TypeMailRoutingModule,
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
export class TypeMailModule { }
