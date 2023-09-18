import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { GMHISEvacuationsComponent } from "./evavuations/gmhis-evacuations.component";
import { GMHISEvacuationsRoutingModule } from "./gmhis-evacuations-routing.module";
import { GMHISCreateUpdateComponent } from './create-update/gmhis-create-update.component';
import { NbDateFnsDateModule } from "@nebular/date-fns";

@NgModule({
    declarations: [GMHISEvacuationsComponent, GMHISCreateUpdateComponent],
    imports: [CommonModule, SharedModule,GMHISEvacuationsRoutingModule,NbDateFnsDateModule],
    exports: [GMHISCreateUpdateComponent]
})
export class GMHISEvacuationsModule {}