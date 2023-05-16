import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BedRoutingModule } from "./bed-routing.module";
import { BedFormComponent } from "./bed-form/bed-form.component";
import { BedListComponent } from "./bed-list/bed-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [BedFormComponent, BedListComponent],
  imports: [CommonModule, BedRoutingModule, SharedModule],
})
export class BedModule {}
