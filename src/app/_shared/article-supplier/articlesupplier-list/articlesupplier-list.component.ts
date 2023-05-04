import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleSupplier } from 'src/app/_models/articleSupplier.model';
import { ArticleSupplierService } from 'src/app/_services/article-supplier.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';
import { CountryService } from 'src/app/_services/country.service';



@Component({
  selector: 'app-articlesupplier-list',
  templateUrl: './articlesupplier-list.component.html',
  styleUrls: ['./articlesupplier-list.component.css']
})
export class ArticlesupplierListComponent implements OnInit {

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
    articleSupplier: ArticleSupplier;
  
    /**
     * collection of object
     */
    articleSuppliers: ArticleSupplier[];
  
  
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
      { id: "Y", value: "Actif" },
      { id: "N", value: "Inactif" },
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

     /**
    * define  countries options
    */

   countries : Object;
 
  
    constructor(
      private articleSupplierService:ArticleSupplierService,
      private countryService : CountryService
    ) { }
  
    ngOnInit() {
       this.countryService.getIdAndName().subscribe(res=>{
      this.countries = res;
    })
      this.initForm();
      this.getArticleSuppliers();
    }
  
  
    /**
     *  init form 
     */
    initForm() {
      this.form = new FormGroup({
        name: new FormControl(''),
        active: new FormControl(null),    
        contact : new FormControl(''),
         country : new FormControl(null)
      })
  
      this.entryForm = new FormGroup({
        entries: new FormControl(10),
      })
    }
  
    /**
     * get articleSupplier list
     */
    getArticleSuppliers() {
      let data = this.form.value
      data.entries = this.entryForm.get('entries').value;
      data.page = this.page;
      data.order = this.order;
      data.sort = this.sort;
  
      this.articleSupplierService.findAllByPage(data).subscribe(
        res => {
          if (res) {
            this.loading = false;
            this.hasNoData = false;
            this.totalItem = res['totalElements'];
            this.pages = res['totalPages'];
            this.articleSuppliers = res['content'];
            this.page = res['pageNumber'] + 1;
          };
        },
        error => {
          this.articleSuppliers = [];
          this.loading = false;
          this.hasNoData = true;
          this.EmptyMessage = error;
        })
    }
  
  
    /**
     * search function
     */
    search() {
      this.loading = true;
      this.page = this.page > 0 ? this.page - 1 : 0;
      this.getArticleSuppliers();
    }
  
    /**
     * sort function
     * @param SortColumn 
     */
    onSort(SortColumn) {
      this.loading = true;
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
      this.getArticleSuppliers();
    }
  
    /**
     * set the current page
     * @param pageNum 
     */
    public onPageChange(pageNum: number): void {
      this.loading = true;
      this.page = pageNum - 1;
      this.getArticleSuppliers();
    }
  
    /**
     * function to handle the selected number of entries to show
     */
    OnEntryChange() {
      this.loading = true;
      this.perPage = this.entryForm.get('entries').value;
      this.page = this.page - 1;
      this.getArticleSuppliers();
    }
  
    /**
     * set the selected item 
     * @param item 
     */
    onItemChange(item) {
      this.selectedItem = item;
    }
  
    /**
     * disable a articleSupplier
     */
    disable() {
      Swal.fire({
        title: 'Souhaitez-vous vraiment desactiver cet fournisseur?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui.',
        cancelButtonText: 'Annulée'
      }).then((result) => {
        if (result.value) {
  
          this.articleSupplierService.disable(this.selectedItem).subscribe(result => {
            //disable item in the DOM
            if (result) disableItem(this.articleSuppliers, result['id']);
  
            Swal.fire(
              'Desactivé!',
              'forunisseur desactiver avec succès.',
              'success'
            );
  
          });
  
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Annulée',
            'le forunisseur n\'a pas été modifiée.',
            'error'
          )
        }
      })
    }
  
    /**
     * enable a articleSupplier
     */
    enable() {
      Swal.fire({
        title: 'Souhaitez-vous vraiment Activer cet fournisseur?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui.',
        cancelButtonText: 'Annulée'
      }).then((result) => {
  
        if (result.value) {
          this.articleSupplierService.enable(this.selectedItem).subscribe(result => {
            //Enable item in the Dom
            if (result) enableItem(this.articleSuppliers, result['id']);
  
            Swal.fire(
              'Actvé!',
              'fournisseur activé avec succès.',
              'success'
            );
  
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Annulée',
            'Le forunisseur n\'a pas été modifiée.',
            'error'
          )
        }
      })
    }
  
  }