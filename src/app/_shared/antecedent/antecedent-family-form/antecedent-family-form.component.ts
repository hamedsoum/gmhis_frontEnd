import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AntecedentFamilyService } from 'src/app/_services/antecedent-family.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-antecedent-family-form',
  templateUrl: './antecedent-family-form.component.html',
  styleUrls: ['./antecedent-family-form.component.css']
})
export class AntecedentFamilyFormComponent implements OnInit {

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
  antecedentFamilyId: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * child component output
   */
  @Output()
  objectEmitter: EventEmitter <any> = new EventEmitter();

  /**
   * the component model
   */
  antecedentFamily: object;

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
    private antecedentFamilyService: AntecedentFamilyService,
    
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.antecedentFamilyId) this.initUpdateAction();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      active: new FormControl('Y', Validators.required)
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {
      this.antecedentFamilyService.findById(this.antecedentFamilyId).subscribe(
        res => {
          if (res) {
            this.antecedentFamily = res;
            this.form.patchValue(this.antecedentFamily)
          } else {
            this.errorAction("Modification impossible car la famille d'antécédents n'existe pas", '/antecedent/list-family');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/antecedent/list-family');
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
    this.antecedentFamily = this.form.value;
  
    if (this.form.valid) {
      this.objectEmitter.emit({ antecedentFamily: this.antecedentFamily, action: this.formAction })
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
    this.errorAction('Action annulée', '/antecedent/list-family');
  }

}
