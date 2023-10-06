import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { GMHISHospitalizationRoutingModule } from "./gmhis-hospitalization-routing.module";
import { GMHISHospitalizationRequestCreateUpdateComponent } from "./request/create-update/gmhis-hospitalization-request-create-update.component";
import { GMHISHospitalizationRequestListingComponent } from "./request/listing/gmhis-hospitalization-request-listing.component";
import { GMHISHospitalizationRequestRecordComponent } from "./request/record/gmhis-hospitalization-request-record.component";

@NgModule({
    declarations: [GMHISHospitalizationRequestCreateUpdateComponent, GMHISHospitalizationRequestListingComponent, GMHISHospitalizationRequestRecordComponent],
    imports: [CommonModule,SharedModule,GMHISHospitalizationRoutingModule, SharedModule],
    exports: [GMHISHospitalizationRequestCreateUpdateComponent]
  })
  export class GMHISHospitalizationModule { }