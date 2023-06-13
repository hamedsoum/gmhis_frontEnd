import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';

const routes: Routes = [
  {path: 'list', component: SpecialityListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialityRoutingModule { }
