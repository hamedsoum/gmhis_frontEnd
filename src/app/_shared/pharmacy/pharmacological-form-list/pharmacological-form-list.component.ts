import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PharmacologicalForm } from 'src/app/_models/pharmacological-form.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { PharmacologicalFormService } from 'src/app/_services/pharmacological-form.service';
import { UserService } from 'src/app/_services/user.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pharmacological-form-list',
  templateUrl: './pharmacological-form-list.component.html',
  styleUrls: ['./pharmacological-form-list.component.css']
})
export class PharmacologicalFormListComponent implements OnInit {

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
 pharmaForm: PharmacologicalForm;

  /**
   * collection of object
   */
  pharmaForms: PharmacologicalForm[];

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
  permission: any;

  /**
   * define permissions
   */
  // createRole: boolean;
  // listRole: boolean;
  // updateRole: boolean;
  // enableRole: boolean;
  // disableRole: boolean;
  // searchRole: boolean;

  @Input()
  title: string;

  constructor(
    private pharmaFormService: PharmacologicalFormService,
    private userService: UserService,
    private authService :  AuthenticationService
  ) { }

  ngOnInit() {

    this.initForm();
    this.getPharmaForms();
    this.setPermissions();

  }

  /**
   * set Permissions to component ressources
   */
  setPermissions(){
    // this.userService.findByUsername(this.authService.getUsername()).subscribe(user => {
    //   this.createRole = can(user, 'createRole');
    //   this.listRole = can(user, 'listRole');
    //   this.updateRole = can(user, 'updateRole');
    //   this.enableRole = can(user, 'enableRole');
    //   this.disableRole = can(user, 'disableRole');
    //   this.searchRole = can(user, 'searchRole');
    // });
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
  getPharmaForms() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.pharmaFormService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.pharmaForms = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.pharmaForms = [];
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
    this.getPharmaForms();
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
    this.getPharmaForms();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getPharmaForms();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getPharmaForms();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable an element
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

        this.pharmaFormService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.pharmaForms, result['id']);

          Swal.fire(
            'Desactivé!',
            'Elément desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'l\'élément n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

  /**
   * enable an element
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
        this.pharmaFormService.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.pharmaForms, result['id']);

          Swal.fire(
            'Actvé!',
            'Elément activé avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'L\'élément n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

}
