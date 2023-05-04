import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAntecedentComponent } from "./add-antecedent/add-antecedent.component";
import { UpdateAntecedentComponent } from "./update-antecedent/update-antecedent.component";
import { ListAntecedentComponent } from "./list-antecedent/list-antecedent.component";
import { AddAntecedentFamilyComponent } from './add-antecedent-family/add-antecedent-family.component';
import { UpdateAntecedentFamilyComponent } from './update-antecedent-family/update-antecedent-family.component';
import { ListAntecedentFamilyComponent } from './list-antecedent-family/list-antecedent-family.component';

const routes: Routes = [
  { path: 'add', component:AddAntecedentComponent },
  { path: 'update/:id', component:UpdateAntecedentComponent },
  { path: 'list', component:ListAntecedentComponent },
  { path: 'add-family', component:AddAntecedentFamilyComponent},
  { path: 'update-family/:id', component:UpdateAntecedentFamilyComponent },
  { path: 'list-family', component:ListAntecedentFamilyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntecedentRoutingModule { }
