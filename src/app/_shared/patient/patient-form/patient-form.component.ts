import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { PatientService } from "../../../_services/patient.service";
// import { ValidateDate } from "./../../../_utility/CustomValidators/date.validator";
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { CountryService } from "../../../_services/country.service";
import { InsuranceService } from "../../../_services/insurance.service";
import { InsuranceSubscriberService } from "./../../../_services/insurance-subscriber.service";
import { InsuredService } from "./../../../_services/insured.service";
import { CityService } from "../../../_services/city.service";
import { Patient } from 'src/app/_models/patient.model';
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { Insured } from './../../../_models/insured.model'
import { environment } from 'src/environments/environment';
declare let $: any;

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider
})

export class PatientFormComponent implements OnInit {

  /**
   *  form Group
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
   * Define gender options
   */
  gender = [
    { id: 'F', value: 'Feminin' },
    { id: 'M', value: 'Masculin' }
  ];

  /**
   * Define civility options
   */
  civilities = [
    { id: 'Mme', value: 'Mme' },
    { id: 'Mlle', value: 'Mlle' },
    { id: 'Mr.', value: 'Mr.' },
    { id: 'Enfant', value: 'Enfant' },
    { id: 'Bébé', value: 'Bébé' }
  ];

  /**
   * Define marital status options
   */
  maritalStatus = [
    { id: 'Celibataire', value: 'Celibataire' },
    { id: 'Marié(e)', value: 'Marié(e)' },
    { id: 'Divorcée', value: 'Divorcée' },
    { id: 'Veuf(ve)', value: 'Veuf(ve)' },
  ];

  /**
  * Define identity carte types options
  */
  idCardTypes = [
    { id: 'Carte d\'identité', value: 'Carte d\'identité' },
    { id: 'Passport', value: 'Passport' },
    { id: 'Attestation d\'identité', value: 'Attestation d\'identité' },
    { id: 'Carte consulaire', value: 'Carte consulaire' },
    { id: 'Autre', value: 'Autre' },
  ];

  /**
   * Define city options
   */
  cities: object;

  /**
  * Define country options
  */
  countries: object;

  /**
   * Define gurantor options
   */
  subscribers: object;

  /**
   * Define insurance options
   */
  insurances: object;

  /** 
   * patient id
   */
  @Input()
  id: number;

  /**
   * patient model
   */
  patient: object;

  /**
   * insured model
   */
  insured: object;

  isPrincipalInsuredOptions = [
    { id: 'Y', value: 'Oui' },
    { id: 'N', value: 'Non' }
  ]

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * child component output
   */
  @Output()
  patientEmitter: EventEmitter<any> = new EventEmitter();

  /**
    * date picker model
    */
  datePicker: NgbDateStruct;

  /**
   * insurances form array
   */
  insuranceFormGroup = new FormArray([]);

  /**
   *  dynamic form inputs
   */
  insuranceInputs = [];

