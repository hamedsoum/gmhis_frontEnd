import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleSupplierRoutingModule } from './article-supplier-routing.module';
import { ListArticleSupplierComponent } from './list-article-supplier/list-article-supplier.component';
import { AddArticleSupplierComponent } from './add-article-supplier/add-article-supplier.component';
import { UpdateArticleSupplierComponent } from './update-article-supplier/update-article-supplier.component';
import { ArticlesupplierFormComponent } from '../_shared/article-supplier/articlesupplier-form/articlesupplier-form.component';
import { ArticlesupplierListComponent } from '../_shared/article-supplier/articlesupplier-list/articlesupplier-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [ListArticleSupplierComponent, AddArticleSupplierComponent, UpdateArticleSupplierComponent, ArticlesupplierFormComponent,ArticlesupplierListComponent],
  imports: [
    CommonModule,
    ArticleSupplierRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule
  ]
})
export class ArticleSupplierModule { }
