import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMHISPatientDeathCreateUpdate } from './create-update/gmhis-patient-death-create-update.component';
import { SharedModule } from '../shared/shared.module';
import { GMHISDeathListing } from './listing/gmhis-death-listing.component';
import { GMHISDesathRecord } from './record/gmhis-death-record.component';
import { GMHISDeathRoutingModule } from './gmhis-death-routing.module';



@NgModule({
  declarations: [GMHISPatientDeathCreateUpdate, GMHISDeathListing, GMHISDesathRecord],
  imports: [
    CommonModule,
    SharedModule,
    GMHISDeathRoutingModule
  ]
})
export class GMHISDeathModule { }
