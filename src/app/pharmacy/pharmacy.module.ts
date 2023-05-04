import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { DrugFormComponent } from './../_shared/pharmacy/drug-form/drug-form.component';
import { DrugListComponent } from './../_shared/pharmacy/drug-list/drug-list.component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { AddDciComponent } from './dci/add-dci/add-dci.component';
import { UpdateDciComponent } from './dci/update-dci/update-dci.component';
import { ListDciComponent } from './dci/list-dci/list-dci.component';
import { ListDrugComponent } from './drug/list-drug/list-drug.component';
import { AddDrugComponent } from './drug/add-drug/add-drug.component';
import { UpdateDrugComponent } from './drug/update-drug/update-drug.component';
import { UpdateLaboratoryComponent } from './laboratory/update-laboratory/update-laboratory.component';
import { AddLaboratoryComponent } from './laboratory/add-laboratory/add-laboratory.component';
import { ListLaboratoryComponent } from './laboratory/list-laboratory/list-laboratory.component';
import { AddPharmacologicalFormComponent } from './pharmacological-form/add-pharmacological-form/add-pharmacological-form.component';
import { UpdatePharmacologicalFormComponent } from './pharmacological-form/update-pharmacological-form/update-pharmacological-form.component';
import { ListPharmacologicalFormComponent } from './pharmacological-form/list-pharmacological-form/list-pharmacological-form.component';
import { AddTherapeuticClassComponent } from './therapeutic-class/add-therapeutic-class/add-therapeutic-class.component';
import { UpdateTherapeuticClassComponent } from './therapeutic-class/update-therapeutic-class/update-therapeutic-class.component';
import { ListTherapeuticClassComponent } from './therapeutic-class/list-therapeutic-class/list-therapeutic-class.component';
import { DciFormComponent } from '../_shared/pharmacy/dci-form/dci-form.component';
import { DciListComponent } from '../_shared/pharmacy/dci-list/dci-list.component';
import { LaboratoryListComponent } from '../_shared/pharmacy/laboratory-list/laboratory-list.component';
import { LaboratoryFormComponent } from '../_shared/pharmacy/laboratory-form/laboratory-form.component';
import { PharmacologicalFormFormComponent } from '../_shared/pharmacy/pharmacological-form-form/pharmacological-form-form.component';
import { PharmacologicalFormListComponent } from '../_shared/pharmacy/pharmacological-form-list/pharmacological-form-list.component';
import { TherapeuticClassListComponent } from '../_shared/pharmacy/therapeutic-class-list/therapeutic-class-list.component';
import { TherapeuticClassFormComponent } from '../_shared/pharmacy/therapeutic-class-form/therapeutic-class-form.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDcuComponent } from './dcu/add-dcu/add-dcu.component';
import { UpdateDcuComponent } from './dcu/update-dcu/update-dcu.component';
import { ListDcuComponent } from './dcu/list-dcu/list-dcu.component';
import { DcuFormComponent } from '../_shared/pharmacy/dcu-form/dcu-form.component';
import { DcuListComponent } from '../_shared/pharmacy/dcu-list/dcu-list.component';
import { ListPrescriptionComponent } from './list-prescription/list-prescription.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PatientModule } from '../patient/patient.module';

@NgModule({
  declarations: [
    DrugFormComponent, 
    DrugListComponent, 
    AddDciComponent, 
    UpdateDciComponent, 
    ListDciComponent, 
    ListDrugComponent, 
    AddDrugComponent, 
    UpdateDrugComponent, 
    UpdateLaboratoryComponent, 
    AddLaboratoryComponent, 
    ListLaboratoryComponent, 
    AddPharmacologicalFormComponent, 
    UpdatePharmacologicalFormComponent, 
    ListPharmacologicalFormComponent, 
    AddTherapeuticClassComponent, 
    UpdateTherapeuticClassComponent, 
    ListTherapeuticClassComponent,
    DciFormComponent,
    DciListComponent,
    LaboratoryListComponent,
    LaboratoryFormComponent,
    PharmacologicalFormFormComponent,
    PharmacologicalFormListComponent,
    TherapeuticClassListComponent,
    TherapeuticClassFormComponent,
    AddDcuComponent,
    UpdateDcuComponent,
    ListDcuComponent,
    DcuFormComponent,
    DcuListComponent,
    ListPrescriptionComponent,  
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    CommonComponentModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    PatientModule
  ]
})
export class PharmacyModule { }
