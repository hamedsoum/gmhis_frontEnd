import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DrugService } from 'src/app/drug/services/drug.service';
import { IPatient } from 'src/app/patient/patient';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IPrescription } from '../models/prescription';
import { IPrescriptionDto } from '../models/prescription-dto';
import { PrescriptionService } from '../services/prescription.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent implements OnInit {

  private subs = new SubSink();


  @Input()
  details: boolean;

  @Input()
  patient: IPatient;

  @Input()
  examinationId : number;
  
  prescriptionDto : IPrescriptionDto

  @Output('addPrescription') addPrescription: EventEmitter<any> =
    new EventEmitter();
  @Output('updatePrescription') updatePrescription: EventEmitter<any> =
    new EventEmitter();


  /**
   * form
   */
  public prescriptionForm: FormGroup;

  /**
   * the form valid state
   */
  public invalidFom = false;

  /**
   * check if the form is submitted
   */
  public formSubmitted = false;



  /**
   * handle the spinner
   */
  showloading: boolean = false;

 
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

  traitmentDurations = [
    { name:  'un jour', value :'un jour' },
    { name:  'deux jours', value :'deux jours' },
    { name:  'trois jours', value :'trois jours' },
    { name:  'quatres jours', value :'quatres jours' },
    { name:  'cing jours', value :'cing jours' },
    { name:  'six jours', value :'six jours' },
    { name:  'une semaine', value :'une semaine' },
    { name:  'deux semaines', value :'deux semaines' },
    { name:  'trois semains ', value :'trois semains ' },
    { name:  'un mois ', value :'un mois ' },
    { name:  'un an', value :'un an' }
  ]

  posologies = [
    { name: 'Un matin, un à midi , un le soir', value: 'Un matin, un à midi , un le soir'},
    { name: 'Un matin, un le soir', value: 'Un matin,  un le soir'},
    { name: 'Un matin, un à midi ', value: 'Un matin, un à midi '},
    { name: 'Un à midi , un le soir', value: 'Un à midi , un le soir'},

  ]

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private prescriptionService : PrescriptionService,
    private drugService : DrugService
  ) {}

  // Unsubscribe when the component dies
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.findActiveDrugNameAndId();
    this.initForm(); 
  }

  initForm() {
    this.prescriptionForm = this.fb.group({
      id: new FormControl(null),
      conclusion : new FormControl(null),
      examinationId: new FormControl(this.examinationId),
      patientID : new FormControl(this.patient.id),
      observation: new FormControl(""),
      prescriptionItemsDto: this.fb.array([this.createPresciptionItem()]),
    });
  }
  get conclusion() {
    return this.prescriptionForm.get('conclusion');
  }
  get name() {
    return this.prescriptionForm.get('name');
  }

  get prescriptionItemsDto(): FormArray {
    return <FormArray>this.prescriptionForm.get('prescriptionItemsDto') as FormArray;
  }

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
      // this.showloading = true;
      this.prescriptionDto.prescriptionItemsDto =  this.prescriptionForm.get("prescriptionItemsDto").value;
      this.subs.add(
        this.prescriptionService
          .createPrescription(this.prescriptionDto)
          .subscribe(
            (response: any) => {
              this.showloading = false;
              this.addPrescription.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.showloading = false;
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
        this.showloading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }
}
