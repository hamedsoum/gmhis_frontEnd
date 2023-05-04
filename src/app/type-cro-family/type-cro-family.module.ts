import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeCroFamilyRoutingModule } from './type-cro-family-routing.module';
import { AddTypeCroFamilyComponent } from './add-type-cro-family/add-type-cro-family.component';
import { UpdateTypeCroFamilyComponent } from './update-type-cro-family/update-type-cro-family.component';
import { ListTypeCroFamilyComponent } from './list-type-cro-family/list-type-cro-family.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbPaginationModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeCroFamilyFormComponent } from '../_shared/type-cro-family/type-cro-family-form/type-cro-family-form.component';
import { TypeCroFamilyListComponent } from '../_shared/type-cro-family/type-cro-family-list/type-cro-family-list.component';
import { CommonComponentModule } from '../common-component/common-component.module';

@NgModule({
  declarations: [
    AddTypeCroFamilyComponent, 
    UpdateTypeCroFamilyComponent, 
    ListTypeCroFamilyComponent,
    TypeCroFamilyFormComponent,
    TypeCroFamilyListComponent],
  imports: [
    CommonModule,
    TypeCroFamilyRoutingModule,
    NgSelectModule,
    NgbDatepickerModule,
    NgbPopoverModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTooltipModule,
    CommonComponentModule,
  ]
})
export class TypeCroFamilyModule { }
