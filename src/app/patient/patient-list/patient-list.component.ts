import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  private subs = new SubSink();

  public searchForm: FormGroup;

  public patient: Patient;

  currentPage: number;
  empty: boolean;
  firstPage: boolean;
  lastPage: boolean;
  totalItems: number;
  totalPages: number;

  public items: any;

  selectedSize: number;

  sizes = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 },
    { id: 250, value: 250 },
    { id: 500, value: 500 },
    { id: 1000, value: 1000 },
  ];

  actives = [
    { id: true, value: 'Actif' },
    { id: false, value: 'Inactif' },
  ];

  showloading: boolean = false;
  currentIndex: number;

  emptyListMessage : string ; 

  acctionsList : boolean = false;

  disabledAllFormFiled : boolean;


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
    this.showloading = true;
    this.subs.add(
      this.patientService.findAll(this.searchForm.value).subscribe(
        (response: PageList) => {
          this.showloading = false;
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items; 
          console.log(this.items);
          this.lastPage = response.lastPage;
          this.selectedSize = response.size;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
        },
        (errorResponse: HttpErrorResponse) => {         
          this.showloading = false;
          this.emptyListMessage = errorResponse.error.message + ':(';
        }
      )
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
    this.modalService.open(updateFormContent, { size: 'xl' });
  }

  openAdmissionForm(admissionFormContent, item?) {
    this.patient = item;
    this.modalService.open(admissionFormContent, { size: 'lg' });
  }

  onOpenDetailModal(modalKey : any,size? : string, data? : any){
    this.disabledAllFormFiled = true;
    this.onOpenModal(modalKey, size,data )
  }

  addPatient() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'Patient ajouté avec succès'
    );
    this.getPatient();
  }

  updatePatient() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'Patient modifié avec succès'
    );
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
