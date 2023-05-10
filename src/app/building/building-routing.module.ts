import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuildingListComponent } from "./building-list/building-list.component";

const routes: Routes = [{ path: "list", component: BuildingListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingRoutingModule {}
