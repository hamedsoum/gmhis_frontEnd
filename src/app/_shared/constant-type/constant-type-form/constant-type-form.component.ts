import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstantType } from 'src/app/_models/constantType.model';
import { ConstantDomainService } from 'src/app/_services/constant-domain.service';
import { ConstantTypeService } from 'src/app/_services/constant-type.service';
import { UnitOfMeasureService } from 'src/app/_services/unit-of-measure.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
// import { ValidateInt } from 'src/app/_utility/CustomValidators/int.Validator';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-constant-type-form',
  templateUrl: './constant-type-form.component.html',
  styleUrls: ['./constant-type-form.component.css']
})
export class ConstantTypeFormComponent implements OnInit {

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
  constantTypeId: number;

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
  constantType: ConstantType

  /**
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ];

  /**
   * define Unit of measure options
   */
  unitOfMeasures: object;

  /**
   * define constant domain options
   */
  constantDomains: object;

  /**
   * define result type options
   */
  resultTypes = [
    { id: 'NUMERIC', value: 'Numérique' },
    { id: 'SELECT', value: 'Liste de selection simple' },
    { id: 'MULTI_SELECT', value: 'Liste de selection multiple' },
    { id: 'ALPHA_NUMERIC', value: 'Alphanumérique' },
    { id: 'LONG_TEXT', value: 'Text' },
  ];

  /**
   * define constant option if neccesaary
   */
  mustHaveOptions = false;

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
    private constantTypeService: ConstantTypeService,
    private constantDomainService: ConstantDomainService,
    private uomService: UnitOfMeasureService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.constantTypeId) this.initUpdateAction();
    this.constantDomainService.getIdAndName().subscribe(res => { this.constantDomains = res; });
    this.uomService.getIdAndName().subscribe(res => { this.unitOfMeasures = res; })
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      shortName: new FormControl('', Validators.required),
      constantDomain: new FormControl(null, Validators.required),
      description: new FormControl(''),
      resultType: new FormControl(null, Validators.required),
      // significantDigits: new FormControl('', [Validators.required, ValidateInt]),
      significantDigits: new FormControl('', [Validators.required]),
      unitOfMesure: new FormControl(null, Validators.required),
      active: new FormControl('Y', Validators.required),

    });
  }
  /**
   * init the form value when updating
   */
  initUpdateAction() {
    this.constantTypeService.findById(this.constantTypeId).subscribe(
      res => {
        if (res) {
          this.constantType = res;
          this.form.patchValue(this.constantType);
          this.form.get('constantDomain').setValue(this.constantType['patientConstantDomain']['id']);
          this.form.get('unitOfMesure').setValue(this.constantType['unitOfMesure']['id']);
         
          this.resultTypeChange();

          for (let index = 0; index < this.constantType['options'].length; index++) {
            this.addConstantOption();
            this.optionsFormGroup.controls[index].get("active").setValue(this.constantType['options'][index]['active']);
            this.optionsFormGroup.controls[index].get("constantType").setValue(this.constantType['options'][index]['constantType']);
            this.optionsFormGroup.controls[index].get("id").setValue(this.constantType['options'][index]['id']);
            this.optionsFormGroup.controls[index].get("order").setValue(this.constantType['options'][index]['order']);
            this.optionsFormGroup.controls[index].get("value").setValue(this.constantType['options'][index]['value']);
          }
          
        } else {
          this.errorAction("Modification impossible car la constante type n'existe pas", '/constant-type/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/constant-type/list');
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
    this.constantType = this.form.value;

    let options = this.optionsFormGroup.value;
    let validOptions = true;
    
    
    if (options.length > 0) {
      for (let index = 0; index < options.length; index++) {
        const control = this.optionsFormGroup.controls[index];
        if (control.status == "INVALID") validOptions = false;
      }
    }
    
    if (this.form.valid) {

      if (! validOptions || ( this.mustHaveOptions && (options.length == 0 ))) {
        this.alertService.error("Veillez renseigner correctement les differentes options");
      } else {
        this.objectEmitter.emit({ constantType: this.constantType, constantOptions: this.optionsFormGroup.value, action: this.formAction })

        if (this.formAction == "save_and_new") this.initForm();
      }
    } else {
      this.alertService.error('Formulaire non valid');
    }
  }

  /**
   * insurances form array
   */
  optionsFormGroup = new FormArray([]);

  /**
   * determine if constant type must have options
   */
  resultTypeChange() {

    let type = this.form.get('resultType').value;

    if (type === 'MULTI_SELECT' || type === 'SELECT') {
      this.mustHaveOptions = true;
    } else {
      this.mustHaveOptions = false;
    }


  }

  /**
   * create dynamic option inputs
   */
  addConstantOption() {
    const group = new FormGroup({
      active: new FormControl('Y', Validators.required),
      constantType: new FormControl(0),
      id: new FormControl(0),
      // order: new FormControl('', [Validators.required, ValidateInt]),
      order: new FormControl('', [Validators.required]),
      value: new FormControl('', Validators.required),
    });

    this.optionsFormGroup.push(group);

  }

  /**
  * remove the correponding row from the FormGroup
  * @param row remove an item row from the DOM
  */
  deleteOptionRow(row) {
    this.optionsFormGroup.removeAt(row);
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
    this.errorAction('Action annulée', '/constant-type/list');
  }

}
