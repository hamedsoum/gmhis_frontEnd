import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddActCategoryComponent } from './add-act-category/add-act-category.component';
import { AddActCodeComponent } from './add-act-code/add-act-code.component';
import { AddActFamilyComponent } from './add-act-family/add-act-family.component';
import { AddActComponent } from './add-act/add-act.component';
import { ListActCategoryComponent } from './list-act-category/list-act-category.component';
import { ListActCodeComponent } from './list-act-code/list-act-code.component';
import { ListActFamilyComponent } from './list-act-family/list-act-family.component';
import { ListActComponent } from './list-act/list-act.component';
import { UpdateActCategoryComponent } from './update-act-category/update-act-category.component';
import { UpdateActCodeComponent } from './update-act-code/update-act-code.component';
import { UpdateActFamilyComponent } from './update-act-family/update-act-family.component';
import { UpdateActComponent } from './update-act/update-act.component';

const routes: Routes = [

  // act
  { path: 'add', component:AddActComponent },
  { path: 'update/:id', component:UpdateActComponent },
  { path: 'list', component:ListActComponent },

  // category
  { path: 'add-category', component:AddActCategoryComponent },
  { path: 'update-category/:id', component:UpdateActCategoryComponent },
  { path: 'list-category', component:ListActCategoryComponent },

  // family
  { path: 'add-family', component:AddActFamilyComponent },
  { path: 'update-family/:id', component:UpdateActFamilyComponent },
  { path: 'list-family', component:ListActFamilyComponent },

  // code
  { path: 'add-code', component:AddActCodeComponent },
  { path: 'update-code/:id', component:UpdateActCodeComponent },
  { path: 'list-code', component:ListActCodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActRoutingModule { }
