import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceSubscriber } from 'src/app/_models/insuranceSubscriber.model';
import { InsuranceSubscriberService } from 'src/app/_services/insurance-subscriber.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.css']
})
export class SubscriberFormComponent implements OnInit {

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
  subscriberId: number;

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
  susbscriber: InsuranceSubscriber

   /**
   * define insurance subscriber states options
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
    private subscriberService: InsuranceSubscriberService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.subscriberId) this.initUpdateAction();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      code: new FormControl(''),
      address: new FormControl(''),
      active: new FormControl('Y', Validators.required),
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {

      this.subscriberService.findById(this.subscriberId).subscribe(
        subscriber => {
          if (subscriber) {
            this.susbscriber = subscriber;
            this.form.patchValue(this.susbscriber);
          } else {
            this.errorAction("Modification impossible car le societaire n'existe pas", '/insurance-subscriber/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/insurance-subscriber/list');
          
        })
    
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {// reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.susbscriber = this.form.value;
    
    if (this.form.valid) {
      this.objectEmitter.emit({ subscriber: this.susbscriber, action: this.formAction })
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
    this.errorAction('Action annulée', '/insurance/list-subscriber');
  }


}
