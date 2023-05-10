import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BuildingRoutingModule } from "./building-routing.module";
import { BuildingListComponent } from "./building-list/building-list.component";
import { BuildingFormComponent } from "./building-form/building-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [BuildingListComponent, BuildingFormComponent],
  imports: [CommonModule, BuildingRoutingModule, SharedModule],
})
export class BuildingModule {}
