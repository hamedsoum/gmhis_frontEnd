import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IExamination } from 'src/app/medical-folder/examination/models/examination';
import { ExaminationService } from 'src/app/medical-folder/examination/services/examination.service';
import { GmhisUtils } from 'src/app/shared/base/utils';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { GMHISHospitalizationRequestCreate, GMHISHospitalizationRequestPartial } from '../../api/domain/request/gmhis-hospitalization-request';
import { GmhisHospitalizationRequestService } from '../../api/service/request/gmhis-hospitalization.service';

@Component({selector: 'gmhis-hospitalization-request-create-update',templateUrl: './gmhis-hospitalization-request-create-update.component.html'})
export class GMHISHospitalizationRequestCreateUpdateComponent implements OnInit {

  @Input() styleClass?: string

  @Input() patientID: number;

  @Input() admissionID: number;

  @Input() hospitalizationRequest: GMHISHospitalizationRequestPartial;
  
  @Output() saveEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  
  loading: boolean = false;


  public fieldGroup: FormGroup;

  public formSubmitted = false;

  hospitalizationCreate: GMHISHospitalizationRequestCreate;

  subscription: Subscription = new Subscription();
  
  constructor(
    private hospitalizationService: GmhisHospitalizationRequestService,
    private notificationService: NotificationService,
    private examinationService: ExaminationService
      ){}


  ngOnInit(): void {
    this.buildFields(); 
    this.lasExamination();   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 private buildFields(): void {
      this.fieldGroup = new FormGroup({
          startDate: new FormControl(null,Validators.required),
          reason: new FormControl(null,Validators.required),
          patientID: new FormControl(this.patientID),
          examinationID: new FormControl(),
          admissionID: new FormControl(this.admissionID),
          dayNumber: new FormControl(null,Validators.required)
      })
    }

   public  save(): void {
      if (!this.fieldGroup.valid) return;
      this.formSubmitted = true;
      this.loading = true;
      this.hospitalizationCreate = this.fieldGroup.value;
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

  private lasExamination(): void {
    this.subscription.add(
      this.examinationService.retrieveLastExamination(this.admissionID).subscribe(
          (response: IExamination) => {
            this.fieldGroup.get('examinationID').setValue(response.id);
            this.fieldGroup.get('reason').setValue(response.conclusion);
          },
          (err: HttpErrorResponse) => {}
      )
    )
  }
}
