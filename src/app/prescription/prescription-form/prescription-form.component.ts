import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DrugService } from 'src/app/drug/services/drug.service';
import { IExamination } from 'src/app/medical-folder/examination/models/examination';
import { ExaminationService } from 'src/app/medical-folder/examination/services/examination.service';
import { IPatient } from 'src/app/patient/patient';
import { labelValue } from 'src/app/shared/domain';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IPrescription } from '../models/prescription';
import { IPrescriptionDto } from '../models/prescription-dto';
import { PrescriptionService } from '../services/prescription.service';
import { traitmentDuration } from './prescription';

@Component({selector: 'app-prescription-form',templateUrl: './prescription-form.component.html'})
export class PrescriptionFormComponent implements OnInit {
  private subs = new SubSink();

  @Input() patient: IPatient;

  @Input() examinationId : number;

  @Input() admissionId : number;
  
  @Output() addPrescription = new EventEmitter();
  @Output() updatePrescription = new EventEmitter();

  prescriptionDto : IPrescriptionDto

  public prescriptionForm: FormGroup;

  public invalidFom = false;

  public formSubmitted = false;

  loading: boolean = false;

  prescriptionList: IPrescription[];

  public errorMessage!: string;

  public formsErrors: { [key: string]: string } = {};

  drugsNameAndId: any;

  drugQuantities = [
    { name: 1 , value : 1},
    { name: 2 , value : 2},
    { name: 3 , value : 3},
    { name: 4 , value : 4},
    { name: 5 , value : 5},
    { name: 6 , value : 6},
    { name: 7 , value : 7},
    { name: 8 , value : 8},
    { name: 9 , value : 9},
    { name: 10 , value : 10},
  ];

  traitmentDurations:labelValue[] = [
    {label:traitmentDuration.ONE_DAY, value:traitmentDuration.ONE_DAY},
    {label:traitmentDuration.ONE_YEAR, value:traitmentDuration.ONE_YEAR},
    {label:traitmentDuration.SIX_DAYS, value :traitmentDuration.SIX_DAYS},
    {label:traitmentDuration.ONE_WEEK, value :traitmentDuration.ONE_WEEK},
    {label:traitmentDuration.TWO_DAYS, value :traitmentDuration.TWO_DAYS},
    {label:traitmentDuration.ONE_MONTH, value:traitmentDuration.ONE_MONTH},
    {label:traitmentDuration.TWO_WEEK, value :traitmentDuration.FOUR_DAYS},
    {label:traitmentDuration.FIVE_DAYS, value :traitmentDuration.FIVE_DAYS},
    {label:traitmentDuration.FOUR_DAYS, value :traitmentDuration.FOUR_DAYS},
    {label:traitmentDuration.THREE_DAYS, value :traitmentDuration.THREE_DAYS},
    {label:traitmentDuration.THREE_WEEK, value :traitmentDuration.THREE_WEEK},
  ]
  
  posologies:labelValue[] = [
    { label: 'Un matin, un à midi', value: 'Un matin, un à midi'},
    { label: 'Un matin, un le soir', value: 'Un matin,  un le soir'},
    { label: 'Un à midi , un le soir', value: 'Un à midi , un le soir'},
    { label: 'Un matin, un à midi , un le soir', value: 'Un matin, un à midi , un le soir'}
  ]

  examination: IExamination;

  public finalPrescription : boolean = false;

  constructor(private fb: FormBuilder,private drugService : DrugService,private examinationService : ExaminationService,private notificationService: NotificationService,private prescriptionService : PrescriptionService) {}

  ngOnInit(): void {    
    this.retrieveLastExamination();
    this.findActiveDrugNameAndId();
    this.initForm(); 
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private retrieveLastExamination() {
    this.examinationService.retrieveLastExamination(this.admissionId).subscribe(
        (response : any) => {
           this.examination = response;   
        },
        (errorResponse : HttpErrorResponse) => {
        }
    )
  }

  private updateExamination(){
    this.examinationService.updateExamination(this.examination).subscribe(
      (res : any) => {        
      },
      (errorResponse : HttpErrorResponse) => {
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        );
      }
    )
  }

  isFinalPrescription() : boolean {
    return this.finalPrescription = !this.finalPrescription;
  }

  initForm() {
    this.prescriptionForm = this.fb.group({
      id: new FormControl(null),
      conclusion : new FormControl(""),
      examinationId: new FormControl(this.examinationId),
      patientID : new FormControl(this.patient.id),
      observation: new FormControl(""),
      prescriptionItemsDto: this.fb.array([this.createPresciptionItem()]),
    });
  }

  get conclusion() {return this.prescriptionForm.get('conclusion')};
  get name() {return this.prescriptionForm.get('name')};

  get prescriptionItemsDto(): FormArray {return <FormArray>this.prescriptionForm.get('prescriptionItemsDto') as FormArray};

  createPresciptionItem(): FormGroup {
    return this.fb.group({
      id : [''],
      drug: [''],
      dosage: [''],
      duration: [''],
      quantity : [''],
      collected : [false]
    });
  }

  addPrescriptionDto() {
    this.prescriptionItemsDto.push(this.createPresciptionItem());
  }

  removePrescriptionDto(index: number) {
    this.prescriptionItemsDto.removeAt(index);
  }

  save() {
    this.invalidFom = !this.prescriptionForm.valid;
    this.formSubmitted = true;
    if (this.prescriptionForm.valid) {
      this.prescriptionDto = this.prescriptionForm.value;
      this.prescriptionDto.prescriptionItemsDto =  this.prescriptionForm.get("prescriptionItemsDto").value;       
      this.examination.conclusion  = this.prescriptionForm.get('conclusion').value; 
      // this.updateExamination();
      this.subs.add(
        this.prescriptionService
          .createPrescription(this.prescriptionDto)
          .subscribe(
            (response: any) => {
              this.loading = false;
            if(this.finalPrescription == true) this.updateExamination();
              this.addPrescription.emit();
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

  private findActiveDrugNameAndId(){
    this.drugService.findActivedrugNameAndId().subscribe(
      (response : any) => {
        this.drugsNameAndId = response; 
      },
      (errorResponse : HttpErrorResponse) => {
        this.loading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }
}
