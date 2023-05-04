import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { UserService } from 'src/app/_services/user.service';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';

@Component({
  selector: 'app-user-information-form',
  templateUrl: './user-information-form.component.html',
  styleUrls: ['./user-information-form.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider

})
export class UserInformationFormComponent implements OnInit {

  /**
   *  form Group
   */
  form: FormGroup;

  /**
   * form submission action, it will get the value of the action to do
   */
  @Input()
  formAction : string;

  /**
   * invalid from controls
   */
  @Input()
  invalidFormControls: any;

  
  /**
   * parent component input
   */
  @Input()
  userId: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

   /**
   * Define active state options
   */
  active = [
    { id: 'Y', value: 'Oui' },
    { id: 'N', value: 'Non' }
  ];

  /**
   * Define active locked options
   */
  locked  = [
    { id: 'Y', value: 'Oui' },
    { id: 'N', value: 'Non' }
  ];

  /**
   * Define change password options
   */
  changePassword  = [
    { id: 'Y', value: 'Oui' },
    { id: 'N', value: 'Non' }
  ];

  /**
    * date picker model
    */
  datePicker: NgbDateStruct;

  /**
   * time picker model
   */
  timePicker = { hour: 0, minute: 0};

  /**
   * action to do for display error msg and redirect
   * @param msg 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };

  constructor(
    private userService : UserService,
    private alertService: AlertService,
    private router: Router,
    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>
  ) { }

  ngOnInit(): void {
    
    this.initForm();
    
    if (this.userId) this.initUpdateForm();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
        id : new FormControl(0),
        email: new FormControl('', [Validators.required, Validators.email]),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        active: new FormControl('Y', Validators.required),
        // avatar: new FormControl(''),
        locked : new FormControl('N', Validators.required),
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        passwordExpireAt: new FormControl(null),
        passwordExpireTime: new FormControl(null),
        passwordMustChange: new FormControl('Y', Validators.required),
        phoneContact: new FormControl('', Validators.required),
        repassword: new FormControl('', Validators.required),
        sessionLifeTime: new FormControl(''),     
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateForm() {
    this.form.get('password').clearValidators();
    this.form.get('repassword').clearValidators();

    if (this.userId) {
      this.userService.findById(this.userId).subscribe(
        
        res => {
          
          if (res) {
            let passwordExpireAt = new Date(res['passwordExpireAt']);
            this.timePicker = { hour: passwordExpireAt.getHours(), minute: passwordExpireAt.getMinutes()};
             res['password'] = '';
             res['passwordExpireAt'] =  (res['passwordExpireAt']==null) ? '': dateOutputFormat(passwordExpireAt);
             this.form.patchValue(res);

          } else {
            this.errorAction("Modification impossible car l'utilisateur n'existe pas", '/user/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/user/list');
          
        })
    }
  }

}
