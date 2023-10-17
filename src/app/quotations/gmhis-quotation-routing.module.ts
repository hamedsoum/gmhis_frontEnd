import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GMHISQuotationListingComponent } from "./listing/gmhis-quotation-listing.component";

const routes : Routes = [
    {path: 'list', component:GMHISQuotationListingComponent}

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GMHISQuotationModuleRouting {}