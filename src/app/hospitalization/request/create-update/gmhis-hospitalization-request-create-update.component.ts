import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GMHISInsuredService } from 'src/app/insured/service/insured-service.service';
import { IExamination } from 'src/app/medical-folder/examination/models/examination';
import { GmhisUtils } from 'src/app/shared/base/utils';
import { GMHISKeyValue } from 'src/app/shared/models/name-and-id';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { GMHIS_APENDICENTOMIE_PROTOCOLE_DATA } from '../../api/constant/static-data.constant';
import { GMHISHospitalizationRequestCreate, GMHISHospitalizationRequestPartial } from '../../api/domain/request/gmhis-hospitalization-request';
import { GmhisHospitalizationRequestService } from '../../api/service/request/gmhis-hospitalization.service';


@Component({selector: 'gmhis-hospitalization-request-create-update',templateUrl: './gmhis-hospitalization-request-create-update.component.html'})
export class GMHISHospitalizationRequestCreateUpdateComponent implements OnInit {

  @Input() styleClass?: string

  @Input() patientID: number;

  @Input() admissionID: number;

  @Input() examination: IExamination;

  @Input() hospitalizationRequest: GMHISHospitalizationRequestPartial;
  
  @Output() saveEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  
  loading: boolean = false;


  public fieldGroup: FormGroup;

  public formSubmitted = false;

  hospitalizationCreate: GMHISHospitalizationRequestCreate;

  subscription: Subscription = new Subscription();
  patientInsureds: any[];
  

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

  hospitalizationTypes: any[] = [
    {key: 1, value: 'Hospitalisation simple', data: GMHIS_APENDICENTOMIE_PROTOCOLE_DATA},
    {key: 2, value: 'Apendicentomie', data: GMHIS_APENDICENTOMIE_PROTOCOLE_DATA},
  ]

  constructor(
    private hospitalizationService: GmhisHospitalizationRequestService,
    private notificationService: NotificationService,
    private insuredService: GMHISInsuredService
      ){}


  ngOnInit(): void {
    this.findInsurances(this.patientID);
    this.buildFields();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

public onHospitalizationTypeChange(type: any) {
  this.fieldGroup.get('protocole').setValue(type.data);
}

 private buildFields(): void {
      this.fieldGroup = new FormGroup({
          startDate: new FormControl(null,Validators.required),
          reason: new FormControl(this.examination.conclusion,Validators.required),
          protocole: new FormControl(null,Validators.required),
          patientID: new FormControl(this.patientID),
          examinationID: new FormControl(this.examination.id),
          admissionID: new FormControl(this.admissionID),
          insuredID: new FormControl(null,Validators.required),
          dayNumber: new FormControl(null,Validators.required)
      })
    }

    get startDateField() {return this.fieldGroup.get('startDate')};
    get reasonField() {return this.fieldGroup.get('reason')};
    get protocoleField() {return this.fieldGroup.get('protocole')};
    get insuranceField() {return this.fieldGroup.get('insuredID')};
    get dayNumberField() {return this.fieldGroup.get('dayNumber')};


    public onInsuredChange(insured: any): void {
        this.fieldGroup.get('insuredID').setValue(insured.id)
    }


   public  save(): void {     
      if (!this.fieldGroup.valid) return;
      this.formSubmitted = true;
      this.loading = true;
      this.hospitalizationCreate = this.fieldGroup.value;
      console.log(this.hospitalizationCreate);
      if (this.isCreated()) this.create();
      else this.update(); 
  }

  private update(): void {
    this.subscription.add(
      this.hospitalizationService.update(this.hospitalizationRequest.id, this.hospitalizationCreate)
      .pipe(finalize(()=> this.loading = false))
      .subscribe(
        (response : GMHISHospitalizationRequestPartial) => {
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
        (response: GMHISHospitalizationRequestPartial) => {
          this.saveEvent.emit();
        },
        (errorResponse: HttpErrorResponse) => {
          this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);
        }
      )
    );
  }

  private isCreated(): boolean {
   return GmhisUtils.isNull(this.hospitalizationRequest);
  }

  findInsurances(patientId: number): void {
    this.insuredService.getInsuredByPatientId(patientId).subscribe( 
      (response) => {
        this.patientInsureds = response;
        console.log(this.patientInsureds);
        
      },
      (error) => {}
      )
  }
}
