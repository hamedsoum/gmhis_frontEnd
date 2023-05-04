import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleLocationRoutingModule } from './article-location-routing.module';
import { AddArticleLocationComponent } from './add-article-location/add-article-location.component';
import { ListArticleLocationComponent } from './list-article-location/list-article-location.component';
import { UpdateArticleLocationComponent } from './update-article-location/update-article-location.component';
import { ArticlelocationListComponent } from '../_shared/article-location/articlelocation-list/articlelocation-list.component';
import { ArticlelocationFormComponent } from '../_shared/article-location/articlelocation-form/articlelocation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [AddArticleLocationComponent, ListArticleLocationComponent, UpdateArticleLocationComponent, ArticlelocationListComponent, ArticlelocationFormComponent],
  imports: [
    CommonModule,
    ArticleLocationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbPaginationModule, 
    NgbTooltipModule
  ]
})
export class ArticleLocationModule { }
