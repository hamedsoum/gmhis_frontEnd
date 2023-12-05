import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PatientService } from 'src/app/patient/patient.service';
import { PracticianService } from 'src/app/practician/practician.service';
import { GmhisUtils } from 'src/app/shared/base/utils';
import { GMHISKeyValue } from 'src/app/shared/models/name-and-id';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { GMHISHospitalizationCreate, GMHISHospitalizationPartial } from '../api/domain/gmhis-hospitalization';
import { GMHISHospitalizationRequestPartial } from '../api/domain/request/gmhis-hospitalization-request';
import { GmhisHospitalizationService } from '../api/service/gmhis.hospitalization.service';

@Component({selector: 'gmhis-hospitalization-create-update',templateUrl: './gmhis-hospitalization-create-update.component.html'})
export class GMHISHospitalizationCreateUpdateComponent implements OnInit {

  @Input() styleClass?: string

  @Input() patientID: number;

  @Input() practicianID: number;

  @Input() hospitalization?: GMHISHospitalizationPartial;

  @Input() hospitalizationRequest?: GMHISHospitalizationRequestPartial;
  
  @Output() saveEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  
  loading: boolean = false;

  subscriptions: Subscription = new Subscription();

  public fieldGroup: FormGroup;

  public formSubmitted = false;

  hospitalizationCreate: GMHISHospitalizationCreate;

  subscription: Subscription = new Subscription();
  
  bedrooms: GMHISKeyValue[] = [
    {key: 'CHAMBRE 1', value: 'CHAMBRE 1'},
    {key: 'CHAMBRE 2', value: 'CHAMBRE 2'},
    {key: 'CHAMBRE 3', value: 'CHAMBRE 3'},
    {key: 'CHAMBRE 4', value: 'CHAMBRE 4'},
    {key: 'CHAMBRE 5', value: 'CHAMBRE 5'},
    {key: 'CHAMBRE 6', value: 'CHAMBRE 6'},
    {key: 'CHAMBRE 7', value: 'CHAMBRE 7'},
]
  practicians: any[];
  patients: any[];

  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  }

  constructor(
    private hospitalizationService: GmhisHospitalizationService,
    private notificationService: NotificationService,
    private practicianService: PracticianService,
    private patientService: PatientService
      ){}

  ngOnInit(): void {    
    if(!GmhisUtils.isNull(this.hospitalizationRequest)){
       this.practicianID = this.hospitalizationRequest.praticianID;
       this.patientID = this.hospitalizationRequest.patientID;
    }
    this.initialize();
    this.fieldGroup.get('patientID').disable();
    this.fieldGroup.get('practicianID').disable();
   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 private buildFields(): void {
      this.fieldGroup = new FormGroup({
          start: new FormControl(null,Validators.required),
          reason: new FormControl(this.hospitalizationRequest.reason,Validators.required),
          bedroom: new FormControl(null,Validators.required),
          protocole: new FormControl(this.hospitalizationRequest.protocole,Validators.required),
          patientID: new FormControl(this.patientID,Validators.required),
          practicianID: new FormControl(this.practicianID,Validators.required),
      })
    }
  
    get startField() {return this.fieldGroup.get('start')};
    get reasonField() {return this.fieldGroup.get('reason')};
    get bedroomField() {return this.fieldGroup.get('bedroom')};
    get protocoleField() {return this.fieldGroup.get('protocole')};
    get patientField() {return this.fieldGroup.get('patientID')};
    get practicianField() {return this.fieldGroup.get('praticianID')};


   public  save(): void {
      if (!this.fieldGroup.valid) return;
      this.formSubmitted = true;
      this.loading = true;
      this.hospitalizationCreate = this.fieldGroup.getRawValue();
      console.log(this.hospitalizationCreate);
      
      if (this.isCreated()) this.create();
      else this.update(); 
  }

  private update(): void {
    this.subscription.add(
      this.hospitalizationService.update(this.hospitalization.id, this.hospitalizationCreate)
      .pipe(finalize(()=> this.loading = false))
      .subscribe(
        (response : GMHISHospitalizationPartial) => {
            this.updateEvent.emit();
        },
        (errorResponse : HttpErrorResponse) => {
            this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
        }
      )
  )
  }

  private create(): void {    
    this.subscription.add(
      this.hospitalizationService.create(this.hospitalizationCreate)
      .pipe(finalize(()=> this.loading = false))
      .subscribe(
        (response: GMHISHospitalizationPartial) => {
          this.saveEvent.emit();
        },
        (errorResponse: HttpErrorResponse) => {
          this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);
        }
      )
    );
  }

  private isCreated(): boolean {
   return GmhisUtils.isNull(this.hospitalization);
  }

  private findpracticians(){
    this.subscriptions.add(
    this.practicianService.findPracticianSimpleList().subscribe((response: any[]) => this.practicians = response)
    )
}

private findPatientPatients(){
  this.subscriptions.add(
      this.patientService.findPatient().subscribe((response: any[]) =>{
          this.patients = response;                
      }  )
)
}

private initialize(): void {
  this.buildFields();
  this.findpracticians();
  this.findPatientPatients();
}

}
