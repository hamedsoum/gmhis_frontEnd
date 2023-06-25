import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {Component,ElementRef,EventEmitter,Input,OnInit,Output, ViewChildren} from '@angular/core';
import {FormArray,FormControl,FormControlName,FormGroup,Validators} from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { SubSink } from 'subsink';

import { InsuranceService } from 'src/app/insurance/insurance.service';
import { SubscriberService } from 'src/app/insurance/subscriber.service';
import { InsuredServiceService } from 'src/app/insured/service/insured-service.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { IPatient } from '../patient';
import { PatientService } from '../patient.service';
import { labelValue } from 'src/app/shared/domain';
import { civilitys, typeOfPieces } from 'src/app/shared/gmhis.enum';
import { INameAndId as NameAndId } from 'src/app/shared/models/name-and-id';

@Component({selector: 'app-patient-formm',templateUrl: './patient-formm.component.html',styleUrls: ['./patient-formm.component.scss']})
export class PatientFormmComponent implements OnInit {
  private readonly FORM_FIELDS_TO_CLEAR_VALIDATOR: string[] = ['idcardType','idCardNumber', 'cellPhone1','profession', 'email','maritalStatus','numberOfChildren', 'civility'];

  private subs = new SubSink();

  AddIcon = faTrash;
  
  @Input() details: boolean;

  @Input() patient: IPatient;

  @Input() disabledAllFormFiled : boolean ;

  @Output() addPatient = new EventEmitter();
  @Output() updatePatient = new EventEmitter();
  
  loading: boolean = false

  public invalidFom = false;

  public formGroup: FormGroup;

  public formSubmitted = false;

  public invalidInsuranceFom = false;


  civilitys:labelValue[] = [
    { label: 'Madame', value: civilitys.MADAM },
    { label: 'Monsieur', value: civilitys.MISTER},
    { label: 'Mademoiselle', value: civilitys.MISS },
  ];

  typePieces:labelValue[]  = [
    { label: 'Passport', value: typeOfPieces.PASSPORT },
    { label: 'Permis de conduire', value: typeOfPieces.DRIVER_LICENCE },
    { label: 'Attestation', value: typeOfPieces.CERTIFICATE_OF_IDENTITY },
    {label: 'Carte Nationale Identité', value: typeOfPieces.NATIONAL_IDENTITY_CARD },
  ];

  coverageRates = [
    { id: 10, value: '10' },
    { id: 20, value: '20' },
    { id: 30, value: '30' },
    { id: 40, value: '40' },
    { id: 50, value: '50' },
    { id: 60, value: '60' },
    { id: 70, value: '70' },
    { id: 80, value: '80' },
    { id: 90, value: '90' },
    { id: 100, value: '100' },

  ];

  statutMatrimonials = [
    {id: 'V', value: 'Veuve' },
    {id: 'M', value: 'Marié(e)'},
    {id: 'D', value: 'Divorcé(e)'},
    {id: 'C', value: 'Celibataire'},
  ];

  public insuranceForm!: FormGroup;
  public insuranceFormGroup: any = new FormArray([]);

  insurances: any;
  insurancesSubscribers: any;

  cities: NameAndId[];

  countries:NameAndId[];

  patientInfo: boolean = true;

  @ViewChildren(FormControlName, { read: ElementRef })
  inputElements!: ElementRef[];

  public errorMessage!: string;

  public formsErrors: { [key: string]: string } = {};

