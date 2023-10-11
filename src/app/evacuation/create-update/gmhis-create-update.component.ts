import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Admission } from 'src/app/admission/model/admission';
import { FaciityService } from 'src/app/facility/faciity-service.service';
import { Facility } from 'src/app/facility/models/facility';
import { PracticianService } from 'src/app/practician/practician.service';
import { GMHISNameAndID } from 'src/app/shared/models/name-and-id';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import {  GMHISEvacuationCreateUpdate, GMHISEvacuationPartial } from '../api/domain/evacuation.domain';
import { GmhisEvacuationService } from '../api/service/gmhis.evacuation.service';

@Component({ selector: 'gmhis-evacuation-create-update',templateUrl: './gmhis-create-update.component.html'})
export class GMHISCreateUpdateComponent implements OnInit, OnDestroy {

  @Input() styleClass?: string;

  @Input() evacuation?: GMHISEvacuationPartial;
  @Input() evacuationID?: string;

  @Input() patientID?: number;

  @Input() practicianID?: number;

  @Input() serviceID?: number;

  @Input() facilityID?: string;

  @Input() admission?: Admission;

  @Output() saveEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  
  loading: boolean = false;

  invalidForm: boolean = false;

  fieldGroup: FormGroup;

  formSubmitted = false;

  facilities: Facility[];
  
  services: GMHISNameAndID[];

  subscriptions: Subscription = new Subscription();
  notificationService: any;
  
  constructor(
    private evacuationService: GmhisEvacuationService,
    private facilityService: FaciityService,
    private userService: UserService,
    private practicianservice: PracticianService
){}
  
  ngOnInit(): void {
    this.practician();
    this.facilityID = this.user().facility.id;

    if (this.admission) {
        this.patientID = this.admission.patientId;
        this.serviceID = this.admission.serviceID;
    }

    if(this.evacuation) this.fieldGroup.get('practicianID').setValue(this.practicianID); 
    
    if (!!this.evacuationID ) this.retrieveEvacuation();
    this.findFacilities();
      this.buildFields();      
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private user(): User {
    return this.userService.getUserFromLocalCache();
  }

  private practician():any {
    this.subscriptions.add(
        this.practicianservice.getPracticianDetaisByUserID(this.user().id).subscribe(
          (response : any) => {
            this.practicianID = response.id;
            this.fieldGroup.get('practicianID').setValue(this.practicianID);           
          }
        )
    )
  }

  private findFacilities(): void {
    this.subscriptions.add(
      this.facilityService.findActiveFacilityNameAndId().subscribe(
        (res : any) => { 
          this.facilities = res;          
        }
      )
    )
  }

  private buildFields(): void {    
    this.fieldGroup = new FormGroup({
      evacuationFacilityID: new FormControl(this.facilityID),
      startDate: new FormControl(null),
      serviceID: new FormControl(this.serviceID),
      practicianID: new FormControl(this.evacuation?.practicianID),
      patientID: new FormControl(this.patientID),
      evacuationReason: new FormControl(this.evacuation?.evacuationReason,Validators.required),
      clinicalInformation: new FormControl(this.evacuation?.clinicalInformation),
      treatmentReceived: new FormControl(this.evacuation?.treatmentReceived,Validators.required),
      receptionFacilityID: new FormControl(this.evacuation?.receptionFacilityID,Validators.required),
    })

  }

  get evacuationFacilityID() {return this.fieldGroup.get('evacuationFacilityID')}
  get startDate() {return this.fieldGroup.get('startDate')}
  get evacuationReason() {return this.fieldGroup.get('evacuationReason')}
  get treatmentReceived() {return this.fieldGroup.get('treatmentReceived')}  
  get receptionFacilityID() {return this.fieldGroup.get('receptionFacilityID')}

  public createUpdate(): void {

    if (this.isUpdate()) this.update();
    else this.create();
  }

  public update():void {
    const formData = this.buildCreateUpdateData(this.fieldGroup.value);
    
      if (this.formIsValid()) {
        this.subscriptions.add(
          this.evacuationService.update(this.evacuation.id, formData)  .pipe(finalize(()=> this.loading = false))
          .subscribe(
            (response : GMHISEvacuationPartial) => {
                this.updateEvent.emit();
            },
            (errorResponse : HttpErrorResponse) => {
                this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
            }
          )
        )
      }
     
  }

  public create():void {
      this.formSubmitted = true;
      const formData = this.buildCreateUpdateData(this.fieldGroup.value);

      if (this.formIsValid()) {
        this.loading = true;
        this.subscriptions.add(
          this.evacuationService.create(formData)
          .pipe(finalize(()=> {this.loading = false}))
          .subscribe(
           (evacuation: GMHISEvacuationPartial) => {
              this.saveEvent.emit();              
            },
            (errorResponse: HttpErrorResponse) =>{
              this.loading = false;
              this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
            }
          
          )
        )
      }
  }

  private buildCreateUpdateData(formdata: any): GMHISEvacuationCreateUpdate {
    return {
      evacuationFacilityID: formdata.evacuationFacilityID,
      startDate: formdata.startDate,
      serviceID: formdata.serviceID,
      practicianID: formdata.practicianID,
      patientID: formdata.patientID,
      evacuationReason: formdata.evacuationReason.trim(),
      clinicalInformation: formdata.clinicalInformation.trim(),
      treatmentReceived: formdata.treatmentReceived.trim(),
      receptionFacilityID: formdata.receptionFacilityID,
    }
  }

  private isUpdate(): boolean {
    return !!this.evacuation;
  }
  private formIsValid(): boolean {
    return this.fieldGroup.valid;
  }

  private retrieveEvacuation(): void {
      this.subscriptions.add(
        this.evacuationService.retrieve(this.evacuationID).subscribe(
          (response : GMHISEvacuationPartial) => {
            this.evacuation = response; 
            this.patientID = this.evacuation.patientID;
            this.serviceID = this.evacuation.serviceID; 
            this.buildFields();           
          },
          (error : HttpErrorResponse) => {
            console.error(error.error.message);
            
          }
        )
      )
  }

  }
