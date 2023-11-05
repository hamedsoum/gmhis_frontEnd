import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GmhisUtils } from 'src/app/shared/base/utils';
import { PAGINATION_SIZE } from 'src/app/shared/constant';
import { GMHISPagination } from 'src/app/shared/models/gmhis-domain';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { GMHISCautionTransactionCreate, Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {

  readonly faHospitalUser = faHospitalUser;
  iconStyle = ['sh-color-primary']

  private subs = new SubSink();

  public searchForm: FormGroup;

  public patient: Patient;

  pagination: GMHISPagination = {};

  sizes = PAGINATION_SIZE;

  public items: any;

  selectedSize: number;

  actives = [
    { id: true, value: 'Actif' },
    { id: false, value: 'Inactif' },
  ];

  loading: boolean = false;
  currentIndex: number;

  emptyListMessage : string ; 

  acctionsList : boolean = false;

  disabledAllFormFiled : boolean;

  modalHeaderTitle : string;
  modalHeaderSubTitle: string;

  amount: number = 0;

  constructor(
    private patientService: PatientService,
    private notificationService: NotificationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initform();
    this.getPatient();
  }


  initform() {
    this.searchForm = new FormGroup({
      patientExternalId: new FormControl(''),
      firstName: new FormControl(''),
      cellPhone: new FormControl(''),
      lastName: new FormControl(''),
      idCardNumber: new FormControl(''),
      correspondant: new FormControl(''),
      emergencyContact: new FormControl(''),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl('id,desc'),
    });
  }

  onSearchValueChange(): void {
    this.getPatient(); 
  }

  public getPatient() {
    this.emptyListMessage = '';
    this.loading = true;
    this.subs.add(
      this.patientService.findAll(this.searchForm.value).subscribe(
        (response: PageList) => {
          this.loading = false;
          GmhisUtils.pageListMap(this.pagination, response);
        },
        (errorResponse: HttpErrorResponse) => {         
          this.loading = false;
          this.emptyListMessage = errorResponse.error.message + ':(';
        }
      )
    );
  }

  public onOpenCautionForm(cautionFormRef, patient: Patient): void {
    this.patient = patient;
    this.onOpenModal(cautionFormRef, 'md',patient )
  }

  public onCreateCaution(): void {
    this.createCautionTransaction(this.patient.id, this.amount, );
  }

  private createCautionTransaction(patientID:number, amount: number): void {
    let cautionTransactionCreate: GMHISCautionTransactionCreate = {
      libelle: 'Nouvelle Caution',
      action: 'credit',
      amount: amount,
      patientID: patientID
    }
    this.patientService.createCautionTransaction(cautionTransactionCreate).subscribe(
      (response: any) => {
        this.modalService.dismissAll();
        this.notificationService.notify( NotificationType.SUCCESS,`Nouvelle Caution Ajouté au compte du patient ${this.patient.firstName} ${this.patient.lastName}`);
      },
      (errorResponse: HttpErrorResponse) => {
        this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
        this.modalService.dismissAll();
      }
    );
  }

  onIsActiveChange() {
    this.getPatient();
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getPatient();
  }

  onOpenModal(modalKey : any,size? : string, data? : any) {
      if (data) this.patient = data;
      this.modalService.open(modalKey, { size : size} )
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: 'xl' });
  }

  openUpdateForm(updateFormContent, item?) {
    this.disabledAllFormFiled = false;
    this.patient = item;
    this.modalHeaderTitle = `Patient ${this.patient.firstName} ${this.patient.lastName}`;
    this.modalHeaderSubTitle = `${this.patient.patientExternalId}`;

    this.modalService.open(updateFormContent, { size: 'xl' });
  }

  openAdmissionForm(admissionFormContent, item?) {
    this.patient = item;
    this.modalService.open(admissionFormContent, { size: 'lg' });
  }

  onRecord(modalKey : any,size? : string, data? : Patient){
    this.disabledAllFormFiled = true;
    this.modalHeaderTitle = `Patient ${data.patientExternalId}`;
    this.onOpenModal(modalKey, size,data )
  }

  addPatient() {
    this.modalService.dismissAll();
    this.notificationService.notify( NotificationType.SUCCESS,'Patient ajouté avec succès');
    this.getPatient();
  }

  updatePatient() {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Patient modifié avec succès');
    this.getPatient();
  }

  addAdmission() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'admission ajoutée avec succès'
    );
    this.getPatient();
  }

  rowSelected(patient: Patient, index: number) {
    this.currentIndex = index;
    this.patient = patient;
  }

  showActionsList(){
    this.acctionsList = !this.acctionsList;
  }
}
