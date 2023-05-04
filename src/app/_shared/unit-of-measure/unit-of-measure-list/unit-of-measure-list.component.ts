import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Uom } from 'src/app/_models/unitOfMeasure.model';
import { UnitOfMeasureService } from 'src/app/_services/unit-of-measure.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unit-of-measure-list',
  templateUrl: './unit-of-measure-list.component.html',
  styleUrls: ['./unit-of-measure-list.component.css']
})
export class UnitOfMeasureListComponent implements OnInit {

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
    unitOfMeasure : Uom;

    /**
     * collection of object
     */
    unitOfMeasures: Uom[];
  
  
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
   * define states options
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
      private uomService: UnitOfMeasureService,
   
    ) { }
  
    ngOnInit() {
      
      this.initForm();
      this.getUnitOfMeasure();
      
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
     * get list
     */
    getUnitOfMeasure() {
      let data = this.form.value
      data.entries = this.entryForm.get('entries').value;
      data.page = this.page;
      data.order = this.order;
      data.sort = this.sort;
     
      this.uomService.findAllByPage(data).subscribe(
        res => {
          if (res) {
            this.loading = false;
            this.hasNoData=false;
            this.totalItem = res['totalElements'];
            this.pages = res['totalPages'];
            this.unitOfMeasures = res['content'];
            this.page = res['pageNumber'] + 1;
          };
        },
        error =>{
              this.unitOfMeasures = [];
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
    this.getUnitOfMeasure();
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
    this.getUnitOfMeasure();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getUnitOfMeasure();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getUnitOfMeasure();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable a unit of measure
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver cette unité de mesure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.uomService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.unitOfMeasures, result['id']);

          Swal.fire(
            'Desactivé!',
            'unité de mesure desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'la unité de mesure n\'a pas été modifiée.',
          'error'
        )
      }
    })
  }

  /**
   * enable a unit of measure
   */
  enable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Activer cette unité de mesure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.uomService.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.unitOfMeasures, result['id']);

          Swal.fire(
            'Actvé!',
            'unité de mesure activée avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'La unité de mesure n\'a pas été modifiée.',
          'error'
        )
      }
    })
  }

}
