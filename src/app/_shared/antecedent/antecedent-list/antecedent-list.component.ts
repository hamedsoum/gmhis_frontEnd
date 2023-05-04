import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Antecedent } from 'src/app/_models/antecedent.model';
import { AntecedentFamilyService } from 'src/app/_services/antecedent-family.service';
import { AntecedentService } from 'src/app/_services/antecedent.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { deleteRow } from 'src/app/_utility/delete-row';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-antecedent-list',
  templateUrl: './antecedent-list.component.html',
  styleUrls: ['./antecedent-list.component.css']
})
export class AntecedentListComponent implements OnInit {
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
    antecedent : Antecedent;

    /**
     * collection of object
     */
    antecedents: Antecedent[];
  
  
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

    /**
     * define antecedent families option 
     */
    antecedentFamilies: object;
  
    constructor(
      private facilityService: AntecedentService,
      private antecedentFamilyService: AntecedentFamilyService
    ) { }
  
    ngOnInit() {
      this.initForm();
      this.getAntecedents();
      this.antecedentFamilyService.getIdAndName().subscribe(res => { this.antecedentFamilies = res;});
    }
  
    /**
     *  init form 
     */
    initForm() {
      this.form = new FormGroup({
        name: new FormControl(''),
        active: new FormControl(null),
        antecedantType: new FormControl(null),
      })
  
      this.entryForm = new FormGroup({
        entries: new FormControl(10),
      })
    }
  
    /**
     * get antecedentslist
     */
    getAntecedents() {
      let data = this.form.value
      data.entries = this.entryForm.get('entries').value;
      data.page = this.page;
      data.order = this.order;
      data.sort = this.sort;
      data.antecedantType = this.form.get("antecedantType").value;
     
      this.facilityService.findAllByPage(data).subscribe(
        res => {
          if (res) {
            this.loading = false;
            this.hasNoData=false;
            this.totalItem = res['totalElements'];
            this.pages = res['totalPages'];
            this.antecedents= res['content'];
            this.page = res['pageNumber'] + 1;
          };
        },
        error =>{
              this.antecedents= [];
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
    this.getAntecedents();
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
    this.getAntecedents();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getAntecedents();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getAntecedents();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable a antecedent
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver cet antécédent?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.facilityService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.antecedents, result['id']);

          Swal.fire(
            'Desactivé!',
             'antécédent desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'l\ antécédent n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

  /**
   * enable a antecedent
   */
  enable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Activer cet antécédent?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.facilityService.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.antecedents, result['id']);

          Swal.fire(
            'Actvé!',
             'antécédent activé avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'L\ antécédent n\'a pas été modifié.',
          'error'
        )
      }
    })
  }
}
