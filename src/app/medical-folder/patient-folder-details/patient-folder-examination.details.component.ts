import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Admission } from 'src/app/admission/model/admission';
import { AdmissionService } from 'src/app/admission/service/admission.service';
import { PatientConstantService } from 'src/app/constant/patient-constant/service/patient-constant.service';
import { ExamService } from 'src/app/examen/services/exam.service';
import { Patient } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { PrescriptionService } from 'src/app/prescription/services/prescription.service';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import Swal from 'sweetalert2';
import { ExaminationService } from '../examination/services/examination.service';
@Component({selector :'patient-detail-component', templateUrl :'patient-folder-details-examination.component.html'})
export class PatientFolderExaminationDetailsComponent implements OnInit, OnDestroy{

  @Output() updateExaminationNuberEvent: EventEmitter<any> = new EventEmitter();

  patient: Patient;
  patientId: number;

  admissionID: number;
  admission?: Admission;

  showConsultationList : boolean;

  examinationNumber: number = 0;
  patientConstantNumber: number = 0;
  patientPrescriptionNumber: number = 0;
  patientExamNumber: number = 0;

  showConstantList: boolean;

  menuClick:string = 'Consultations';


  isLaboratoryExamenType: boolean;
  examinationID : number;
  newExamination : boolean = false;

  currentDate : any;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private route : ActivatedRoute,
    private modalService: NgbModal,
    private menuService : NbMenuService,
    private patientService : PatientService,
    private admissionService : AdmissionService,
    private examinationService : ExaminationService,
    private patientConstantService : PatientConstantService,
    private prescriptionService : PrescriptionService,
    private examService : ExamService,
    private notificationService: NotificationService,

    ) { }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
 
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
        this.admissionID = id;
        this.retrieveAdmission(this.admissionID);
      }
      )
      
      this.menuService.onItemClick().subscribe(
        (res : any) => {
          this.menuClick = res['item']['title'];
        }
      )


  }

   get canShowConsultationList(): boolean {
    return this.showConsultationList;
  }

  

  public handleAssignment():void {
    this.modalService.dismissAll();
    this.notificationService.notify( NotificationType.SUCCESS,` ${this.patient.firstName} ${this.patient.firstName} affecté avec succès`);
  }

  public handleSaveEvacuation():void {
    this.modalService.dismissAll();
    this.notificationService.notify( NotificationType.SUCCESS,` ${this.patient.firstName} ${this.patient.firstName} evacué avec succès`);
  }
 
  public handleDeathSaveEvent(): void {
    this.modalService.dismissAll();
    this.notificationService.notify( NotificationType.SUCCESS,` ${this.patient.firstName} ${this.patient.firstName} déclaré mort avec succès`);
  }

  public onPatientDeath(patientDeathFormRef) {
    this.modalService.dismissAll();
    Swal.fire({
      title: `êtes vous sur de de vouloir declarer le patient ${this.patient.firstName} ${this.patient.lastName} Mort ?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'oui',
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
       this.modalService.open(patientDeathFormRef, {size: 'md'})
      } else if (result.isDenied) {
        Swal.fire('')
      }
    
    })
  }
  
  public onOpenModal(addFormContent, size:string, centered? : boolean) {
        this.modalService.open(addFormContent, { size: size, centered: centered});
  }

  changeNewExaminationValue(){
    this.newExamination = !this.newExamination;
  }
  
  openExaminationForm(addFormContent, size:string) {
    
    this.modalService.open(addFormContent, { size: size });
  }

  updateExaminationNuber(patientId?:number){
    this.examinationService.getExaminationNumberByAdmissionId(this.admissionID).subscribe(
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
    this.prescriptionService.getPrescriptionNumberByPatientId(this.admissionID).subscribe(
      (response : any) => {
        this.patientPrescriptionNumber = response;
        this.items2[2]["badge"]["text"] = this.patientPrescriptionNumber.toString();
      }
    )
  }

  updatePatientExamenNumber(admissionId?:number){
    this.examService.getAnalysisRequestNumberByPatientId(this.admissionID).subscribe(
      (response : any) => {
        this.patientExamNumber = response;
        this.items2[3]["badge"]["text"] = this.patientExamNumber.toString();
      }
    )
  }

  createExaminationEvent() {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,"Consultation ajoutée avec succès");
    this.updateExaminationNuberEvent.emit();
    this.updateExaminationNuber();
    this.updatePatientExamenNumber();
    this.changeNewExaminationValue()
    }

  addConstantType() {
    this.modalService.dismissAll();
    this.notificationService.notify( NotificationType.SUCCESS,"Constante ajoutée avec succès");
    this.updatePattientConstantNumber();
  }

  handleAddPrescriptionEvent(){
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Ordonnance prescrite avec succès"
    );
    this.updatePatientPrescriptionNumber();
  }

  public ChooseLaboratoryType(exameFormContent,laboratoryType : boolean) : void {
    this.isLaboratoryExamenType = laboratoryType;
    this.modalService.dismissAll();
    this.modalService.open(exameFormContent, { size: 'xl' });
  }

  private retrieveAdmission(admissionID: number): void {
    console.log(admissionID);
    
    this.subscriptions.add(
      this.admissionService.retrieve(admissionID).subscribe(
          (response: any) => {
            this.admission = response;
            console.log(this.admission);
            this.retrievePatient(this.admission.patientId);
          }
      )
    )
  }

  private retrievePatient(patientID: number): void {
    this.subscriptions.add(
      this.patientService.retrieve(patientID).subscribe(
        (response: any) => {
          this.patient = response;
          this.patientId = this.patient.id;
          this.initialize();
        }
      )
    )
  }

  private initialize(): void {
    this.showConsultationList = true;
    this.showConstantList = true;
    this.updateExaminationNuber(this.admissionID);
    this.updatePattientConstantNumber(this.patient.id);
    this.updatePatientPrescriptionNumber(this.admissionID)
    this.updatePatientExamenNumber(this.admissionID)
  }
}