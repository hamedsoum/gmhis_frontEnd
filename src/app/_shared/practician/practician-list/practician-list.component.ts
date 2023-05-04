import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { medicalServiceService } from 'src/app/_services/medicalService.service';
import { PracticianService } from 'src/app/_services/practician.service';
import { SpecialityService } from 'src/app/_services/speciality.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-practician-list',
  templateUrl: './practician-list.component.html',
  styleUrls: ['./practician-list.component.css']
})

export class PracticianListComponent implements OnInit {

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
     * define the cash register options
     */
    practicians: object;
  
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
     * define services options
     */
    services: object;

    /**
     * define speciality options
     */
    specialities: object;
  
    constructor(
      private cashierPractician: PracticianService,
      private medicalService: medicalServiceService,
      private specialityService: SpecialityService
    ) { }
  
    ngOnInit() {
      this.initForm();
      this.getCashiers();
      this.medicalService.getIdAndName().subscribe(res => { this.services=res; });
      this.specialityService.getIdAndName().subscribe( res => { this.specialities = res;});
    }
  
  
    /**
     *  init form 
     */
    initForm() {
      this.form = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        phoneContact: new FormControl(''),
        practicianNumber: new FormControl(''),
        service: new FormControl(null),
        speciality: new FormControl(null),
        active: new FormControl(null),
      })
  
      this.entryForm = new FormGroup({
        entries: new FormControl(10),
      })
    }
  
    /**
     * get list
     */
    getCashiers() {
      let data = this.form.value
      data.entries = this.entryForm.get('entries').value;
      data.page = this.page;
      data.order = this.order;
      data.sort = this.sort;
     
      this.cashierPractician.findAllByPage(data).subscribe(
        res => {
          if (res) {
            this.loading = false;
            this.hasNoData=false;
            this.totalItem = res['totalElements'];
            this.pages = res['totalPages'];
            this.practicians = res['content'];
            this.page = res['pageNumber'] + 1;
          };
        },
        error =>{
              this.practicians = [];
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
    this.getCashiers();
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
    this.getCashiers();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getCashiers();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getCashiers();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable an object
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver ce pratician?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.cashierPractician.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.practicians, result['id']);

          Swal.fire(
            'Desactivé!',
            'pratician desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'le pratician n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

  /**
   * enable an object
   */
  enable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Activer ce pratician?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.cashierPractician.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.practicians, result['id']);

          Swal.fire(
            'Actvé!',
            'pratician activé avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'Le pratician n\'a pas été modifié.',
          'error'
        )
      }
    })
  }


}
