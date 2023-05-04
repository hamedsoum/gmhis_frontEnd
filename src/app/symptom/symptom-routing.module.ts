import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSymptomComponent } from './add-symptom/add-symptom.component';
import { ListSymptomComponent } from './list-symptom/list-symptom.component';
import { UpdateSymptomComponent } from './update-symptom/update-symptom.component';


const routes: Routes = [
  {path:"add", component:AddSymptomComponent},
  {path:"list", component:ListSymptomComponent},
  {path:"update/:id", component:UpdateSymptomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymptomRoutingModule { }
