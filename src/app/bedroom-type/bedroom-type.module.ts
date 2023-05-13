import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BedroomTypeRoutingModule } from "./bedroom-type-routing.module";
import { BedroomTypeFormComponent } from "./bedroom-type-form/bedroom-type-form.component";
import { BedroomTypeListComponent } from "./bedroom-type-list/bedroom-type-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [BedroomTypeFormComponent, BedroomTypeListComponent],
  imports: [CommonModule, BedroomTypeRoutingModule, SharedModule],
})
export class BedroomTypeModule {}
