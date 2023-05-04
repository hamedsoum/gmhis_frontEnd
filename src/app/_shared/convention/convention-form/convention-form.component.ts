import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Convention } from 'src/app/_models/convention.model';
import { ActCodeService } from 'src/app/_services/act-code.service';
import { ActService } from 'src/app/_services/act.service';
import { ConventionService } from 'src/app/_services/convention.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-convention-form',
  templateUrl: './convention-form.component.html',
  styleUrls: ['./convention-form.component.css']
})
export class ConventionFormComponent implements OnInit {

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
  conventionId: number;

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
  convention: Convention;

  /**
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ];

  /**
   * define act codes options
   */
  codes: object;

  /**
   * define acts options
   */
  acts: object;

  /**
   * act code form array
   */
  codeFormGroup = new FormArray([]);

  /**
   * act form array
   */
  actFormGroup = new FormArray([]);


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
    private conventionService: ConventionService,
    private actCodeService: ActCodeService,
    private actService: ActService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.actService.getIdAndName().subscribe(res => { this.acts = res; });
    this.createActCodeInputs();
    if (this.conventionId) this.initUpdateAction();
  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      active: new FormControl('Y', Validators.required),

    });
  }


  /**
   * init the form value when updating
   */
  initUpdateAction() {
    this.conventionService.findById(this.conventionId).subscribe(
      res => {
        if (res) {
          this.convention = res;
          this.form.get('id').setValue(this.convention.id);
          this.form.get('name').setValue(this.convention.name);
          this.form.get('active').setValue(this.convention.active);

          //set actcodes
          for (let index = 0; index < this.convention.actCodes.length; index++) {
            let actCodeId = this.convention.actCodes[index]['actCode']['id'];
            let actCodeValue = this.convention.actCodes[index]['value'];
            //get convention actCode index from codeFormGroup
            let actCodeIndex = this.codeFormGroup.value.findIndex(x => x.actCode === actCodeId);
            //set the value
            this.codeFormGroup.controls[actCodeIndex].get('value').setValue(actCodeValue);
          }


          //set Acts.
          for (let index = 0; index < this.convention.acts.length; index++) {
            this.addActInput();
            this.convention.acts[index]['id']
            this.actFormGroup.controls[index].get('act').setValue(this.convention.acts[index]['act']['id'])
            this.actFormGroup.controls[index].get('coefficient').setValue(this.convention.acts[index]['coefficient'])
          }

        } else {
          this.errorAction("Modification impossible car la convention n'existe pas", '/convention/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/convention/list');
      })
  }

  /**
     * create convention act code inputs
     */
  createActCodeInputs() {

    this.actCodeService.findActive().subscribe(res => {

      this.codes = res;

      for (const key in this.codes) {
        const group = new FormGroup({
          actCode: new FormControl(this.codes[key]['id'], Validators.required),
          value: new FormControl(0, Validators.required),
        });

        this.codeFormGroup.push(group);
      }

    });
  }

  /**
   * create dynamic act inputs
   */
  addActInput() {
    const group = new FormGroup({
      act: new FormControl(null),
      coefficient: new FormControl(0, Validators.required),
    });

    this.actFormGroup.push(group);
  }

  /**
   * remove the correponding row from the FormGroup
   * @param row remove an row from the DOM
   */
  deleteActInput(index) {
    this.actFormGroup.removeAt(index);
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {
    // reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.convention = this.form.value;
    this.convention.actCodes = this.codeFormGroup.value;
    this.convention.acts = this.actFormGroup.value;

    if (this.form.valid) {
      this.objectEmitter.emit({ convention: this.convention, action: this.formAction })
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
    this.errorAction('Action annulée', '/convention/list');
  }

}
