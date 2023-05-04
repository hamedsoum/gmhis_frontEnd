import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckUp } from 'src/app/_models/checkUp.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CheckUpService } from 'src/app/_services/check-up.service';
import { UserService } from 'src/app/_services/user.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-up-list',
  templateUrl: './check-up-list.component.html',
  styleUrls: ['./check-up-list.component.css']
})
export class CheckUpListComponent implements OnInit {

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
  checkUp: CheckUp;

  /**
   * collection of object
   */
  checkUps: CheckUp[];

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
    private checkUpService: CheckUpService,
    private userService: UserService,
    private authService :  AuthenticationService
  ) { }

  ngOnInit() {

    this.initForm();
    this.getCheckUps();
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
  getCheckUps() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.checkUpService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.checkUps = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.checkUps = [];
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
    this.getCheckUps();
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
    this.getCheckUps();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getCheckUps();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getCheckUps();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable a checkUp
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver ce bilan médical?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.checkUpService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.checkUps, result['id']);

          Swal.fire(
            'Desactivé!',
            'Bilan médical desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'le bilan médical n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

  /**
   * enable a checkUp
   */
  enable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Activer ce bilan médical?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.checkUpService.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.checkUps, result['id']);

          Swal.fire(
            'Actvé!',
            'Bilan médical activé avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'Le bilan médical n\'a pas été modifié.',
          'error'
        )
      }
    })
  }
}
