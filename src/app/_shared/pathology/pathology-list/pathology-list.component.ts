import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pathology } from 'src/app/_models/pathology.model';
import { PathologyService } from 'src/app/_services/pathology.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pathology-list',
  templateUrl: './pathology-list.component.html',
  styleUrls: ['./pathology-list.component.css']
})
export class PathologyListComponent implements OnInit {

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
    pathology : object;

    /**
     * collection of object
     */
    pathologies: Pathology[];
  
  
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
  
    constructor(
      private pathologyService: PathologyService,
    ) { }
  
    ngOnInit() {
      this.initForm();
      this.getPathologies();
    }
  
    /**
     *  init form 
     */
    initForm() {
      this.form = new FormGroup({
        name: new FormControl(''),
        active: new FormControl(null),
      })
  
      this.entryForm = new FormGroup({
        entries: new FormControl(10),
      })
    }
  
    /**
     * get pathologies list
     */
    getPathologies() {
      let data = this.form.value
      data.entries = this.entryForm.get('entries').value;
      data.page = this.page;
      data.order = this.order;
      data.sort = this.sort;
     
      this.pathologyService.findAllByPage(data).subscribe(
        res => {
          if (res) {
            this.loading = false;
            this.hasNoData=false;
            this.totalItem = res['totalElements'];
            this.pages = res['totalPages'];
            this.pathologies = res['content'];
            this.page = res['pageNumber'] + 1;
          };
        },
        error =>{
              this.pathologies = [];
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
    this.getPathologies();
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
    this.getPathologies();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getPathologies();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getPathologies();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable a pathology
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver cette pathologie?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.pathologyService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.pathologies, result['id']);

          Swal.fire(
            'Desactivé!',
            'pathologie desactivée avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'la pathologie n\'a pas été modifiée.',
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
      title: 'Souhaitez-vous vraiment Activer cette pathologie?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.pathologyService.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.pathologies, result['id']);

          Swal.fire(
            'Actvé!',
            'pathologie activé avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          ' La pathologie n\'a pas été modifiée.',
          'error'
        )
      }
    })
  }
}
