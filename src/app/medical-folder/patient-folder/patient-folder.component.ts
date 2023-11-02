import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionService } from 'src/app/admission/service/admission.service';
import { PatientConstantService } from 'src/app/constant/patient-constant/service/patient-constant.service';
import { ExamService } from 'src/app/examen/services/exam.service';
import { Patient } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { PrescriptionService } from 'src/app/prescription/services/prescription.service';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { ExaminationService } from '../examination/services/examination.service';
import * as moment from 'moment';
import { Admission } from 'src/app/admission/model/admission';
import { Subscription } from 'rxjs';

@Component({selector: 'app-patient-folder',templateUrl: './patient-folder.component.html',styleUrls: ['./patient-folder.component.scss']})
export class PatientFolderComponent implements OnInit, OnDestroy {

  private subscription : Subscription = new Subscription();

  patient: Patient;
  patientId: number;

  admissionId: number;
  admission : Admission;

  showConsultationList : boolean;

  examinationNumber: number = 0;

  showConstantList: boolean;

  menuClick:string = 'Consultations';

  patientConstantNumber: number = 0;

  patientPrescriptionNumber: number = 0;

  currentDate : any;

  patientExamNumber: number = 0;

  public searchForm: FormGroup;

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

  showloading: boolean = false;
  lastAdmissionNoHaveExamination: boolean;

  items2: NbMenuItem[] = [
    {
     title: 'Consultations',
     icon: 'minus-outline',
     badge: {text: "0",status: 'warning'}
   },
   {
     title: 'Constantes',
     icon: 'minus-outline',
     badge: {text: "0",status: 'warning'},
   },
   {
     title: 'Ordonances',
     icon: 'minus-outline',
     badge: {text: '0',status: 'warning'}
   },
   {
     title: 'Examens',
     icon: 'minus-outline',
     badge: {text: '0',status: 'warning'}
   },
   {
     title: 'Certificats médicaux',
     icon: 'minus-outline',
     badge: {text: '0',status: 'warning'},
   }
];

  constructor(
    private route : ActivatedRoute,
    private patientService : PatientService,
    private admissionService : AdmissionService,
    private examinationService : ExaminationService,
    private patientConstantService : PatientConstantService,
    private prescriptionService : PrescriptionService,
    private examService : ExamService,
    private menuService : NbMenuService,
    private notificationService: NotificationService,
    private modalService: NgbModal

    ) { }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

    initform() {
      this.searchForm = new FormGroup({
        patient: new FormControl(this.patientId),
        page: new FormControl(0),
        size: new FormControl(9),
        sort: new FormControl('id,desc'),
      });
    }

 


  ngOnInit(): void {    
    this.currentDate = new Date();

    this.subscription.add(
      this.route.paramMap.subscribe(
        params => {
          const id = Number(params.get('id'));
          this.admissionId = id;
          this.admissionService.retrieve(id).subscribe(
            (response : any)=>{
              this.admission = response;
              this.patientId = response["patientId"];
            this.patientService.retrieve(this.patientId).subscribe(
            (response : any) => {
              this.patient = response;
              this.showConsultationList = true;
              this.showConstantList = true;
              this.initform();
              this.getExamination();
              this.updateExaminationNuber(this.patient.id);
              this.updatePattientConstantNumber(this.patient.id);
              this.updatePatientPrescriptionNumber(this.patient.id)
              this.updatePatientExamenNumber(this.patient.id)
              this.AdmissionNoHaveExamination();
            }
          )
            }
          ) 
        }
        )
    )
   
      
      this.menuService.onItemClick().subscribe(
        (res : any) => {
          this.menuClick = res['item']['title'];
        }
      )
  }

  AdmissionNoHaveExamination(){
    this.examinationService.AdmissionNoHaveExamination(this.patient.id).subscribe(
      (response : boolean) =>{
        this.lastAdmissionNoHaveExamination = response;  
      },
      (errorResponse : HttpErrorResponse) => {
      }
    )
  }
  public ageFromDateOfBirthday(dateOfBirth: any): number {
    return moment().diff(dateOfBirth, 'years');
  }

  public getExamination() {
    this.showloading = true;
    this.subscription.add(
      this.examinationService.findPatientFirstExaminationsOfAdmisions(this.searchForm.value).subscribe(
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

 

  updateExaminationNuber(patientId?:number){
    this.examinationService.getExaminationNumberByAdmissionId( this.patient.id).subscribe(
      (response : number) => {
        this.examinationNumber = response;
        this.items2[0]["badge"]["text"] = this.examinationNumber.toString();
      }
    )
  }

  updatePattientConstantNumber(patientId?:number){
    this.patientConstantService.getPatientConstantNumberByPatientId(this.patient.id).subscribe(
      (response : any) => {
        this.patientConstantNumber = response["PatientConstantNumber"];        
        this.items2[1]["badge"]["text"] = this.patientConstantNumber.toString();
      }
    )
  }

  updatePatientPrescriptionNumber(patientId?:number){
    this.prescriptionService.getPrescriptionNumberByPatientId(this.patient.id).subscribe(
      (response : any) => {
        this.patientPrescriptionNumber = response;
        this.items2[2]["badge"]["text"] = this.patientPrescriptionNumber.toString();
      }
    )
  }
  
  updatePatientExamenNumber(patientId?:number){
    this.examService.getAnalysisRequestNumberByPatientId(this.patient.id).subscribe(
      (response : any) => {
        this.patientExamNumber = response;
        this.items2[3]["badge"]["text"] = this.patientExamNumber.toString();
      }
    )
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getExamination();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: 'xl' });
  }


  addExamination() {
    this.modalService.dismissAll();
    this.getExamination();
    this.lastAdmissionNoHaveExamination = false;
  }

   truncate(str : string, length : number) {
     if (!!str) {return str.length > length? str.slice(0, length) + '...': str;}
  }

}
