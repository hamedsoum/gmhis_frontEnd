import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashRegister } from 'src/app/_models/cashRegister.model';
import { CashRegisterService } from 'src/app/_services/cash-register.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-cash-register-form',
  templateUrl: './cash-register-form.component.html',
  styleUrls: ['./cash-register-form.component.css']
})
export class CashRegisterFormComponent implements OnInit {
 

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
  cashRegisterId: number;

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
  cashRegister: CashRegister

   /**
   * define states options
   */
  actives = [
    {id: "Y", value: "Actif"},
    {id: "N", value: "Inactif"},
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
    private alertService : AlertService,
    private cashRegisterService: CashRegisterService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.cashRegisterId) this.initUpdateAction();
  }

  /**
   *  init form 
   */
  initForm() {
     this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      active: new FormControl("Y"),
      
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {

      this.cashRegisterService.findById(this.cashRegisterId).subscribe(
        cashRegister => {
          if (cashRegister) {
            this.cashRegister = cashRegister;
           this.form.patchValue(this.cashRegister);
          } else {
            this.errorAction("Modification impossible car la caisse n'existe pas", '/cash-register/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/cash-register/list');
          
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
    this.cashRegister = this.form.value;
    
    if (this.form.valid) {
      this.objectEmitter.emit({ cashRegister: this.cashRegister, action: this.formAction })
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
    this.errorAction('Action annulée', '/cash-register/list');
  }

}
