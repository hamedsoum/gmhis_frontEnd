import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionService } from 'src/app/admission/service/admission.service';
import { Patient } from 'src/app/patient/patient';
import { Pagination } from 'src/app/shared/domain';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IExamination } from '../models/examination';
import { ExaminationPrintDocumentService } from '../record/examination-print-document.service';
import { ExaminationService } from '../services/examination.service';

@Component({selector: 'app-examination-list',templateUrl: './examination-list.component.html'})
export class ExaminationListComponent implements OnInit, OnChanges {

  private subs = new SubSink();

  public searchForm: FormGroup;

  public examination: IExamination;

  public examinationId: number;


  @Input() patient : Patient;
  @Input() patientId : number;

  @Input() admissionID : number;

  @Input() newExamination : boolean;
  @Output() newExaminationChange = new EventEmitter();

  @Output() updateExaminationNumber: EventEmitter<any> = new EventEmitter();

  @Output() updatePatientPrescriptionNumber: EventEmitter<any> =new EventEmitter();

  @Output() updatePattientConstantNumber: EventEmitter<any> = new EventEmitter();

  @Output() updatePatientExamenNumber: EventEmitter<any> = new EventEmitter();

  pagination : Pagination;
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

  diagnostic: string;
  docSrc: string;

  constructor(
    private examinationService: ExaminationService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private admissionService : AdmissionService,
    private examinationPrintDocumentService : ExaminationPrintDocumentService,
  ) {}

  ngOnInit(): void {
    console.log(this.admissionID);
    
    this.findAdmission({id : this.admissionID});
    this.initform();
    this.getExamination();    
    this.newExaminationChange.subscribe(() => this.getExamination())
  }

  ngOnChanges(changes: SimpleChanges): void {    
    if(changes.newExamination){
      this.findAdmission({id : this.admissionID});
      this.initform();
      this.getExamination();
      this.newExamination = false;
    }
  }

  public onPrintExaminationRecord(recordContent: any):void {  
    this.modalService.open(recordContent, { size: 'lg' });
    let doc  = this.examinationPrintDocumentService.examinationRecordPDF(this.examination,this.patient)
    this.docSrc = doc.output('datauristring');       
  }

  public onAddDiagnostic(examination:IExamination,diagnosticDialog: any):void {
    this.examination = examination;    
    this.modalService.open(diagnosticDialog, {size: 'md', centered: true})    
  }

  public onOpenExaminationRecord(examination:IExamination, examinationRecordModal):void{
    this.examination = examination;    
    this.modalService.open(examinationRecordModal, {size: 'lg'})    

  }

  public changeNewExaminationValue():void{
    this.newExamination = !this.newExamination;
  }

  private initform():void {    
    this.searchForm = new FormGroup({
      admissionID: new FormControl(this.admissionID),
      patient: new FormControl(this.patientId),
      page: new FormControl(0),
      size: new FormControl(10),
      sort: new FormControl('id,desc'),
    });
  }

  public onSearchValueChange(): void {
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
          this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);
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

  public openAddForm(addFormContent, size:string):void {
    this.modalService.open(addFormContent, { size: size });
  }


  public onChooseLaboratory(addFormContent, size:string):void {    
    this.modalService.open(addFormContent, { size: size, centered : true });
  }


  public openUpdateForm(updateFormContent, item?):void {
    this.examination = item;
    this.modalService.open(updateFormContent, { size: 'lg' });
  }

  public openPrescriptionForm(prescriptionFormContent, item?):void {
    this.examinationId = item.id;
    this.modalService.open(prescriptionFormContent, { size: 'xl' });
  }

  public addExamination():void {
    this.modalService.dismissAll();
    this.updateExaminationNumber.emit();
    this.getExamination();
  }

  updateConvention() {
    this.modalService.dismissAll();
    this.getExamination();
  }

  addPrescription() {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,"Ordonnance crée avec succès");
    this.updatePatientPrescriptionNumber.emit();
  }

  addConstantType() {
    this.modalService.dismissAll();
    this.notificationService.notify( NotificationType.SUCCESS,'Constante ajoutée avec succès');
    this.updatePattientConstantNumber.emit();
  }

   addExam() {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,"analyse démandé avec succès");
    this.updatePatientExamenNumber.emit();
  }

  addInvoice(){
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'facture crée avec succès');
  }

  ChooseLaboratoryType(exameFormContent,laboratoryType : boolean) : void {
    this.examenType = laboratoryType;
    this.modalService.dismissAll();
    this.modalService.open(exameFormContent, { size: 'xl' });
  }

  findAdmission(admission : any) {
    this.subs.add(
      this.admissionService.getAdmissionDetail(admission).subscribe(
        (res : any) => {this.admission = res;}
      )
    )
  }

  public onCreateDiagnostic():void {
    this.updateExamination();
  }
  private updateExamination():void{
    this.examination.conclusion  = this.diagnostic; 
    this.examinationService.updateExamination(this.examination).subscribe(
      (res : any) => {
        this.notificationService.notify(NotificationType.SUCCESS, 'Diagnostic Ajouté avec succès')
        this.getExamination();
        this.modalService.dismissAll();
      },
      (errorResponse : HttpErrorResponse) => {this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);}
    )}
}