  constructor(private patientService: PatientService,private notificationService: NotificationService,private insuranceService: InsuranceService,
    private insuranceSubscriberService: SubscriberService,private insuredServiceService: InsuredServiceService,private datePipe : DatePipe) {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    
    this.buildFields();
    if (this.patient) {      
      this.patientService.getPatientDetail(this.patient.id).subscribe((response: IPatient) => {
          this.formGroup.patchValue(response);
          this.onGetCityBycountry(response['country']['id']);
          this.formGroup.get('cityId').setValue(response['city']['id']);
          this.formGroup.get('country').setValue(response['country']['id']);

          let date = this.datePipe.transform(response.birthDate, "yyyy-MM-dd")          
          this.formGroup.get('birthDate').setValue(date);
         
          this.insuredServiceService.getInsuredByPatientId(response.id).subscribe((res: any) => {              
              res.forEach((el, index) => {
                this.addInsurance();
                this.insuranceFormGroup.controls[index].get('id').setValue(el.id);
                this.insuranceFormGroup.controls[index].get('society').setValue(el.society);
                this.insuranceFormGroup.controls[index].get('patient').setValue(el.patientId);
                this.insuranceFormGroup.controls[index].get('coverage').setValue(el.coverage);
                this.insuranceFormGroup.controls[index].get('cardNumber').setValue(el.cardNumber);
                this.insuranceFormGroup.controls[index].get('insurance').setValue(el.insuranceId);
                this.insuranceFormGroup.controls[index].get('insuranceSuscriber').setValue(el.subscriberId);
              });
            });
            if (this.disabledAllFormFiled) this.formGroup.disable()
        });
    }else{
      this.addInsurance();
    this.insuranceFormGroup.controls[0].get('insurance').setValue(3);
    this.insuranceFormGroup.controls[0].get('society').setValue("CNAM");
    this.insuranceFormGroup.controls[0].get('insuranceSuscriber').setValue(3);
    }

    this.onGetCountry();
    this.initInsuranceForm();
    this.getInsuranceSimpleList();
    this.getInsuranceSubscriberSimpleList();
  }

