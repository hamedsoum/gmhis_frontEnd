import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleLocationComponent } from './add-article-location/add-article-location.component';
import { ListArticleLocationComponent } from './list-article-location/list-article-location.component';
import { UpdateArticleLocationComponent } from './update-article-location/update-article-location.component';

const routes: Routes = [
  {path:"add", component:AddArticleLocationComponent},
  {path:"list", component:ListArticleLocationComponent},
  {path:"update/:id", component:UpdateArticleLocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleLocationRoutingModule { }
