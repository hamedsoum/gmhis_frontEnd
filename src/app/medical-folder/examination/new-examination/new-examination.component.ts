import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Admission, admissionCreateUpdate } from 'src/app/admission/model/admission';
import { AdmissionService } from 'src/app/admission/service/admission.service';
import { PathologyService } from 'src/app/pathalogy/services/pathology.service';
import { IPatient } from 'src/app/patient/patient';
import { SymptomService } from 'src/app/symptom/services/symptom.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IExaminationDto } from '../models/examination-dto';
import { ExaminationService } from '../services/examination.service';

enum ExamenType {
  INTERNAL = 'internal',
  EXTERNAL = 'external'
}

type ExamenTypeStr = 'internal' | 'external';

@Component({
  selector: 'app-new-examination',
  templateUrl: './new-examination.component.html',
  styleUrls: ['./new-examination.component.scss']
})
export class NewExaminationComponent implements OnInit {
   private subs = new SubSink();

    examinationForm: FormGroup;

    @Input() patient: IPatient;
   
    @Input() admissionId: number;
    @Input() admission: Admission;
  
    @Input() startDate: Date;

    @Output() addExamination: EventEmitter<any> = new EventEmitter();
    @Output() updateExamination: EventEmitter<any> = new EventEmitter();

   examinationDto: IExaminationDto;

  pathologies : Object;
  symptoms : Object;

  consultationTypes = [
    { id: 'p', value: 'Prémière consultation' },
    { id: 's', value: 'Consultation de surveillance' },
  ];

  invalidFormControls: any;

  public invalidFom = false;

  public formSubmitted = false;


  showloading: boolean;

  dayBetweenLastExaminationAndCurrentDate: number;

  public makePrescription: boolean = false;

  public examenType : boolean;
  constructor(
    private examinationService: ExaminationService,
    private pathologyService : PathologyService,
    private symptomService : SymptomService,
    private notificationService: NotificationService,
    private datepipe : DatePipe,
    private modalService: NgbModal,
    private admissionService: AdmissionService
  ) { }

  ngOnInit(): void {
    this.findActivePathologiesNameAndId();
    this.findActiveSymptomssNameAndId();
    this.initForm();
  }

  public onMakePrescription(): void {
    this.makePrescription = true;
  }

    /**
   * init form
   */
     initForm() {
      this.examinationForm = new FormGroup({
        date: new FormControl(this.datepipe.transform(new Date(), "MM-dd-yyyy")), 
        admission: new FormControl(this.admissionId),
        examinationReasons: new FormControl('', Validators.required),
        conclusion : new FormControl(''),
        id: new FormControl(0),
        startDate: new FormControl(this.startDate)
      })
    }

    get examinationType(){return this.examinationForm.get('examinationType');}
    get pathology(){return this.examinationForm.get('pathologies');}
    get conclusion(){ return this.examinationForm.get('conclusion');}
    get symptom(){return this.examinationForm.get('symptoms');}
    get examinationReasons(){return this.examinationForm.get('examinationReasons'); }
    get history(){return this.examinationForm.get('conclusion');}

    save() {        
        this.invalidFom = !this.examinationForm.valid;
        this.formSubmitted = true;        
        if (this.examinationForm.valid) {
          this.showloading = true;
          this.examinationDto = this.examinationForm.value;
          if (this.examinationDto.id) {
            this.subs.add(
              this.examinationService.updateExamination(this.examinationDto).subscribe(
                (response: IExaminationDto) => {
                  this.showloading = false;
                  this.notificationService.notify(NotificationType.SUCCESS,"Consultation modifiée avec succès");
                    this.updateExamination.emit();
                },
                (errorResponse: HttpErrorResponse) => {
                  this.showloading = false;
                  this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
                }
              )
            );
          } else {
            this.subs.add(
              this.examinationService.createExamination(this.examinationDto).subscribe(
                (response: any) => {
                  this.updateAdmissionTakeCareStatus();
                  this.showloading = false;
                  this.addExamination.emit();
                },
                (errorResponse: HttpErrorResponse) => {
                  this.showloading = false;
                  this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
                }
              )
            );
          }
        }
    }

    private findActivePathologiesNameAndId(){
      this.pathologyService.findActivePathologyNameAndId().subscribe(
        (response : any) => {
          this.pathologies = response;          
        },
        (errorResponse : HttpErrorResponse) => {
          this.showloading = false;
          this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message); 
        }
      )
    }

    private findActiveSymptomssNameAndId(){
      this.symptomService.findActiveSymptomNameAndId().subscribe(
        (response : any) => {
          this.symptoms = response;          
        },
        (errorResponse : HttpErrorResponse) => {
          this.showloading = false;
          this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message); 
        }
      )
    }

    onChooseLaboratory(addFormContent, size:string) {    
      if(this.examinationForm.get('examinationReasons').value == '') this.notificationService.notify(NotificationType.WARNING,'veuillez préciser le motif de la consultation avant de demander un examen !'); 
      else this.modalService.open(addFormContent, { size: size, centered : true });
    }

    onpenExamComplementary(examenComplementaryManager) {
      this.modalService.open(examenComplementaryManager, { size:'xl'});
    }

    onPrescriptionCreate(prescriptionCreateComponent): void {
      if(this.examinationForm.get('conclusion').value == '') this.notificationService.notify(NotificationType.WARNING,'veuillez renseigner le diagnostic de la consultation avant de prescrire une ordonnance !');
      else if(this.examinationForm.get('examinationReasons').value == '') this.notificationService.notify(NotificationType.WARNING,'veuillez préciser le motif de la consultation avant de demander un examen !'); 
      else this.modalService.open(prescriptionCreateComponent, { size: 'xl' });
    }

    ChooseLaboratoryType(exameFormContent : boolean) : void {
      this.modalService.open(exameFormContent, { size: 'xl' });
    }

    public onExamType(content : ExamenType | ExamenTypeStr) : void {
      this.examenType = false;      
      this.modalService.open(content, { size: 'xl' });
    }

    public onChooseExamen(examenForm) : void {
      this.examenType = false;      
      this.modalService.open(examenForm);
    }

    private updateAdmissionTakeCareStatus(): void {
        if (this.admission.takeCare === false) {
          this.admissionService.updateExaminationTakeCare(this.admission.id, true).subscribe(
            (response : any) => {
            },
            (errorResponse : HttpErrorResponse) => {
              this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message); 
            }
          )
        }  
    }

    addExam() {
      this.save();
      this.modalService.dismissAll();
      console.log("here");
      
      this.notificationService.notify( NotificationType.SUCCESS,"Examen demandé avec succès");
    }

    addPrescription(){
      this.save();
      this.modalService.dismissAll();
      this.notificationService.notify( NotificationType.SUCCESS,"Ordonnance prescrite avec succès");
    }


    
}
