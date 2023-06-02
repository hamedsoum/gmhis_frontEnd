import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionService } from 'src/app/admission/service/admission.service';
import { PatientConstantService } from 'src/app/constant/patient-constant/service/patient-constant.service';
import { ExamService } from 'src/app/examen/services/exam.service';
import { IPatient } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { PrescriptionService } from 'src/app/prescription/services/prescription.service';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { ExaminationService } from '../examination/services/examination.service';
@Component({selector :'patient-detail-component', templateUrl :'patient-folder-details-examination.component.html'})
export class PatientFolderExaminationDetailsComponent implements OnInit{

    patient: IPatient;
  patientId: number;
  admissionId: number;
  showConsultationList : boolean;
  examinationNumber: number = 0;
  showConstantList: boolean;
  menuClick:string = 'Consultations';
  patientConstantNumber: number = 0;
  patientPrescriptionNumber: number = 0;
  examenType: boolean;

  newExamination : boolean = false;

  currentDate : any;
  patientExamNumber: number = 0;

  @Output() updateExaminationNuberEvent: EventEmitter<any> = new EventEmitter();
  constructor(
    private route : ActivatedRoute,
    private patientService : PatientService,
    private admissionService : AdmissionService,
    private examinationService : ExaminationService,
    private patientConstantService : PatientConstantService,
    private prescriptionService : PrescriptionService,
    private examService : ExamService,
    private menuService : NbMenuService,
    private modalService: NgbModal,
    private notificationService: NotificationService,

    ) { }

  items2: NbMenuItem[] = [
         {
          title: 'Consultations',
          icon: 'minus-outline',
         
          badge: {
            text: "0",
            status: 'warning',
          }
        },
        {
          title: 'Constantes',
          icon: 'minus-outline',
          badge: {
            text: "0",
            status: 'warning',
          },
        },
        {
          title: 'Ordonances',
          icon: 'minus-outline',
          badge: {
            text: '0',
            status: 'warning',
          },
        },
        {
          title: 'Examens',
          icon: 'minus-outline',
          badge: {
            text: '0',
            status: 'warning',
          },
        },
        {
          title: 'Certificats médicaux',
          icon: 'minus-outline',
          badge: {
            text: '0',
            status: 'warning',
          },
        }
  ];
  ngOnInit(): void {
    this.currentDate = new Date();
    this.route.paramMap.subscribe(
      params => {
        const id = Number(params.get('id'));
        this.admissionId = id;
        console.log(this.admissionId);
        
        this.admissionService.getAdmissionDetailById(id).subscribe(
          (response : any)=>{
            this.patientId = response["patientId"];
          this.patientService.getPatientDetail(this.patientId).subscribe(
          (response : any) => {
            this.patient = response;
            this.showConsultationList = true;
            this.showConstantList = true;
            this.updateExaminationNuber(this.admissionId);
            this.updatePattientConstantNumber(this.patient.id);
            this.updatePatientPrescriptionNumber(this.admissionId)
            this.updatePatientExamenNumber(this.admissionId)
          }
        )
          }
        ) 
      }
      )
      
      this.menuService.onItemClick().subscribe(
        (res : any) => {
          this.menuClick = res['item']['title'];
        }
      )
  }


  onOpenModal(addFormContent, size:string, centered? : boolean) {
    console.log(addFormContent);
    this.modalService.open(addFormContent, { size: size, centered: centered});
  }

  changeNewExaminationValue(){
    this.newExamination = !this.newExamination;
  }
  
  openExaminationForm(addFormContent, size:string) {
    this.modalService.open(addFormContent, { size: size });
  }

  updateExaminationNuber(patientId?:number){
    this.examinationService.getExaminationNumberByAdmissionId(this.admissionId).subscribe(
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

  updatePatientPrescriptionNumber(admissionID?:number){
    this.prescriptionService.getPrescriptionNumberByPatientId(this.admissionId).subscribe(
      (response : any) => {
        this.patientPrescriptionNumber = response;
        this.items2[2]["badge"]["text"] = this.patientPrescriptionNumber.toString();
      }
    )
  }


  updatePatientExamenNumber(admissionId?:number){
    this.examService.getAnalysisRequestNumberByPatientId(this.admissionId).subscribe(
      (response : any) => {
        this.patientExamNumber = response;
        this.items2[3]["badge"]["text"] = this.patientExamNumber.toString();
      }
    )
  }


   addExamination() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Consultation ajoutée avec succès"
    );
    this.updateExaminationNuberEvent.emit();
    this.updateExaminationNuber();
    this.updatePatientExamenNumber();
    this.changeNewExaminationValue()
    }

  addConstantType() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Constante ajoutée avec succès"
    );
    this.updatePattientConstantNumber();
  }

  addPrescription(){
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Ordonnance prescrite avec succès"
    );
    this.updatePatientPrescriptionNumber();
  }

  ChooseLaboratoryType(exameFormContent,laboratoryType : boolean) : void {
    this.examenType = laboratoryType;
    this.modalService.dismissAll();
    this.modalService.open(exameFormContent, { size: 'xl' });
  }
}