import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { GMHISEvacuationsComponent } from "./evavuations/gmhis-evacuations.component";
import { GMHISEvacuationsRoutingModule } from "./gmhis-evacuations-routing.module";

@NgModule({
    declarations: [GMHISEvacuationsComponent],
    imports: [CommonModule, SharedModule,GMHISEvacuationsRoutingModule],
    exports: []
})
export class GMHISEvacuationsModule {}