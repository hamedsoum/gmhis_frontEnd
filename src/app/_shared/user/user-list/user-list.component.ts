import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationRoutingModule } from 'src/app/authentication/authentication-routing.module';
import { User } from 'src/app/_models/user.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { PermissionService } from 'src/app/_services/permission.service';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import { can } from 'src/app/_utility/permission/can';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

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
   * the selected item id
   */
  public selectedItemId: number;

  /**
   * selected Item
   */

  public selectedItem: User;

  /**
   * collection of users
   */
  public users: User[];

  /**
   * Define entries options
   */
  entries = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 }
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
  * Define active state options
  */
  active = [
    { id: 'Y', value: 'Oui' },
    { id: 'N', value: 'Non' }
  ];

  /**
   * Define locked options
   */
  locked = [
    { id: 'Y', value: 'Oui' },
    { id: 'N', value: 'Non' }
  ];

  /**
   * Define role options
   */
  roles: Object;

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


  /**
   * define permissions
   */
  createUser: boolean;
  listUser: boolean;
  updateUser: boolean;
  enableUser: boolean;
  disableUser: boolean;
  searchUser: boolean;

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private permissionService: PermissionService,
    private authService : AuthenticationService
    ) {
  
      this.permission = this.permissionService;
    }
    
  ngOnInit() {
    this.initForm();
    this.getUsers();
    this.roleService.getIdAndName().subscribe(res => { this.roles = res; });
    this.setPermissions();
  }

  /**
   * set Permissions to component ressources
   */
  setPermissions(){
    this.userService.findByUsername(this.authService.getUsername()).subscribe(user => {
      this.createUser = can(user, 'createUser');
      this.listUser = can(user, 'listUser');
      this.updateUser = can(user, 'updateUser');
      this.enableUser = can(user, 'enableUser');
      this.disableUser = can(user, 'disableUser');
      this.searchUser = can(user, 'searchUser');
    });
  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      role: new FormControl(null),
      phoneContact: new FormControl(''),
      active: new FormControl(null),
      locked: new FormControl(null),
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get patient list
   */
  getUsers() {
    let data = this.form.value;
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.userService.findAll(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.users = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        if (error == "Liste des utilisateurs est vide") {
          this.users = [];
          this.loading=false;
          this.hasNoData=true;
          this.EmptyMessage=error;
        }
      });
  }

  /**
   * search function
   */
  search() {
    this.loading = true;
    this.page = this.page > 0 ? this.page - 1 : 0;
    this.getUsers();
  }

  /**
   * sort function
   * @param SortColumn 
   */
  onSort(SortColumn) {

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
    this.getUsers();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getUsers();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.perPage = this.entryForm.get('entries').value;
    this.loading = true;
    this.page = this.page - 1;
    this.getUsers();
  }

  /**
   * set the selected item value
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
    this.selectedItemId = item.id;
  }

  /**
  * disable an object
  */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver ce utilisateur?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.userService.disable(this.selectedItem).subscribe(result => {
          //disable row in the DOM
          if (result) disableItem(this.users, result['id']);

          Swal.fire(
            'Desactivé!',
            'utilisateur desactiver avec succès.',
            'success'
          )
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'l\'utilisateur n\'a pas été modifié.',
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
      title: 'Souhaitez-vous vraiment Activer cet utilisateur?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.userService.enable(this.selectedItem).subscribe(result => {
          //enable row in the DOM
          if (result) enableItem(this.users, result['id']);

          Swal.fire(
            'Actvé!',
            'utilisateur activé avec succès.',
            'success'
          )
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'L\'utilisateur n\'a pas été modifié.',
          'error'
        )
      }
    })
  }

}
