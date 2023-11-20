import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActService } from 'src/app/act/act/service/act.service';
import { ActCategoryService } from 'src/app/act/category/service/act-category.service';
import { Patient } from 'src/app/patient/patient';
import { PracticianService } from 'src/app/practician/practician.service';
import { ServiceService } from 'src/app/service/service/service.service';
import { GMHISNameAndID } from 'src/app/shared/models/name-and-id';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { Admission, GMHISAdmissionCreateUpdate, GMHISAdmissionType } from '../model/admission';
import { AdmissionService } from '../service/admission.service';
import { GMHISKeyValue } from 'src/app/shared/models/name-and-id';
import { GmhisUtils } from 'src/app/shared/base/utils';
import { Subscription } from 'rxjs';

@Component({ selector: 'app-admission-create-update', templateUrl: './admission-create-update.component.html'})
export class GMHISAdmissionCreateUpdateComponent implements OnInit, OnDestroy {

  @Input() patient: Patient

  @Input() admission: Admission;

  @Output() addAdmission = new EventEmitter();
  @Output() updateAdmission = new EventEmitter();

  admissionCreateData: GMHISAdmissionCreateUpdate;

  public formGroup: FormGroup;

  public invalidFom = false;

  public formSubmitted = false;

  loading: boolean = false;
  actsNameAndId: any;
  servicesNameAndId: any;
  actCategories: any;

  practicians: any[] = [];

  specialityPracticians : any[] = [];

   types : GMHISKeyValue[] = [ 
     {key: GMHISAdmissionType.NORMAL, value: 'Consultation' },
     {key: GMHISAdmissionType.EMERGENCY, value: 'Urgence' }
   ]

   subscription: Subscription = new Subscription();

  constructor(
    private actService: ActService,
    private serviceService: ServiceService,
    private admissionService: AdmissionService, 
    private practicianService: PracticianService,
    private actCategorieService: ActCategoryService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    
    this.findActiveServiceNameAndId();
    this.findActCategorieNameAndId();
    this.findActPracticiainNameAndId();
    this.buildFields();
    
    if (this.admission) {
      this.admissionService.getAdmissionDetail(this.admission).subscribe(
        (response: any) => {

          this.onRetrieveActsAndPracticians(response.serviceID);
          this.formGroup.get('id').setValue(response.id);
          this.formGroup.get('patient').setValue(response.patientId);
          this.formGroup.get('patientName').setValue(response.patientName);
          this.formGroup.get('patientExternalId').setValue(response.patientExternalId);
          this.formGroup.get('createdAt').setValue(new Date(response.admissionDate));
          this.formGroup.get('act').setValue(response.act);
          this.formGroup.get('speciality').setValue(response.serviceID);
          this.formGroup.get('practician').setValue(response.practicianId);
        }
      )
    }
    if (this.patient) {
      this.formGroup.get('patient').setValue(this.patient.id);
      this.formGroup.get('patientName').setValue(this.patient.firstName + " " + this.patient.lastName);
      this.formGroup.get('patientExternalId').setValue(this.patient.patientExternalId)
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onChangePractician(practicianID: any) {
    let practician = this.practicians.find(practician => practician.id = practicianID);
    this.formGroup.get('speciality').setValue(practician.actCategoryId);
    this.onRetrieveActsAndPracticians(practician.actCategoryId);
  }

  public save(): void {
    this.formSubmitted = true;
    this.invalidFom = !this.formGroup.valid;
    if (this.formGroup.valid) {
      this.loading = true;
      this.admissionCreateData = this.formGroup.value;

      if (this.admissionCreateData.id) {
        this.update();
      } else {
        this.create();
      }
    }
  }

  private create(): void {
    this.subscription.add(
      this.admissionService.createAdmission(this.admissionCreateData).subscribe(
        (response: Patient) => {
          this.loading = false;
          this.addAdmission.emit();
        },
        (errorResponse: HttpErrorResponse) => {
          this.loading = false;
          this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
        }
      )
    );
  }

  private update(): void {
    this.subscription.add(
      this.admissionService.updateAdmission(this.admissionCreateData).subscribe(
        (response: Admission) => {
          this.loading = false;
          this.updateAdmission.emit();
        },
        (errorResponse: HttpErrorResponse) => {
          this.loading = false;
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error
          );
        }
      )
    );
  }

  get isCreate(): boolean {
    return GmhisUtils.isNull(this.admission);
  }

  onRetrieveActsAndPracticians(specialityId: number) {
    this.specialityPracticians = this.practicians.filter(practician => practician.specialityId === specialityId);
   this.subscription.add(this.actService.retrieveSpecialityActs(specialityId).subscribe((res: any) => {this.actsNameAndId = res}))
  }

  private buildFields() {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      type: new FormControl(null, Validators.required),
      patientExternalId: new FormControl({ value: '', disabled: true }),
      patientName: new FormControl({ value: '', disabled: true }),
      createdAt: new FormControl(new Date(), [Validators.required]),
      patient: new FormControl(true),
      speciality: new FormControl(null, Validators.required),
      act: new FormControl(null, Validators.required),
      practician: new FormControl(null, Validators.required),
    });
  }
  get type() { return this.formGroup.get('type'); }
  get service() { return this.formGroup.get('speciality'); }
  get practician() { return this.formGroup.get('practician'); }
  get act() { return this.formGroup.get('act'); }


  private buildAdmissionCreate(formaData: any): GMHISAdmissionCreateUpdate {
    return {
        id: formaData.id,
        type: formaData.type,
        createdAt: formaData.createdAt,
        patient: formaData.patient,
        speciality: formaData.speciality,
        act: formaData.act,
        practician: formaData.practician,
    }
  }

  private findActiveServiceNameAndId() {
    this.serviceService.findActiveServiceNameAndId().subscribe(
      (response: any) => {this.servicesNameAndId = response;},
      (errorResponse: HttpErrorResponse) => {
        this.loading = false;
        this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
      }
    )}

  private findActCategorieNameAndId() {
    this.subscription.add(
      this.actCategorieService.findActiveActCategoryNameAndId().subscribe(
        (response: GMHISNameAndID[]) => {this.actCategories = response;}
      ))}

  private findActPracticiainNameAndId() {
    this.subscription.add(
      this.practicianService.findPracticianSimpleList().subscribe(
        (response: GMHISNameAndID[]) => {
          this.practicians = response;
        })
        )}

}
