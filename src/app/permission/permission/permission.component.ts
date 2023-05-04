import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from 'src/app/_models/permission.model';
import { Role } from 'src/app/_models/role.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { MenuService } from 'src/app/_services/menu.service';
import { PermissionService } from 'src/app/_services/permission.service';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { can } from 'src/app/_utility/permission/can';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {


  /**
    *  form Group
    */
  form: FormGroup;

  /**
   * form submission action, it will get the value of the action to do
   */
  formAction = '';

  /**
   * 
   */
  role: object;

  /**
   * collection of active roles
   */

  roles: Role[];

  /**
   * collection of active
   */
  permissions = [];


  /**
   * 
   * collection of actives menus
   */
  menus: object;

  /**
   * handle the spinner
   */
  public loading = true;

  /**
   * permission service
   */
  appPermission: any;


  /**
   * define permissions
   */
  createPermission: boolean;
  listPermission: boolean;
  updatePermission: boolean;
  enablePermission: boolean;
  disablePermission: boolean;


  constructor(
    private roleService: RoleService,
    private menuService: MenuService,
    private alertService: AlertService,
    private userService: UserService,
    private authService: AuthenticationService
  ) { }

  /**
   * action to do for display error msg and redirect
   * @param msg 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };

  ngOnInit(): void {

    this.roleService.findActive().subscribe(res => {
      this.roles = res;
      this.loading = false;
    });

    this.menuService.findAll().subscribe(res => {
      this.menus = res;
    });

    this.setPermissions();

  }

  /**
   * set Permissions to component ressources
   */
  setPermissions() {
    this.userService.findByUsername(this.authService.getUsername()).subscribe(user => {
      this.createPermission = can(user, 'createPermission');
      this.listPermission = can(user, 'listPermission');
      this.updatePermission = can(user, 'updatePermission');
      this.enablePermission = can(user, 'enablePermission');
      this.disablePermission = can(user, 'disablePermission');
    });
  }

  /**
  * fonction called at the form submission action whenever to add or update 
  */
  save() {
    // clear alert message
    this.alertService.clear();
    this.role = {
      "permissions": this.permissions,
      "roleDTO": {
        "active": this.role['active'],
        "description": this.role['description'],
        "id": this.role['id'],
        "name": this.role['name']
      }
    }

    this.roleService.update(this.role).subscribe(
      res => {
        if (res) {
          Swal.fire(
            'Mis a jour!',
            'les permissions du rôle ' + res.name + ' ont été mis a jour avec succès.',
            'success'
          )
        }
      },
      error => {
        Swal.fire(
          'Oups Erreur!',
          'Erreur lors de la modification!',
          'error'
        )
      },
      () => { }
    );

  }

  /**
   * get the form submission action
   * @param action : string
   */
  actionToDo(action) {
    this.formAction = action;
  }

  /**
  * action to Do when  ckick on cancel button
  */
  cancelAction(roleId) {
    this.loading = true;
    Swal.fire(
      'Annulé!',
      'L\'action à été annulée!',
      'error'
    );
    this.roleService.findActive().subscribe(res => {
      this.roles = res;
      this.loading = false;
    });

    this.menuService.findAll().subscribe(res => {
      this.menus = res;
    });

    this.setPermission(roleId);
  }

  /**
   * 
   */
  setPermission(roleId) {
    this.roleService.findById(roleId).subscribe(role => {
      this.role = role;
      this.permissions = role.permissions.map(({ id }) => id);
    });
  }

  /**
   * insert or remove a permission from the prescribed Drugs array
   * @param selectedRole 
   */
  getPermission(permission) {

    if (this.permissions.includes(permission)) {

      let index = this.permissions.indexOf(permission);
      this.permissions.splice(index, 1);

    } else {

      this.permissions.push(permission);
    }

  }

}
