import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FloorListComponent } from "./floor-list/floor-list.component";

const routes: Routes = [{ path: "list", component: FloorListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloorRoutingModule {}
