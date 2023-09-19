import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMHISPatientDeathCreateUpdate } from './create-update/gmhis-patient-death-create-update.component';
import { SharedModule } from '../shared/shared.module';
import { GMHISDeathListing } from './listing/gmhis-death-listing.component';
import { GMHISDesathRecord } from './record/gmhis-death-record.component';



@NgModule({
  declarations: [GMHISPatientDeathCreateUpdate, GMHISDeathListing, GMHISDesathRecord],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GMHISDeathModule { }
