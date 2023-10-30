import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GMHISHospitalizationsComponent } from "./gmhis-hospitalizations.component";
import { GMHISHospitalizationRequestListingComponent } from "./request/listing/gmhis-hospitalization-request-listing.component";

const routes: Routes = [
    {path: '', component:GMHISHospitalizationsComponent},
    {path: 'request', component:GMHISHospitalizationRequestListingComponent}
    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GMHISHospitalizationRoutingModule{}