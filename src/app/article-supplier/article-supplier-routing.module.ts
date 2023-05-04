import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleSupplierComponent } from './add-article-supplier/add-article-supplier.component';
import { ListArticleSupplierComponent } from './list-article-supplier/list-article-supplier.component';
import { UpdateArticleSupplierComponent } from './update-article-supplier/update-article-supplier.component';

const routes: Routes = [
  {path:"add", component:AddArticleSupplierComponent},
  {path:"list", component:ListArticleSupplierComponent},
  {path:"update/:id", component:UpdateArticleSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleSupplierRoutingModule { }
