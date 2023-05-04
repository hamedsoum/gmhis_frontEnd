import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Antecedent } from 'src/app/_models/antecedent.model';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import {  } from "./../../../_utility/alert/alert-servic.service";
import { AntecedentService } from "./../../../_services/antecedent.service";
import { AntecedentFamilyService } from 'src/app/_services/antecedent-family.service';

@Component({
  selector: 'app-antecedent-form',
  templateUrl: './antecedent-form.component.html',
  styleUrls: ['./antecedent-form.component.css']
})
export class AntecedentFormComponent implements OnInit {

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
  antecedentId: number;

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
  antecedent: Antecedent

  /**
   * define antecedent families options
   */
  antecedentFamilies : object;

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
    private antecedentService: AntecedentService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if(this.antecedentId) this.initUpdateAction();
    this.antecedentFamilyService.getIdAndName().subscribe(res => { this.antecedentFamilies = res; });
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      antecedantType: new FormControl(null, Validators.required),
      active: new FormControl("Y"),
      
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {

      this.antecedentService.findById(this.antecedentId).subscribe(
        res => {
          if (res) {
            this.antecedent = res;
            this.form.patchValue(this.antecedent);
          } else {
            this.errorAction("Modification impossible car l'antecedent n'existe pas", '/antecedent/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/antecedent/list');
          
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
    this.antecedent = this.form.value;
  
    if (this.form.valid) {
      this.objectEmitter.emit({ antecedent: this.antecedent, action: this.formAction })
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
    this.errorAction('Action annulée', '/antecedent/list');
  }

}
