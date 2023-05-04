import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cashier } from 'src/app/_models/cahier.model';
import { CashRegisterService } from 'src/app/_services/cash-register.service';
import { CashierService } from 'src/app/_services/cashier.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-cashier-form',
  templateUrl: './cashier-form.component.html',
  styleUrls: ['./cashier-form.component.css']
})
export class CashierFormComponent implements OnInit {

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
  cashierId: number;

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
  cashier: Cashier

  /**
   * define user options;
   */
  users: object;

  /**
   * define cash register options
   */
  cashRegisters: object;

  /**
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ]

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
    private cashierService: CashierService,
    private cashRegisterService: CashRegisterService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
    if (this.cashierId) this.initUpdateAction();
    this.cashRegisterService.getIdAndName().subscribe(res => { this.cashRegisters = res});
    this.userService.getIdAndName().subscribe(res => { this.users = res});

  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      user: new FormControl(null, Validators.required),
      cashRegister: new FormControl(null, Validators.required),
      active: new FormControl('Y', Validators.required),
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {

    this.cashierService.findById(this.cashierId).subscribe(
      res => {
        if (res) {
          this.cashier = res;
           this.form.get("id").setValue(this.cashier['id']);
           this.form.get("user").setValue(this.cashier['userId']);
           this.form.get("cashRegister").setValue(this.cashier['cashRegisterId']);
           this.form.get('active').setValue(this.cashier['active']);
        } else {
          this.errorAction("Modification impossible car le caissier n'existe pas", '/cashier/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/cashier/list');

      })
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {
    // reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.cashier = this.form.value;

    if (this.form.valid) {
      this.objectEmitter.emit({ cashier: this.cashier, action: this.formAction })
      if (this.formAction == "save_and_new") this.initForm();
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
    this.errorAction('Action annulée', '/cashier/list');
  }


}
