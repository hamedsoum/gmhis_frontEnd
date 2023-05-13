import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BedroomTypeListComponent } from "./bedroom-type-list/bedroom-type-list.component";

const routes: Routes = [{ path: "list", component: BedroomTypeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedroomTypeRoutingModule {}
