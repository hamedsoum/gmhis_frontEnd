import { NgModule } from "@angular/core";
import { GMHISHospitalizationModule } from "../hospitalization/gmhis-hospitalization.module";
import { GMHISInvoiceHModule } from "../invoice-h/gmhis-invoices-h.module";
import { SharedModule } from "../shared/shared.module";
import { GMHISQuotationCreateUpdate } from "./create-update/gmhis-quotation-create-update.component";
import { GMHISQuotationModuleRouting } from "./gmhis-quotation-routing.module";
import { GMHISQuotationsComponent } from "./gmhis-quotations.component";
import { GMHISQuotationItemFormComponent } from "./item/form/gmhis-quotation-item-form-array.component";
import { GMHISQuotationSttusComponent } from "./status/gmhis-quotation-status.component";

@NgModule({
    declarations: [
        GMHISQuotationsComponent, 
        GMHISQuotationItemFormComponent, 
        GMHISQuotationCreateUpdate, 
        GMHISQuotationSttusComponent
        ],
    imports: [GMHISQuotationModuleRouting,SharedModule, GMHISInvoiceHModule],
    exports: [GMHISQuotationsComponent, GMHISQuotationCreateUpdate]
})
export class GMHISQuotationModule {

}