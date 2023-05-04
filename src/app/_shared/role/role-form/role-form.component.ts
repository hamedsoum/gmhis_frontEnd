import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/_models/role.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { can } from 'src/app/_utility/permission/can';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  /**
  *   form Group
  */
  form: FormGroup;

  /**
  * form submission action, it will get the value of the action to do
  */
  formAction = '';

  /** 
  * invalid from controls
  */
  invalidFormControls: any;

  /**
   * parent component input
   */
  @Input()
  roleId: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * child component output
   */
  @Output()
  objectEmitter: EventEmitter<any> = new EventEmitter();

  /**
   * the component model
   */
  role: Role;

/**
 * role permissions
 */
permissions= []

  /**
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ];

  /**
  * define  deleted options
  */
  deleted = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ];

   /**
   * permission service
   */
  appPermission : any;

  /**
   * 
   */
  data: object = {};

  /**
   * define permissions
   */
  createRole: boolean;


  /**
   * action to do for display error msg and redirect
   * @param msg 
   * @param redirectTo 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };

 
  constructor(
    private router: Router,
    private alertService: AlertService,
    private roleService: RoleService,
    private authService : AuthenticationService,
    private userService : UserService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.roleId) this.initUpdateForm();
    this.setPermissions();
  }

  /**
   * init the form value when adding
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      active: new FormControl('Y', Validators.required),
    });

  }

   /**
   * set Permissions to component ressources
   */
  setPermissions(){
    this.userService.findByUsername(this.authService.getUsername()).subscribe(user => {
      this.createRole = can(user, 'createRole');
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateForm() {

    if (this.roleId) {

      this.roleService.findById(this.roleId).subscribe(
        role => {
          if (role) {
           this.form.patchValue(role);
           this.permissions = role['permissions'].map(({ id }) => id);

          } else {
            this.errorAction("Modification impossible car le role n'existe pas", '/role/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/role/list');
          
        })
    }
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {

    // reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.data['roleDTO'] = this.form.value;
    this.data['permissions']=this.permissions;

    if (this.form.valid) {

      this.objectEmitter.emit({ role: this.data, action: this.formAction })

      if (this.formAction == "save_and_new") {
        this.initForm();
      }

    } else {
      this.alertService.error('Formulaire non valid');
    }
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
  cancelAction() {
    this.errorAction('Action annulée', '/role/list');
  }
}
