import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Symptom } from 'src/app/_models/symtom.model';
import { SymptomService } from 'src/app/_services/symptom.service';
import Swal from 'sweetalert2';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';

@Component({
  selector: 'app-symptom-list',
  templateUrl: './symptom-list.component.html',
  styleUrls: ['./symptom-list.component.css']
})
export class SymptomListComponent implements OnInit {

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
    symptom : object;

    /**
     * collection of object
     */
    symptoms: Symptom[];
  
  
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

  constructor( private symptomService: SymptomService) { }

  ngOnInit() {
    this.initForm();
    this.getSymptom();
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
   * get symptoms list
   */
  getSymptom() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;
   
    this.symptomService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData=false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.symptoms = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error =>{
            this.symptoms = [];
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
  this.getSymptom();
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
  this.getSymptom();
}

/**
 * set the current page
 * @param pageNum 
 */
public onPageChange(pageNum: number): void {
  this.loading = true;
  this.page = pageNum - 1;
  this.getSymptom();
}

/**
 * function to handle the selected number of entries to show
 */
OnEntryChange() {
  this.loading = true;
  this.perPage = this.entryForm.get('entries').value;
  this.page = this.page - 1;
  this.getSymptom();
}

/**
 * set the selected item 
 * @param item 
 */
onItemChange(item) {
  this.selectedItem = item;
}

/**
 * disable a symptom
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

      this.symptomService.disable(this.selectedItem).subscribe(result => {
        //disable item in the DOM
        if (result) disableItem(this.symptoms, result['id']);

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
      this.symptomService.enable(this.selectedItem).subscribe(result => {
        //Enable item in the Dom
        if (result) enableItem(this.symptoms, result['id']);

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
