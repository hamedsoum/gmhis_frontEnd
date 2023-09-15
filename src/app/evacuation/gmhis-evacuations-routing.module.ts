import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GMHISEvacuationsComponent } from "./evavuations/gmhis-evacuations.component";

const routes: Routes = [
    {path: '', component:GMHISEvacuationsComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GMHISEvacuationsRoutingModule{}