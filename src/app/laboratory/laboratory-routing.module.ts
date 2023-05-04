import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisRequestComponent } from './analysis-request/analysis-request.component';
import { PerformAnalysisComponent } from './perform-analysis/perform-analysis.component';

const routes: Routes = [
  {path:"analysis-request", component:AnalysisRequestComponent},
  {path:"perform-analysis/:id", component:PerformAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
