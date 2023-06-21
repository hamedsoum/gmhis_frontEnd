import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActService } from 'src/app/act/act/service/act.service';
import { ActCategoryService } from 'src/app/act/category/service/act-category.service';
import { IPatient } from 'src/app/patient/patient';
import { PracticianService } from 'src/app/practician/practician.service';
import { ServiceService } from 'src/app/service/service/service.service';
import { INameAndId } from 'src/app/shared/models/name-and-id';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { Admission } from '../model/admission';
import { IAdmissionDto } from '../model/admission-dto';
import { AdmissionService } from '../service/admission.service';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {
  private subs = new SubSink();

  @Output() addAdmission = new EventEmitter();
  @Output() updateAdmission = new EventEmitter();

  @Input()
  patient: IPatient

  @Input()
  admission: Admission;

  admissionDto: IAdmissionDto;

  public formGroup: FormGroup;

  public invalidFom = false;

  public formSubmitted = false;


  showloading: boolean = false;
  actsNameAndId: any;
  servicesNameAndId: any;
  actCategories: any;
  practicians: any[];
  constructor(private serviceService: ServiceService, private actService: ActService, private admissionService: AdmissionService,
    private actCategorieService: ActCategoryService, private notificationService: NotificationService, private practicianService: PracticianService) { }

  ngOnInit(): void {
    this.buildFields();
    if (this.admission) {
      this.admissionService.getAdmissionDetail(this.admission).subscribe(
        (response: any) => {
          this.formGroup.get('id').setValue(response.id);
          this.formGroup.get('patient').setValue(response.patientId);
          this.formGroup.get('patientName').setValue(response.patientName);
          this.formGroup.get('patientExternalId').setValue(response.patientExternalId);
          this.formGroup.get('createdAt').setValue(new Date(response.admissionDate));
          this.formGroup.get('act').setValue(response.act);
          this.formGroup.get('service').setValue(response.service);
          this.formGroup.get('practician').setValue(response.practician);
        }
      )
    }
    if (this.patient) {
      this.formGroup.get('patient').setValue(this.patient.id);
      this.formGroup.get('patientName').setValue(this.patient.firstName + " " + this.patient.lastName);
      this.formGroup.get('patientExternalId').setValue(this.patient.patientExternalId)
    }

    this.findActiveServiceNameAndId();
    this.findActCategorieNameAndId();
    this.findActPracticiainNameAndId();
  }

  onChangePractician(practicianID: any) {
    let practician = this.practicians.find(practician => practician.id = practicianID);
    this.formGroup.get('speciality').setValue(practician.actCategoryId);
    this.findActiveActByActCategoryId(practician.actCategoryId);
  }

  buildFields() {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      patientExternalId: new FormControl({ value: '', disabled: true }),
      patientName: new FormControl({ value: '', disabled: true }),
      createdAt: new FormControl(new Date(), [Validators.required]),
      patient: new FormControl(true),
      service: new FormControl(null),
      speciality: new FormControl(null),
      act: new FormControl(null),
      caution: new FormControl(null),
      practician: new FormControl(null),
    });
  }

  save(): void {
    this.invalidFom = !this.formGroup.valid;
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      this.showloading = true;
      this.admissionDto = this.formGroup.value;
      console.log(this.admissionDto);

      if (this.admissionDto.id) {
        this.subs.add(
          this.admissionService.updateAdmission(this.admissionDto).subscribe(
            (response: Admission) => {
              this.showloading = false;
              this.updateAdmission.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.showloading = false;
              this.notificationService.notify(
                NotificationType.ERROR,
                errorResponse.error
              );
            }
          )
        );
      } else {
        this.subs.add(
          this.admissionService.createAdmission(this.admissionDto).subscribe(
            (response: IPatient) => {
              this.showloading = false;
              this.addAdmission.emit();
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
  }

  findActiveActByActCategoryId(categoryId: number) {
    this.actService.getActsByActCategoryId(categoryId).subscribe(
      (res: any) => {
        this.actsNameAndId = res;
      }
    )
  }

  private findActiveServiceNameAndId() {
    this.serviceService.findActiveServiceNameAndId().subscribe(
      (response: any) => {
        this.servicesNameAndId = response;
      },
      (errorResponse: HttpErrorResponse) => {
        this.showloading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        );
      }
    )
  }

  private findActCategorieNameAndId() {
    this.actCategorieService.findActiveActCategoryNameAndId().subscribe(
      (response: INameAndId[]) => {
        this.actCategories = response;
      }
    )
  }

  private findActPracticiainNameAndId() {
    this.practicianService.findPracticianSimpleList().subscribe(
      (response: INameAndId[]) => {
        this.practicians = response;
      }
    )
  }
}
