import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbTabsetModule } from "@nebular/theme";
import { GMHISInvoiceHModule } from "../invoice-h/gmhis-invoices-h.module";
import { GMHISQuotationModule } from "../quotations/gmhis-quotations.module";
import { SharedModule } from "../shared/shared.module";
import { GMHISHospitalizationCreateUpdateComponent } from "./create-update/gmhis-hospitalization-create-update.component";
import { GMHISHospitalizationRoutingModule } from "./gmhis-hospitalization-routing.module";
import { GMHISHospitalizationsComponent } from "./gmhis-hospitalizations.component";
import { GMHISHospitalizationMain } from "./main/gmhis-hospitalization-main.component";
import { GMHISHospitalizationRequestCreateUpdateComponent } from "./request/create-update/gmhis-hospitalization-request-create-update.component";
import { GMHISHospitalizationRequestListingComponent } from "./request/listing/gmhis-hospitalization-request-listing.component";
import { GMHISHospitalizationRequestRecordComponent } from "./request/record/gmhis-hospitalization-request-record.component";
import { QuillModule } from 'ngx-quill'
import { GMHISHospitalizationRecordComponent } from "./record/gmhis-hospitalization-record.component";

@NgModule({
    declarations: [
      GMHISHospitalizationsComponent,
      GMHISHospitalizationCreateUpdateComponent,
      GMHISHospitalizationRequestCreateUpdateComponent,
      GMHISHospitalizationRequestListingComponent,
      GMHISHospitalizationRequestRecordComponent,
      GMHISHospitalizationMain,
      GMHISHospitalizationRecordComponent],
    imports: [
      CommonModule,
      SharedModule,
      GMHISHospitalizationRoutingModule,
      SharedModule,
      NbTabsetModule,
      GMHISQuotationModule,
      GMHISInvoiceHModule,
      QuillModule
    ],
    exports: [GMHISHospitalizationRequestCreateUpdateComponent]
  })
  export class GMHISHospitalizationModule { }