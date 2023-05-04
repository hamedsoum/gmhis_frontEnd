import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Uom } from 'src/app/_models/unitOfMeasure.model';
import { UnitOfMeasureService } from 'src/app/_services/unit-of-measure.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-unit-of-measure-form',
  templateUrl: './unit-of-measure-form.component.html',
  styleUrls: ['./unit-of-measure-form.component.css']
})
export class UnitOfMeasureFormComponent implements OnInit {

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
  uomId: number;

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
  uom: Uom

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
    private uomService: UnitOfMeasureService,
    ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.uomId) this.initUpdateAction();
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

      this.uomService.findById(this.uomId).subscribe(
        res => {
          if (res) {
            this.uom = res;
            this.form.patchValue(res);
          } else {
            this.errorAction("Modification impossible car l'unité de mesure n'existe pas", '/uom/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/uom/list');
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
    this.uom = this.form.value;
   
    if (this.form.valid) {
      this.objectEmitter.emit({ uom: this.uom, action: this.formAction })
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
    this.errorAction('Action annulée', '/uom/list');
  }

}
