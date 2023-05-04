import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConstantType } from 'src/app/_models/constantType.model';
import { ConstantDomainService } from 'src/app/_services/constant-domain.service';
import { ConstantTypeService } from 'src/app/_services/constant-type.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-constant-type-list',
  templateUrl: './constant-type-list.component.html',
  styleUrls: ['./constant-type-list.component.css']
})
export class ConstantTypeListComponent implements OnInit {

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
    constantType : ConstantType;

    /**
     * collection of object
     */
    constantTypes: ConstantType[];
  
  
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
    * define constant domain options
    */
   constantDomains: object;
  
  /**
   * page title
   */
    @Input()
    title: string;
  
    constructor(
      private constantTypeService: ConstantTypeService,
      private alertService: AlertService,
      private constantDomainService: ConstantDomainService
    ) { }
  
    ngOnInit() {
      
      this.initForm();
      this.getInsurances();
      this.constantDomainService.getIdAndName().subscribe(res => { this.constantDomains = res;});
      
    }
  
  
    /**
     *  init form 
     */
    initForm() {
      this.form = new FormGroup({
        name: new FormControl(''),
        domain: new FormControl(null),
        active: new FormControl(null),
      })
  
      this.entryForm = new FormGroup({
        entries: new FormControl(10),
      })
    }
  
    /**
     * get constantType list
     */
    getInsurances() {
      let data = this.form.value
      data.entries = this.entryForm.get('entries').value;
      data.page = this.page;
      data.order = this.order;
      data.sort = this.sort;
     
      this.constantTypeService.findAllByPage(data).subscribe(
        res => {
          if (res) {
            this.loading = false;
            this.hasNoData=false;
            this.totalItem = res['totalElements'];
            this.pages = res['totalPages'];
            this.constantTypes = res['content'];
            this.page = res['pageNumber'] + 1;
          };
        },
        error =>{
              this.constantTypes = [];
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
    this.getInsurances();
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
    this.getInsurances();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.loading = true;
    this.page = pageNum - 1;
    this.getInsurances();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.loading = true;
    this.page = this.page - 1;
    this.getInsurances();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable a constant Type
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver cette constante type?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.constantTypeService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.constantTypes, result['id']);

          Swal.fire(
            'Desactivé!',
            'constante type desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'la constante type n\'a pas été modifiée.',
          'error'
        )
      }
    })
  }

  /**
   * enable a constant Type
   */
  enable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Activer cette constante type?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.constantTypeService.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.constantTypes, result['id']);

          Swal.fire(
            'Actvé!',
            'constante type activés avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'La constante type n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

}
