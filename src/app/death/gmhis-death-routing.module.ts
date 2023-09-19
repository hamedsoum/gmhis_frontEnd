import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GMHISDeathListing } from "./listing/gmhis-death-listing.component";

const routes: Routes = [
    {path: '', component:GMHISDeathListing}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GMHISDeathRoutingModule{}