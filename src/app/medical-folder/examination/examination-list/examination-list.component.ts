import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionService } from 'src/app/admission/service/admission.service';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.scss']
})
export class ExaminationListComponent implements OnInit {

  private subs = new SubSink();

  public searchForm: FormGroup;

  public examination: Object;

  public examinationId: number;


  @Input()
  patientId : number;

  @Input()
  admissionId : number;


  @Output() updateExaminationNuber: EventEmitter<any> = new EventEmitter();

  @Output() updatePatientPrescriptionNumber: EventEmitter<any> =new EventEmitter();

  @Output() updatePattientConstantNumber: EventEmitter<any> = new EventEmitter();

  @Output() updatePatientExamenNumber: EventEmitter<any> = new EventEmitter();

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
  examenType: boolean;
  admission: any;


  constructor(
    private examinationService: ExaminationService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private admissionService : AdmissionService
  ) {}

  ngOnInit(): void {
    this.findAdmission({id : this.admissionId});
    this.initform();
    this.getExamination();
  }

  initform() {
        
    this.searchForm = new FormGroup({
      admissionID: new FormControl(this.admissionId),
      patient: new FormControl(this.patientId),
      page: new FormControl(0),
      size: new FormControl(10),
      sort: new FormControl('id,desc'),
    });
  }

  onSearchValueChange(): void {
    this.getExamination();
  }

  

  public getExamination() {
    this.showloading = true;
    this.subs.add(
      this.examinationService.getPatientExamination(this.searchForm.value).subscribe(
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
    this.getExamination();
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getExamination();
  }

  openAddForm(addFormContent, size:string) {
    console.log(addFormContent);
    this.modalService.open(addFormContent, { size: size });
  }


  onChooseLaboratory(addFormContent, size:string) {    
    this.modalService.open(addFormContent, { size: size, centered : true });
  }


  openUpdateForm(updateFormContent, item?) {
    this.examination = item;
    this.modalService.open(updateFormContent, { size: 'lg' });
  }

  openPrescriptionForm(prescriptionFormContent, item?) {
    this.examinationId = item.id;
    this.modalService.open(prescriptionFormContent, { size: 'xl' });
  }

  addExamination() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Consultation ajoutée avec succès"
    );
    this.updateExaminationNuber.emit();
    this.getExamination();
  }

  updateConvention() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Consultation modifiée avec succès"
    );
    this.getExamination();
  }

  addPrescription() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Ordonnance crée avec succès"
    );
    this.updatePatientPrescriptionNumber.emit();
  }

  addConstantType() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'Constante ajoutée avec succès'
    )
    this.updatePattientConstantNumber.emit();
  }

   addExam() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "analyse démandé avec succès"
    );
    this.updatePatientExamenNumber.emit();
  }

  addInvoice(){
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'facture crée avec succès'
    );
  }

  ChooseLaboratoryType(exameFormContent,laboratoryType : boolean) : void {
    this.examenType = laboratoryType;
    this.modalService.dismissAll();
    this.modalService.open(exameFormContent, { size: 'xl' });
  }

  findAdmission(admission : any) {
    this.subs.add(
      this.admissionService.getAdmissionDetail(admission).subscribe(
        (res : any) => {
          this.admission = res;
          console.log(this.admission);
          
        },
        
      )
    )
  }

}
