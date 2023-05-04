import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import { Article } from 'src/app/_models/article.model';
import { ArticeService } from 'src/app/_services/artice.service';
import { ArticleSupplierService } from 'src/app/_services/article-supplier.service';
import { ArticleGroupService } from 'src/app/_services/article-group.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  /**
    * search formGroup
    */
   public form: FormGroup;

   /**
    * entries formGroup
    */
   public entryForm: FormGroup;
 
   /**
    * init first page
    */
   public page = 0;
 
   /**
    * number of item par page default 10
    */
   public perPage = 10;
 
   /**
    * total items
    */
   public totalItem: number;
 
   /**
    * number of page
    */
   public pages: number;
 
   /**
    * handle the spinner
    */
   public loading = true;
 
   /**
    * the selected item a action
    */
   public selectedItem: number;
 
   /**
    * object model
    */
   article : object;

   articleGroup : object;
      
   articleSupplier : object;

   /**
    * collection of object
    */
   articles: Article[];
 
 
   /**
    * Define entries options
    */
   entries = [
     { id: 10, value: 10 },
     { id: 25, value: 25 },
     { id: 50, value: 50 },
     { id: 100, value: 100 }
   ];

  /**
  * define  states options
  */
 actives = [
   {id: "Y", value: "Actif"},
   {id: "N", value: "Inactif"},
 ]
 
   /**
    *  order direction
    */
   order = 'desc';
 
   /**
    * order column default id
    */
   sort = 'id';
 
   /**
    * description of the order direction
    */
   orderDescription = 'decroissant';

 /**
  * define if request result has datas or no
  */
 hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;
 
 /**
  * page title
  */
   @Input()
   title: string;

 constructor( private articleService: ArticeService,
              private articleGroupService : ArticleGroupService,
              private articleSupplierService :ArticleSupplierService
  ) { }

 ngOnInit() {
   this.initForm();
   this.getArticle();
   this.getArticleGroup();
  this.getArticleSuppplier();
 }

 /**
    *  init form 
    */
  initForm() {
   this.form = new FormGroup({
     name: new FormControl(''),
     reference : new FormControl(''),
     supplier : new FormControl(null),
     group : new FormControl(null),
     active: new FormControl(null),
   })

   this.entryForm = new FormGroup({
     entries: new FormControl(10),
   })
 }

 /**
  * get articles list
  */
 getArticle() {
   let data = this.form.value
   data.entries = this.entryForm.get('entries').value;
   data.page = this.page;
   data.order = this.order;
   data.sort = this.sort;
  
   this.articleService.findAllByPage(data).subscribe(
     res => {
       if (res) {
         this.loading = false;
         this.hasNoData=false;
         this.totalItem = res['totalElements'];
         this.pages = res['totalPages'];
         this.articles = res['content'];
         this.page = res['pageNumber'] + 1;
         
       };
     },
     error =>{
           this.articles = [];
           this.loading=false;
           this.hasNoData=true;
           this.EmptyMessage=error;
     })
 }


/**
* search function
*/
search() {
 this.loading = true;
 this.page =this.page > 0 ? this.page - 1: 0;
 this.getArticle();
}

/**
* sort function
* @param SortColumn 
*/
onSort(SortColumn) {
 this.loading= true;
 if (this.order == 'desc') {
   this.order = 'asc';
   this.orderDescription = 'decroissant';
 } else {
   this.orderDescription = 'croissant';
   this.order = 'desc';
 }
 this.orderDescription;
 this.sort = SortColumn;
 this.loading = true
 this.page = this.page - 1;
 this.getArticle();
}

/**
* set the current page
* @param pageNum 
*/
public onPageChange(pageNum: number): void {
 this.loading = true;
 this.page = pageNum - 1;
 this.getArticle();
}

/**
* function to handle the selected number of entries to show
*/
OnEntryChange() {
 this.loading = true;
 this.perPage = this.entryForm.get('entries').value;
 this.page = this.page - 1;
 this.getArticle();
}

/**
* set the selected item 
* @param item 
*/
onItemChange(item) {
 this.selectedItem = item;
}

/**
* disable a article
*/
disable() {
 Swal.fire({
   title: "Souhaitez-vous vraiment desactiver cet d'article?",
   text: '',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonText: 'Oui.',
   cancelButtonText: 'Annulée'
 }).then((result) => {
   if (result.value) {

     this.articleService.disable(this.selectedItem).subscribe(result => {
       //disable item in the DOM
       if (result) disableItem(this.articles, result['id']);

       Swal.fire(
         'Desactivé!',
         "article desactivé avec succès.",
         'success'
       );

     });

   } else if (result.dismiss === Swal.DismissReason.cancel) {
     Swal.fire(
       'Annulée',
       "article n'a pas été modifié.",
       'error'
     )
   }
 })
}

/**
* enable a facility
*/
enable() {
 Swal.fire({
   title: "Souhaitez-vous vraiment Activer cet article?",
   text: '',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonText: 'Oui.',
   cancelButtonText: 'Annulée'
 }).then((result) => {

   if (result.value) {
     this.articleService.enable(this.selectedItem).subscribe(result => {
       //Enable item in the Dom
       if (result) enableItem(this.articles, result['id']);

       Swal.fire(
         'Actvé!',
         "Article activé avec succès.",
         'success'
       );

     });
   } else if (result.dismiss === Swal.DismissReason.cancel) {
     Swal.fire(
       'Annulée',
       " Article n'a pas été modifiée.",
       'error'
     )
   }
 })
}

 /*
      get all article group name and id on select  
    */

      getArticleGroup(){
        this.articleGroupService.getIdAndName().subscribe(res =>{
          this.articleGroup = res;
        })
      }

     /*
      get all article supplier name and id  
    */
      getArticleSuppplier(){
        this.articleSupplierService.getIdAndName().subscribe(res =>{
          this.articleSupplier = res;
        })
      }
    

}