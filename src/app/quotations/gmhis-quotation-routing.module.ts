import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GMHISQuotationCreateUpdate } from "./create-update/gmhis-quotation-create-update.component";
import { GMHISQuotationsComponent } from "./gmhis-quotations.component";

const routes : Routes = [
    {path: '', component:GMHISQuotationsComponent},
    {path: 'create', component:GMHISQuotationCreateUpdate}


]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GMHISQuotationModuleRouting {}