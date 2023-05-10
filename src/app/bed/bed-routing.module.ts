import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BedListComponent } from "./bed-list/bed-list.component";

const routes: Routes = [{ path: "list", component: BedListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedRoutingModule {}
