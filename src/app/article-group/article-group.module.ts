import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleGroupRoutingModule } from './article-group-routing.module';
import { AddArticleGroupComponent } from './add-article-group/add-article-group.component';
import { ListArticleGroupComponent } from './list-article-group/list-article-group.component';
import { UpdateArticleGroupComponent } from './update-article-group/update-article-group.component';
import { ArticlegroupListComponent } from '../_shared/article-group/articlegroup-list/articlegroup-list.component';
import { ArticlegroupFormComponent } from '../_shared/article-group/articlegroup-form/articlegroup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [AddArticleGroupComponent, ListArticleGroupComponent, UpdateArticleGroupComponent, ArticlegroupListComponent, ArticlegroupFormComponent],
  imports: [
    CommonModule,
    ArticleGroupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule
  ]
})
export class ArticleGroupModule { }
