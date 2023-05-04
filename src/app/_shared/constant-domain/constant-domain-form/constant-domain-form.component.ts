import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstantDomain } from 'src/app/_models/constantDomain.model';
import { ConstantDomainService } from 'src/app/_services/constant-domain.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-constant-domain-form',
  templateUrl: './constant-domain-form.component.html',
  styleUrls: ['./constant-domain-form.component.css']
})
export class ConstantDomainFormComponent implements OnInit {

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
  constantDomainId: number;

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
  constantDomain: ConstantDomain
   /**
   * define  states options
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
    private constantDomainService: ConstantDomainService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.constantDomainId) this.initUpdateAction();
  }

  /**
   *  init form 
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
   * init the form value when updating
   */
  initUpdateAction() {
      this.constantDomainService.findById(this.constantDomainId).subscribe(
        res => {
          if (res) {
            this.constantDomain = res;
            this.form.patchValue(this.constantDomain)
          } else {
            this.errorAction("Modification impossible car le groupe n'existe pas", '/constant-domain/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/constant-domain/list');
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
    this.constantDomain = this.form.value;
  
    if (this.form.valid) {
      this.objectEmitter.emit({ constantDomain: this.constantDomain, action: this.formAction })
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
    this.errorAction('Action annulée', '/constant-domain/list');
  }


}
