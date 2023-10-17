import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { GMHISQuotationCreateUpdate } from "./create-update/gmhis-quotation-create-update.component";
import { GMHISQuotationModuleRouting } from "./gmhis-quotation-routing.module";
import { GMHISQuotationItemFormComponent } from "./item/form/gmhis-quotation-item-form-array.component";
import { GMHISQuotationListingComponent } from "./listing/gmhis-quotation-listing.component";

@NgModule({
    declarations: [GMHISQuotationListingComponent, GMHISQuotationItemFormComponent, GMHISQuotationCreateUpdate],
    imports: [GMHISQuotationModuleRouting,SharedModule ],
    exports: []
})
export class GMHISQuotationModule {

}