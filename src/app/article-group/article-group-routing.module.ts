import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleGroupComponent } from './add-article-group/add-article-group.component';
import { ListArticleGroupComponent } from './list-article-group/list-article-group.component';
import { UpdateArticleGroupComponent } from './update-article-group/update-article-group.component';

const routes: Routes = [
  {path:"add", component:AddArticleGroupComponent},
  {path:"list", component:ListArticleGroupComponent},
  {path:"update/:id", component:UpdateArticleGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleGroupRoutingModule { }
