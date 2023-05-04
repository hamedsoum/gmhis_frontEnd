import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Laboratory } from 'src/app/_models/laboratory.model';
import { LaboratoryService } from 'src/app/_services/laboratory.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-laboratory-form',
  templateUrl: './laboratory-form.component.html',
  styleUrls: ['./laboratory-form.component.css']
})
export class LaboratoryFormComponent implements OnInit {

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
  laboratoryId: number;

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
  laboratory: Laboratory

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
    private laboratoryService: LaboratoryService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.laboratoryId) this.initUpdateAction();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      address: new FormControl(''),
      contact1: new FormControl(''),
      contact2: new FormControl(''),
      email: new FormControl('', Validators.email),
      location: new FormControl(''),
      active: new FormControl('Y', Validators.required),
      
    });
  }
  /**
   * init the form value when updating
   */
  initUpdateAction() {
      this.laboratoryService.findById(this.laboratoryId).subscribe(
        res => {
          if (res) {
            this.laboratory = res;
            this.form.patchValue(this.laboratory)
          } else {
            this.errorAction("Modification impossible car le laboratoire n'existe pas", '/pharmacy/laboratory-list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/pharmacy/laboratory-list');
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
    this.laboratory = this.form.value;
  
    if (this.form.valid) {
      this.objectEmitter.emit({ laboratory: this.laboratory, action: this.formAction })
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
    this.errorAction('Action annulée', '/pharmacy/laboratory-list');
  }

}
