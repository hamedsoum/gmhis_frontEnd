import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUnitOfMeasureComponent } from './add-unit-of-measure/add-unit-of-measure.component';
import { ListUnitOfMeasureComponent } from './list-unit-of-measure/list-unit-of-measure.component';
import { UpdateUnitOfMeasureComponent } from './update-unit-of-measure/update-unit-of-measure.component';

const routes: Routes = [
    {path:"add", component:AddUnitOfMeasureComponent},
    {path:"update/:id", component: UpdateUnitOfMeasureComponent},
    {path:"list", component:ListUnitOfMeasureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitOfMeasureRoutingModule { }
