import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Act } from 'src/app/_models/act.model';
import { ActCategoryService } from 'src/app/_services/act-category.service';
import { ActCodeService } from 'src/app/_services/act-code.service';
import { ActFamilyService } from 'src/app/_services/act-family.service';
import { ActService } from 'src/app/_services/act.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
// import { ValidateInt } from 'src/app/_utility/CustomValidators/int.Validator';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-act-form',
  templateUrl: './act-form.component.html',
  styleUrls: ['./act-form.component.css']
})
export class ActFormComponent implements OnInit {

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
  actId: number;

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
  act: Act;

   /**
   * define states options
   */
  actives = [
    {id: "Y", value: "Actif"},
    {id: "N", value: "Inactif"},
  ];

  /**
   * define categories options
   */
  categories :  object;

   /**
   * define families options
   */
  families :  object;

 /**
   * define actCodes options
   */
  actCodes :  object;

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
    private actService: ActService,
    private actCategoryService: ActCategoryService,
    private actCodeService: ActCodeService,
    private actFamilyService: ActFamilyService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initUpdateAction();
    this.actCategoryService.getIdAndName().subscribe(res => { this.categories= res; });
    this.actCodeService.getIdAndName().subscribe(res => { this.actCodes= res; });
    this.actFamilyService.getIdAndName().subscribe(res => { this.families= res; });

  }

  /**
   *  init form 
   */
  initForm() {
     this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      codification: new FormControl('', Validators.required),
      active: new FormControl('Y'),
      // coefficient: new FormControl(null,[Validators.required, ValidateInt]),
      coefficient: new FormControl(null,[Validators.required]),
      actCode: new FormControl(null, Validators.required) ,
      actCategory: new FormControl(null, Validators.required),
      actGroup: new FormControl(null, Validators.required) ,
      
    });
  }


  /**
   * init the form value when updating
   */
  initUpdateAction() {

    if (this.actId) {

      this.actService.findById(this.actId).subscribe(
        act => {
          if (act) {
            this.act = act;
            this.form.patchValue(act);
          } else {
            this.errorAction("Modification impossible car l'élément n'existe pas", '/act/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/act/list');
          
        })
    }
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {

    // reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.act = this.form.value;

    if (this.form.valid) {
      this.objectEmitter.emit({ act: this.act, action: this.formAction })
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
    this.errorAction('Action annulée', '/act/list');
  }


}
