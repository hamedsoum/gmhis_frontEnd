import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeCro } from 'src/app/_models/typeCro.model';
import { TypeCroFamilyService } from 'src/app/_services/type-cro-family.service';
import { TypeCroService } from 'src/app/_services/type-cro.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-type-cro-list',
  templateUrl: './type-cro-list.component.html',
  styleUrls: ['./type-cro-list.component.css']
})
export class TypeCroListComponent implements OnInit {

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
  typeCro: TypeCro;

  /**
   * collection of object
   */
  typeCros: TypeCro[];

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
  ];

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
   * permission service
   */
  permission : any;

  @Input()
  title: string;

  families : object;

  constructor(
    private typeCroService: TypeCroService,
    private croFamilyService: TypeCroFamilyService
   ) {}
      

  ngOnInit() {

    this.initForm();
    this.getTypeCros();
    this.croFamilyService.getIdAndName().subscribe( res => { this.families = res;})

  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      croGroup: new FormControl(null),
      active: new FormControl(null),
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get list
   */
  getTypeCros() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.typeCroService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData=false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.typeCros = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error =>{
            this.typeCros = [];
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
    this.getTypeCros();
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
    this.getTypeCros();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getTypeCros();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getTypeCros();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable an item
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver cet élément?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.typeCroService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.typeCros, result['id']);

          Swal.fire(
            'Desactivé!',
            'Elément desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'l\élement n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

  /**
   * enable a role
   */
  enable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Activer cet élément?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.typeCroService.enable(this.selectedItem).subscribe(result => {
          
          //Enable item in the Dom
          if (result) enableItem(this.typeCros, result['id']);

          Swal.fire(
            'Actvé!',
            'Element activé avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'L\'élémnent n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

}
