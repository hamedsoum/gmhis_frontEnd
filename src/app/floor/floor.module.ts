import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FloorRoutingModule } from "./floor-routing.module";
import { FloorListComponent } from "./floor-list/floor-list.component";
import { FloorFormComponent } from "./floor-form/floor-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [FloorListComponent, FloorFormComponent],
  imports: [CommonModule, FloorRoutingModule, SharedModule],
})
export class FloorModule {}