  public save(): void {
    this.invalidFom = !this.formGroup.valid;
    for (let index = 0; index < this.insuranceFormGroup.length; index++) {
      const element = this.insuranceFormGroup.controls[index];
      this.invalidInsuranceFom = element.invalid;
    }
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      this.invalidFom = !this.insuranceFormGroup.valid;
      if (this.insuranceFormGroup.valid) {
        this.loading = true;
      this.patient = this.formGroup.value;            
      this.infoFormString();
      this.patient.insurances = this.insuranceFormGroup.value;
      if (this.patient.id) {
        this.subs.add(
          this.patientService.updatePatient(this.patient).subscribe(
            (response: IPatient) => {
              this.loading = false;
              this.updatePatient.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.loading = false;
              this.notificationService.notify(
                NotificationType.ERROR,
                errorResponse.error.message
              );
            }
          )
        );
      } else {
        this.subs.add(
          this.patientService.createPatient(this.patient).subscribe(
            (response: IPatient) => {
              this.loading = false;
              this.addPatient.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.loading = false;
              this.notificationService.notify(
                NotificationType.ERROR,
                errorResponse.error.message
              );
            }
          )
        );
      }
      }
      
    }
  }

  public isAnAdult(): boolean {
    let patientAge = this.ageFromDateOfBirthday(this.formGroup.get('birthDate').value);    
    return patientAge >= 16;
  }
 
 public onBirthDateChange(): void {    
      this.FORM_FIELDS_TO_CLEAR_VALIDATOR.forEach(el => {
        if (!this.isAnAdult()) {
          this.formGroup.get(el).clearValidators();
      this.formGroup.get(el).updateValueAndValidity();
      this.formGroup.get(el).disable();
        }else{
          this.formGroup.get(el).setValidators(Validators.required);
          this.formGroup.get(el).updateValueAndValidity();
          this.formGroup.get(el).enable();
        }
      })   
  }

  public onRemoveInsurance(index : number): void {
    this.removeInsurance(index)
  }

  public onAddInsurance():void{
    this.addInsurance();
  }

  public showInsuranceView(): void {
    this.patientInfo = !this.patientInfo;
  }

  private buildFields(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      solde : new FormControl(0),
      email: new FormControl(null),
      cityId: new FormControl(null),
      height: new FormControl(null),
      weight: new FormControl(null),
      country: new FormControl(null),
      insurances: new FormControl([]),
      idcardType: new FormControl(''),
      idCardNumber: new FormControl(''),
      maritalStatus: new FormControl(''),
      motherName : new FormControl(null),
      emergencyContact: new FormControl(''),
      numberOfChildren: new FormControl('0'),
      motherLocality : new FormControl(null),
      correspondantCellPhone: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      cellPhone1: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      civility: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required]),
      correspondant: new FormControl('', [Validators.required]),  
    });
  }

  get email() {return this.formGroup.get('email')}
  get gender() {return this.formGroup.get('gender')}
  get cityId() {return this.formGroup.get('cityId')}
  get country() {return this.formGroup.get('country')}
  get address() {return this.formGroup.get('address')}
  get lastName() {return this.formGroup.get('lastName')}
  get civility() {return this.formGroup.get('civility')}
  get birthDate() {return this.formGroup.get('birthDate')}
  get firstName() {return this.formGroup.get('firstName')}
  get cellPhone1() {return this.formGroup.get('cellPhone1')}
  get idcardType() {return this.formGroup.get('idcardType')}
  get cnamNumber() {return this.formGroup.get('cnamNumber')}
  get profession() {return this.formGroup.get('profession')}
  get idCardNumber() {return this.formGroup.get('idCardNumber')}
  get correspondant() {return this.formGroup.get('correspondant')}
  get maritalStatus() {return this.formGroup.get('maritalStatus')}
  get emergencyContact() {return this.formGroup.get('emergencyContact')}
  get numberOfChildren() {return this.formGroup.get('numberOfChildren')}
  get patientExternalId() {return this.formGroup.get('patientExternalId')}
  get correspondantCellPhone() {return this.formGroup.get('correspondantCellPhone');}

  private addInsurance(): void {
    this.initInsuranceForm();
    this.insuranceFormGroup.push(this.insuranceForm);
  }

  private removeInsurance(index: any): void {
    this.insuranceFormGroup.removeAt(index);
  }

  private ageFromDateOfBirthday(dateOfBirth: any): number {
    return moment().diff(dateOfBirth, 'years');
  }

  private initInsuranceForm():void {
    this.insuranceForm = new FormGroup({
      id: new FormControl(null),
      society : new FormControl(''),
      active: new FormControl(true),
      patient: new FormControl(null),
      cardNumber: new FormControl('', [Validators.required]),
      coverage: new FormControl(null, [Validators.required]),
      insurance: new FormControl(null, [Validators.required]),
      insuranceSuscriber: new FormControl(null, [Validators.required]),
    });
  }

  private infoFormString(): void {
     this.patient.cellPhone1 = this.formGroup.get('cellPhone1').value.toString();
    this.patient.emergencyContact = this.formGroup.get('emergencyContact').value.toString();
    this.patient.numberOfChildren = this.formGroup.get('numberOfChildren').value.toString();
    this.patient.correspondantCellPhone = this.formGroup.get('correspondantCellPhone').value.toString();
  }

  private onGetCountry(): void {
    this.patientService.getCountry().subscribe((res) => {this.countries = res;});
}

  private onGetCityBycountry(idCountry: number): void {
    this.patientService.getCityByCountry(idCountry).subscribe((res) => {this.cities = res;});
  }

  private getInsuranceSimpleList(): void {
    this.subs.add(
      this.insuranceService.getAllInsuranceActive().subscribe(
        (response: any) => {
          this.insurances = response;
        },
        (errorResponse: HttpErrorResponse) => {
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error.message
          );
        }
      )
    );
  }

  private getInsuranceSubscriberSimpleList(): void {
    this.subs.add(
      this.insuranceSubscriberService
        .getAllInsuranceSubscriberActive()
        .subscribe(
          (response: any) => {
            this.insurancesSubscribers = response;
          },
          (errorResponse: HttpErrorResponse) => {
            this.notificationService.notify(
              NotificationType.ERROR,
              errorResponse.error.message
            );
          }
        )
    );
  }

}
