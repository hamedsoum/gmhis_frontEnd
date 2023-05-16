import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoomRoutingModule } from "./room-routing.module";
import { RoomListComponent } from "./room-list/room-list.component";
import { RoomFormComponent } from "./room-form/room-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [RoomListComponent, RoomFormComponent],
  imports: [CommonModule, RoomRoutingModule, SharedModule],
})
export class RoomModule {}
