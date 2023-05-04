import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { UserInformationFormComponent } from '../user-information-form/user-information-form.component';
import { UserRoleFormComponent } from '../user-role-form/user-role-form.component';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { can } from 'src/app/_utility/permission/can';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild(UserInformationFormComponent) userInfoComponent;
  @ViewChild(UserRoleFormComponent) roleComponent;

  /**
   *  form Group
   */
  form: FormGroup;

  /**
  * invalid from controls
  */
  invalidFormControls: any;

  /** 
   * model id
   */
  @Input()
  id: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * user id
   */
  @Input()
  userId: number;

  /**
   * child component output
   */
  @Output()
  objectEmitter: EventEmitter<any> = new EventEmitter();

  /**
    * date picker model
    */
  datePicker: NgbDateStruct;

  /**
   * define permissions
   */
  createUser: boolean;


  /**
   * action to do for display error msg and redirect
   * @param msg 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>,
    private authService : AuthenticationService,
    private userService : UserService

  ) { }


  ngOnInit(): void { 
    this.setPermissions();
  }
  
    /**
   * set Permissions to component ressources
   */
  setPermissions(){
    this.userService.findByUsername(this.authService.getUsername()).subscribe(user => {
      this.createUser = can(user, 'createUser');
    });
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save(action) {
   
    this.form = this.userInfoComponent.form;

    // reset alerts on submit
    this.alertService.clear();
 
    //validate form '
    
    let data = this.form.value;
    
    if( ! data['passwordExpireAt'])  this.form.removeControl('passwordExpireAt');
    
    this.invalidFormControls = invalidformControls(this.form);

    if (this.form.valid) {

      data['roles'] = this.roleComponent.userRoles.join(',');

      if (data['roles']) {
        
        data['passwordExpireAt'] = data['passwordExpireAt'] ? dateInputFormat(data['passwordExpireAt']): null;
    
        if(data['passwordExpireAt']) {
          data['passwordExpireAt'].setHours(data['passwordExpireTime']['hour']);
          data['passwordExpireAt'].setMinutes(data['passwordExpireTime']['minute']);
        }
        this.objectEmitter.emit({ user: data, action: action });
      } else {
        this.alertService.error('Veillez attribuer  au moin un rôle à cet utilisateur');
        let activatedUrl = this.activatedRoute.snapshot['_routerState']['url'];
        this.router.navigateByUrl(activatedUrl);
      }
    } else {
      this.alertService.error('Formulaire non valid');
    }
  }
  
  /**
  * action to Do when  ckick on cancel button
  */
  cancelAction() {
    this.errorAction('Action annulée', '/user/list');
  }

}
