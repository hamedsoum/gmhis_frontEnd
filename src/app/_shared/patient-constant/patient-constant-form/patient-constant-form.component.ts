import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { exit } from 'process';
import { ConstantDomainService } from 'src/app/_services/constant-domain.service';
import { ConstantTypeService } from 'src/app/_services/constant-type.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";

@Component({
  selector: 'app-patient-constant-form',
  templateUrl: './patient-constant-form.component.html',
  styleUrls: ['./patient-constant-form.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider
})
export class PatientConstantFormComponent implements OnInit {

  /**
  *  form Group
  */
  public form: FormGroup;

  public observationForm: FormGroup;

  /**
   * dynamic input form
   */
  public selectedConstantForm: FormGroup;

  /**
    * time picker model
    */
  currentDate = new Date();

  /**
   * time picker
   */
  timePicker = { hour: this.currentDate.getHours(), minute: this.currentDate.getMinutes(), second: this.currentDate.getSeconds() }


  /**
    * time piker second
    */
  seconds = true;

  /**
   * define constants type options
   */
  constantTypes: any;

  /**
   *  constant domain
   */
  constantDomains: Object;

  /**
   *  selected constants
   */
  selectedConstants: Array<any>;

  /**
   * invalid from controls
   */
  invalidFormControls: any;


  /**
   * parent component input
   */
  @Input()
  patientId: number;

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
   * the curent component
  */
 @Input()
 component: string;

 addPatientConstantComponent : boolean;

  /**
   * constant type options if result type is selection or multiple selection 
   */
  options = [];

  /**
   * define is the result type of the selected constants is multiple selection or not 
   */
  multipleSelection = [];

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
    private alertService: AlertService,
    private constantTypeService: ConstantTypeService,
    private constantDomainService: ConstantDomainService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.constantDomainService.findActive().subscribe(res => { this.constantDomains = res; });
    this.addPatientConstantComponent = (this.component == 'AddPatientConstantComponent') ? true : false;
    this.constantTypeService.findActive().subscribe(res => {
      this.constantTypes = res;
    });

  }

  /**
   * init form
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      constants: new FormControl(null, Validators.required),
      domain: new FormControl(null),
      date: new FormControl(dateOutputFormat(new Date()), Validators.required),
      time: new FormControl(this.timePicker, Validators.required)
    });

    this.observationForm = new FormGroup ({
      observation: new FormControl(null),
    });
  }


  /**
   * create dynamic input
   */
  createInputs() {

    let group = {}
    this.options = [];
    this.multipleSelection = [];
    this.selectedConstants = this.form.get('constants').value;

    // check if constants are selected
    if (this.selectedConstants == null || (this.selectedConstants.length == 0)) {
      this.alertService.error('Veillez selectionnez des constantes!');
    } else {

      for (let index = 0; index < this.selectedConstants.length; index++) {
        let ct = this.constantTypes.find(e => e.name === this.selectedConstants[index]);
        
        let resultType = ct['resultType'];

        switch (resultType) {

          case "N":
            group[index] = new FormControl(null, [Validators.required]);
            this.selectedConstantForm = new FormGroup(group);
            this.options.push('');
            this.multipleSelection.push('N');
            break;

          case "S":
            group[index] = new FormControl(null, [Validators.required]);
            this.selectedConstantForm = new FormGroup(group);
            this.options.push(ct['options']);
            this.multipleSelection.push('N');

            break;

          case "M":

            group[index] = new FormControl(null), [Validators.required];
            this.selectedConstantForm = new FormGroup(group);
            this.options.push(ct['options']);
            this.multipleSelection.push('Y');
            break;

          default:
            group[index] = new FormControl(null, [Validators.required]);
            this.selectedConstantForm = new FormGroup(group);
            this.options.push('');
            this.multipleSelection.push('Y');

        }
      }
    }

  }

  /**
   * save patient constants
   */
  save() {
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);

    let selectedConstantValues = this.selectedConstantForm.value;

    let patientConstants = {};

    let t = {};
    if (this.form.valid) {
      
      if (this.selectedConstantForm) {
      
        // check if one of  the selected constants are empty value
        for (let index = 0; index < Object.keys(selectedConstantValues).length; index++) {
          const element = selectedConstantValues[index];
          
          if ( ! element) {
            this.alertService.error('toutes les constantes selectionner doivent avoir des valeurs!');
            //this.errorAction('toutes les constantes selectionner doivent avoir des valeurs!', '/patient-constant/add/' + this.patientId);
            return null;
          } else {
            // validate the constant result type
            let constantType = this.constantTypes.find(e => e.name === this.selectedConstants[index]);
            
            let resultType = constantType['resultType'];

            if (resultType == 'N') {
              if (isNaN(selectedConstantValues[index])) {
                this.alertService.error('La valeur de la constante "' + constantType['name'] + '" doit etre de type numéric');
               // this.errorAction('La valeur de la constante "' + constantType['name'] + '" doit etre de type numéric', '/patient-constant/add/' + this.patientId);
                return null;
              }
            }
            
            let uom = this.constantTypes.find(e => e.name == this.selectedConstants[index])['constantUnit'];
            patientConstants[this.selectedConstants[index]] = selectedConstantValues[index] + " " + uom;
          }

        }

        let data = {
          "id": this.form.get('id').value,
          "observation": this.observationForm.get('observation').value,
          "patient":  Number(this.patientId),
          "value": JSON.stringify(patientConstants),
        };
         this.objectEmitter.emit({ patientConstants: data })
         this.selectedConstants = [];
      } else { this.alertService.error('Veuillez renseignement correctement les valeurs des constantes!') };
    } else {
      this.alertService.error('Formulaire non valid');
    }
  }

  /**
   * fech constants type on domain change
   */
  onDomainChange() {
    let domain = this.form.get("domain").value;
    this.constantTypeService.findActiveByDomain(domain).subscribe(res => {
      this.constantTypes = res;
    });

  }

  /**
   * 
   */
  onRemove() {
    this.createInputs();
  }

  /**
   * 
   * @param item 
   */
  onInputRemove(item) {

    this.selectedConstants.forEach((element, index) => {
      if (element == item) this.selectedConstants.splice(index, 1);
    });

    this.form.get("constants").setValue(this.selectedConstants);
  }
}
