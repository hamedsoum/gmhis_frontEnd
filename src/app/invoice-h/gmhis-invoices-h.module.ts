import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { GMHISInvoiceHCreateUpdate } from "./create-update/gmhis-invoice-h-create-update.component";
import { GMHISQuotationModuleRouting } from "./gmhis-invoice-routing.module";
import { GMHISInvoiceHComponent } from "./gmhis-invoice-h.component";
import { InvoiceModule } from "../invoice/invoice.module";

@NgModule({
    declarations: [GMHISInvoiceHComponent, GMHISInvoiceHCreateUpdate],
    imports: [GMHISQuotationModuleRouting,SharedModule,InvoiceModule ],
    exports: [GMHISInvoiceHComponent,GMHISInvoiceHCreateUpdate]
})
export class GMHISInvoiceHModule {

}