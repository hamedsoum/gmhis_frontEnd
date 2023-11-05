import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GMHISHospitalizationMain } from "./main/gmhis-hospitalization-main.component";
import { GMHISHospitalizationRequestListingComponent } from "./request/listing/gmhis-hospitalization-request-listing.component";

const routes: Routes = [
    {path: '', component:GMHISHospitalizationMain},
    {path: 'request', component:GMHISHospitalizationRequestListingComponent}
    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GMHISHospitalizationRoutingModule{}