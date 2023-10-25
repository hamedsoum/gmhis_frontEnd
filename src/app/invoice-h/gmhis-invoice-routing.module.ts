import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GMHISInvoiceHCreateUpdate } from "./create-update/gmhis-invoice-h-create-update.component";
import { GMHISInvoiceHComponent } from "./gmhis-invoice-h.component";

const routes : Routes = [
    {path: '', component:GMHISInvoiceHComponent},
    {path: 'create', component:GMHISInvoiceHCreateUpdate}


]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GMHISQuotationModuleRouting {}