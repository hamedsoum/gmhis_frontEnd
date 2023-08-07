import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActService } from 'src/app/act/act/service/act.service';
import { Admission } from 'src/app/admission/model/admission';
import { AdmissionService } from 'src/app/admission/service/admission.service';
import { PracticianService } from 'src/app/practician/practician.service';
import { ServiceService } from 'src/app/service/service/service.service';
import { PageList } from 'src/app/_models/page-list.model';
import { User } from 'src/app/_models/user.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { UserService } from 'src/app/_services/user.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { WaitingRoomService } from '../service/waiting-room.service';
@Component({
  selector: 'app-patient-in-waiting-room',
  templateUrl: './patient-in-waiting-room.component.html',
  styleUrls: ['./patient-in-waiting-room.component.scss']
})
export class PatientInWaitingRoomComponent implements OnInit {

  private subs = new SubSink();

  public searchForm: FormGroup;

  public admission: Admission;

  public makeInvoice : boolean;

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

  takeCares = [
    {label: 'Pris en Charge', value: true },
      {label: 'Non Pris en Charge', value: false },
  ];

  showloading: boolean = false;
  currentIndex: number;

  acctionsList : boolean = false;
  actServicesNameAndId: any;
  activeActNameAndId: any;
  docSrc: string;
  waitingRooms: any;
  practicians: any;
  user: User;

  PatientDPIChecknumber : string ;
  admissionId: number;
  constructor(private admissionService: AdmissionService,private notificationService: NotificationService,private modalService: NgbModal,private serviceService : ServiceService,
        private actService : ActService,private waitingRoomService : WaitingRoomService,private practicianService : PracticianService,private userService : UserService,private route : Router) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();

    this.initform();
    this.findActiveAServiceNameAndId();
    this.findActiveActNameAndId();
    this.findActiveWaitingRoomNameAndId();
    this.findActivePracticianNameAndId();
    this.getPatient();
  }

  onOpenCheckPatientNumberModal(checkPatientNumberModal, admission){
    this.admission = admission;
    this.admissionId = this.admission.id
    this.modalService.open(checkPatientNumberModal, {size : 'md', centered : true})
  }

  onVerifyCheckPatientNumber(admission){        
    this.route.navigateByUrl(`/medical-folder/patient-folder/${admission.id}`)
  }


  initform() {
    this.searchForm = new FormGroup({
      takeCare: new FormControl(null),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      patientExternalId: new FormControl(''),
      cellPhone: new FormControl(''),
      practician: new FormControl(null),
      service: new FormControl(null),
      act: new FormControl(null),
      dpFromDate: new FormControl(null),
      dpToDate: new FormControl(null),
      page: new FormControl(0),
      size: new FormControl(25),
      sort: new FormControl('id,desc'),
    });
  }

  onSearchValueChange(): void {
    this.getPatient();
  }

  public getPatient() {
    this.showloading = true;
    this.subs.add(
      this.admissionService.findAdmissionQueue(this.searchForm.value).subscribe(
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
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error.message
          );
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

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: 'xl' });
  }

  openUpdateForm(updateFormContent, item?) {
    this.admission = item;
    this.modalService.open(updateFormContent, { size: 'xl' });
  }

  openInvoiceForm(invoiceFormContent, item?) {
    this.admission = item;
    this.makeInvoice = false;
    this.modalService.open(invoiceFormContent, { size: 'xl' });
  }

  updateAdmission() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'admission modifié avec succès'
    );
    this.getPatient();
  }

addInvoice(){
  this.modalService.dismissAll();
  this.notificationService.notify(
    NotificationType.SUCCESS,
    'facture crée avec succès'
  );
  this.getPatient();
}


  rowSelected(admission: Admission, index: number) {
    this.currentIndex = index;
    this.admission = admission;
  }

  showActionsList(){
    this.acctionsList = !this.acctionsList;
  }

  public findActiveAServiceNameAndId(){
    this.serviceService.findActiveServiceNameAndId().subscribe(
      (response : any) => { 
        this.actServicesNameAndId = response;
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
  public findActiveActNameAndId(){
    this.actService.getListOfActiveAct().subscribe(
      (response : any) => {
        this.activeActNameAndId = response; 
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


  printInvoice(printContent) {
    this.modalService.open(printContent, { size: 'xl' });
  }

  public findActiveWaitingRoomNameAndId(){
    this.waitingRoomService.findActivewaitingRoomNameAndId().subscribe(
      (response : any) => {
        this.waitingRooms = response; 
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

  public findActivePracticianNameAndId(){
    this.practicianService.findPracticianSimpleList().subscribe(
      (response : any) => {
        this.practicians = response;         
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