  /**
   * action to do for display error msg and redirect
   * @param msg 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };

  constructor(
    private patientService: PatientService,
    private alertService: AlertService,
    private router: Router,
    private countryService: CountryService,
    private insuranceService: InsuranceService,
    private insuranceSubscriberSservice: InsuranceSubscriberService,
    private insuredService: InsuredService,
    private cityService: CityService,
    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>

  ) { }


  ngOnInit(): void {

    this.initForm();
    this.countryService.getIdAndName().subscribe(result => { this.countries = result; });
    this.insuranceService.getIdAndName().subscribe(result => { this.insurances = result; });
    this.insuranceSubscriberSservice.getIdAndName().subscribe(result => { this.subscribers = result; });
    this.getPatient();
  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      patientExternalId: new FormControl(''),
      firstName: new FormControl('', ),
      lastName: new FormControl('', ),
      maidenName: new FormControl(''),
      birthDate: new FormControl('', []),
      deathDate: new FormControl(''),
      gender: new FormControl(null, ),
      civility: new FormControl(null, ),
      profession: new FormControl('', ),
      maritalStatus: new FormControl(null),
      numberOfChildren: new FormControl(0),
      idCardNumber: new FormControl({ value: '', disabled: true }),
      idcardType: new FormControl(null),
      insurances: new FormControl([]),
      cnamNumber: new FormControl(''),
      address: new FormControl(''),
      country: new FormControl(null),
      cityId: new FormControl(null),
      cellPhone1: new FormControl('', ),
      cellPhone2: new FormControl(''),
      email: new FormControl('', Validators.email),
      correspondant: new FormControl(''),
      correspondantCellPhone: new FormControl(''),
      emergencyContact1: new FormControl(''),
      emergencyContact2: new FormControl(''),
      motherFirstName: new FormControl('', ),
      motherLastName: new FormControl('', ),
      age: new FormControl({ value: '', disabled: true }),
      motherProfession: new FormControl(''),


    });

   
  }

  /**
   * get patient and set register form inputs values when patient updating
   */
  getPatient() {

    if (this.id) {

      this.patientService.findById(this.id).subscribe(
        patient => {
          if (patient) {

            this.form.patchValue(patient);
            if(patient.idCardNumber != null) this.form.get('idCardNumber').enable();
            this.form.get('birthDate').setValue(dateOutputFormat(patient.birthDate));
            this.form.get('address').setValue((patient.patientAddresses.find(e => e.currentAddress === 'Y'))['address']);
            if (patient.country) {
              this.form.get('country').setValue(patient.country.id);
              this.cityService.findByCountry(patient.country.id).subscribe(result => { this.cities = result; });
              this.form.get('cityId').setValue(patient.city.id);
            }

            //set insurances
            this.insuredService.findByPatientId(this.id).subscribe(result => {

              for (let index = 0; index < result.length; index++) {
                this.addInsurance();
                this.insuranceFormGroup.controls[index].get('cardNumber').setValue(result[index]['cardNumber'])
                this.insuranceFormGroup.controls[index].get('coverage').setValue(result[index]['coverage']);
                this.insuranceFormGroup.controls[index].get('id').setValue(result[index]['id']);
                this.insuranceFormGroup.controls[index].get('insurance').setValue(result[index]['insuranceId'])
                this.insuranceFormGroup.controls[index].get('insuranceSuscriber').setValue(result[index]['subscriberId']);
                this.insuranceFormGroup.controls[index].get('isPrincipalInsured').setValue(result[index]['isPrincipalInsured']);
                this.insuranceFormGroup.controls[index].get('principalInsuredAffiliation').setValue(result[index]['principalInsuredAffiliation']);
                this.insuranceFormGroup.controls[index].get('principalInsuredContact').setValue(result[index]['principalInsuredContact'])
                this.insuranceFormGroup.controls[index].get('principalInsuredName').setValue(result[index]['principalInsuredName'])
              }
            })


          } else {
            this.errorAction("Modification impossible car le patient n'existe pas", '/patient/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/patient/list');

        })

    }
  }

  /**
   * fonction called at the form submission action whenever to add or update the patient
   */
  save() {
    // reset alerts on submit
    this.alertService.clear();

    this.invalidFormControls = invalidformControls(this.form);
    let data = this.form.getRawValue();
    console.log(data);
    
    let insuredData = this.insuranceFormGroup.getRawValue();
    let validInsurance = true;

    if (insuredData.length > 0) {
      for (let index = 0; index < insuredData.length; index++) {
         //enable to get it value
        this.insuranceFormGroup.controls[index].get("principalInsuredName").enable();
        const control = this.insuranceFormGroup.controls[index];
        if (control.status == "INVALID") validInsurance = false;
      }
    }

    data.insurances = insuredData

    if (this.form.valid) {

      if(!data.idCardNumber && !data.cnamNumber ) {
        this.alertService.error("Vous devez fournir et N° de la pièce d'identité et/ou de la carte CNAM!");
        return null;
      }
      if (!validInsurance) {
        this.alertService.error("Veillez renseigner correctement les informations sur l'(les) assurance(s)");
        return null;
      } else {
        // this.patient.picture = put the link of the picture ;
        this.patientEmitter.emit({ patient: data, action: this.formAction });
        if (this.formAction == "save_and_new") this.initForm();
      }

    } else {
      this.alertService.error('Formulaire non valid')
    }
  }

  /**
   *  compute the age according to the input date of birth
   */
  calculAge() {
    if (this.form.get('birthDate').valid) {

      let birthDay = dateInputFormat(this.form.get('birthDate').value);
      let currentDate = new Date();

      if (birthDay.getFullYear() <= currentDate.getFullYear()) {
        let month = currentDate.getMonth() - birthDay.getMonth();
        let year = currentDate.getFullYear() - birthDay.getFullYear();
        return year + ' ans ' + month + " mois";
      } else {
        return "Age Invalid";
      }
    }

  }

  /**
   * fetch cities according to the selected country
   * @param selectedOption 
   */
  countryChange() {
    let cityControl = this.form.get('cityId');
    cityControl.reset();
    let countryId = this.form.get('country').value;
    this.cityService.findByCountry(countryId).subscribe(cities => {
      this.cities = cities;
      cityControl.setValue(cities)
    });
  }

  onIdCardTypeChange() {
    let type = this.form.get('idcardType').value;
    
  if(type != null) {
    this.form.get('idCardNumber').enable();  
  } else {
    this.form.get('idCardNumber').disable();
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
   * create dynamic insured inputs
   */
  addInsurance() {
    const group = new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      coverage: new FormControl('', [Validators.required, Validators.pattern(/\b^(?!(?:\d{-1,2}|0)$)(0*(?:[1-9][0-9]?|100))\b/)]),
      id: new FormControl(0),
      insurance: new FormControl(null, Validators.required),
      insuranceSuscriber: new FormControl(null, Validators.required),
      isPrincipalInsured: new FormControl(null, Validators.required),
      principalInsuredAffiliation: new FormControl(''),
      principalInsuredContact: new FormControl('', Validators.required),
      principalInsuredName: new FormControl('', Validators.required)
    });

    this.insuranceInputs.push('selectedInsurance' + this.insuranceFormGroup.length);
    this.insuranceFormGroup.push(group);
  }

  /**
   * remove the correponding row from the insuranceFormGroup
   * @param row remove an insurance row from the DOM
   */
  deleteInsuranceRow(row) {
    if (this.insuranceFormGroup.controls[row].get('id').value != 0) {
      this.alertService.error('Desolé une fois ajoutée, un assuré ne peut etre supprimé . Vous pouvez néanmoins le modifie!')
    } else {

      this.insuranceFormGroup.removeAt(row);
    }
  }

  /**
   * set the principal insured name and contact if neccessary
   * @param row 
   */
  isPrincipalInsuredChange(row){
    if(this.insuranceFormGroup.controls[row].get('isPrincipalInsured').value == 'Y') {
      let insuredName = this.form.get('firstName').value + ""+ this.form.get('maidenName').value +" "+ this.form.get('lastName').value;
      let insuredContact = this.form.get('cellPhone1').value;
      this.insuranceFormGroup.controls[row].get('principalInsuredName').setValue(insuredName);
      this.insuranceFormGroup.controls[row].get('principalInsuredContact').setValue(insuredContact);
      this.insuranceFormGroup.controls[row].get('principalInsuredName').disable();
      this.insuranceFormGroup.controls[row].get('principalInsuredAffiliation').disable();

    }
    
  }

  /**
  * action to Do when  ckick on cancel button
  */
  cancelAction() {
    this.errorAction('Action annulée', '/patient/list');
  }
}
