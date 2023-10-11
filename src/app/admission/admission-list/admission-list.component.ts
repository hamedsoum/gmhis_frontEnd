import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActService } from 'src/app/act/act/service/act.service';
import { ServiceService } from 'src/app/service/service/service.service';
import { PageList } from 'src/app/_models/page-list.model';
import { AdmissionReceiptPaymentService } from 'src/app/_services/documents/admission-receipt-payment.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { admissionStatus, Admission } from '../model/admission';
import { AdmissionService } from '../service/admission.service';

@Component({selector: 'app-admission-list',templateUrl: './admission-list.component.html'})
export class AdmissionListComponent implements OnInit, OnDestroy {

  private subs = new SubSink();

  public searchForm: FormGroup;

  public admission: Admission;

  public admissionId : number;

  public makeInvoiceByAdmission : boolean;

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

  admissionStatus =  [
    {value: admissionStatus.UNBILLED , item: 'Non Facturée'},
    {value: admissionStatus.BILLED , item: 'Facturée'},
  ]

  showloading: boolean = false;
  currentIndex: number;

  acctionsList : boolean = false;
  actServicesNameAndId: any;
  activeActNameAndId: any;
  docSrc: string;

  searchDateRange : string;

  constructor(
    private admissionService: AdmissionService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private serviceService : ServiceService,
    private actService : ActService,
    private admissionReceiptPaymentService : AdmissionReceiptPaymentService
  ) {}

  ngOnInit(): void {
    this.initform();
    this.findActiveAServiceNameAndId();
    this.findActiveActNameAndId();
    this.getAdmissions();
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  public onAdmissionSupervisory(admissionID: number):void {
    this.subs.add(
      this.admissionService.supervisory(admissionID)
        .subscribe(
          (response : Admission) => {
            this.notificationService.notify(
              NotificationType.SUCCESS,
              'Admission de surveillance crée avec succès'
            );
          },
          (error : HttpErrorResponse) => {
            throw new Error(error.message);
          }
        )
    )
  }

  public isDeposit(deposit : number): boolean {
    if (deposit == null) return false;
    return true
  }

  onRevokeConfirmation(openRevokeConfirmation,admission, size:string) {  
      this.admission = admission;  
      this.admissionId = this.admission.id;    
      this.modalService.open(openRevokeConfirmation, { size: size, centered : true });
  }

  OnRevokeAdmission(revoked : boolean) {  
    if (revoked){
      this.revokeAdmission(this.admissionId);
    } 
    this.modalService.dismissAll();
  }

  initform() {
    this.searchForm = new FormGroup({
      admissionNumber: new FormControl(''),
      admissionStatus: new FormControl('R'),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      patientExternalId: new FormControl(''),
      cellPhone: new FormControl(''),
      cnamNumber: new FormControl(''),
      idCardNumber: new FormControl(''),
      practician: new FormControl(null),
      service: new FormControl(null),
      faciliTyId : new FormControl(""),
      act: new FormControl(""),
      date: new FormControl(null),
      page: new FormControl(0),
      size: new FormControl(25),
      sort: new FormControl('id,desc'),
    });
  }



  onSearchValueChange(): void {
    this.getAdmissions();
  }

  public getAdmissions() {
    this.showloading = true;
    this.subs.add(
      this.admissionService.findAll(this.searchForm.value).subscribe(
        (response: PageList) => {
          this.showloading = false;
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items; 
                                       
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
    this.getAdmissions();
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getAdmissions();
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
    this.makeInvoiceByAdmission = true;
    this.modalService.open(invoiceFormContent, { size: 'xl' });
  }

  updateAdmission() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'admission modifié avec succès'
    );
    this.getAdmissions();
  }

addInvoice(){
  this.modalService.dismissAll();
  this.notificationService.notify(
    NotificationType.SUCCESS,
    'facture crée avec succès'
  );
  this.getAdmissions();
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
    this.modalService.open(printContent, { size: 'xl' })
  }

  onPrintAdmissionBailReceipt(printContent, admissionData) {
    this.modalService.open(printContent, { size: 'xl' });
    let doc =this.admissionReceiptPaymentService.buildPdfDocument(admissionData)
    this.docSrc = doc.output('datauristring'); 
  }

  private revokeAdmission(admissionId : number){
    this.admissionService.revokeAdmission(admissionId).subscribe(
      (response : any) => {
        this.notificationService.notify(
          NotificationType.SUCCESS,
          'admission revoqué avec succès'
        ); 
        this.getAdmissions();

      },
      (errorResponse : HttpErrorResponse) => {
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        );
      }
    )
  }



}
