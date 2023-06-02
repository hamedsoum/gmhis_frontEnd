import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PathologyService } from 'src/app/pathalogy/services/pathology.service';
import { IPatient } from 'src/app/patient/patient';
import { SymptomService } from 'src/app/symptom/services/symptom.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IExamination } from '../models/examination';
import { IExaminationDto } from '../models/examination-dto';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-new-examination',
  templateUrl: './new-examination.component.html',
  styleUrls: ['./new-examination.component.scss']
})
export class NewExaminationComponent implements OnInit {
  private subs = new SubSink();

   /**
   * the form
   */
    examinationForm: FormGroup;

    @Input() patientId: number;

    @Input() patient: IPatient;
   
    @Input() admissionId: number;
  
    @Input() startDate: Date;

    @Output() addExamination: EventEmitter<any> = new EventEmitter();
  @Output() updateExamination: EventEmitter<any> = new EventEmitter();

      /**
   * consultation object
   */
  examinationDto: IExaminationDto;

  pathologies : Object;
  symptoms : Object;

  /**
   * define consultation type option
   */
  consultationTypes = [
    { id: 'p', value: 'Prémière consultation' },
    { id: 's', value: 'Consultation de surveillance' },
  ];


  /** 
   * invalid from controls
   */
  invalidFormControls: any;

  /**
   * the form valid state
   */
   public invalidFom = false;

   /**
    * check if the form is submitted
    */
   public formSubmitted = false;

   // => examenType has two values, true for internal examinations and false for external examinations
   examenType: boolean;

  showloading: boolean;
  constructor(
    private examinationService: ExaminationService,
    private pathologyService : PathologyService,
    private symptomService : SymptomService,
    private notificationService: NotificationService,
    private datepipe : DatePipe,
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
    this.findActivePathologiesNameAndId();
    this.findActiveSymptomssNameAndId();
    this.initForm();
    console.log(this.admissionId);
  }

    /**
   * init form
   */
     initForm() {
      this.examinationForm = new FormGroup({
        date: new FormControl(this.datepipe.transform(new Date(), "MM-dd-yyyy")), 
        admission: new FormControl(this.admissionId),
        conclusion: new FormControl('', Validators.required),
        examinationReasons: new FormControl('', Validators.required),
        id: new FormControl(0),
        startDate: new FormControl(this.startDate),
        pratician : new FormControl(1)
        // conclusionExamResult: new FormControl(''),
        // examinationType: new FormControl('', Validators.required),
        // history: new FormControl('', Validators.required),
        // pathologies: new FormControl(null, Validators.required ),
        // symptoms: new FormControl(null, Validators.required),
       
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
        console.log(this.examinationDto);
  
        if (this.examinationDto.id) {
          this.subs.add(
            this.examinationService.updateExamination(this.examinationDto).subscribe(
              (response: IExaminationDto) => {
                this.showloading = false;
                this.updateExamination.emit();
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
        } else {
          this.subs.add(
            this.examinationService.createExamination(this.examinationDto).subscribe(
              (response: any) => {
                this.showloading = false;
                this.addExamination.emit();
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
      }
    }

    private findActivePathologiesNameAndId(){
      this.pathologyService.findActivePathologyNameAndId().subscribe(
        (response : any) => {
          this.pathologies = response;
          console.log("pathologies", this.pathologies);
          
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

    private findActiveSymptomssNameAndId(){
      this.symptomService.findActiveSymptomNameAndId().subscribe(
        (response : any) => {
          this.symptoms = response;
          console.log("pathologies", this.symptoms);
          
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

    onChooseLaboratory(addFormContent, size:string) {    
      if(this.examinationForm.get('examinationReasons').value == ''){
        this.notificationService.notify(
          NotificationType.ERROR,
         'veuillez préciser le motif de la consultation avant de demander un examen'
        ); 
      }else{
        this.modalService.open(addFormContent, { size: size, centered : true });
      }
    }

    ChooseLaboratoryType(exameFormContent,laboratoryType : boolean) : void {
      this.examenType = laboratoryType;
      // this.modalService.dismissAll();
      this.modalService.open(exameFormContent, { size: 'xl' });
    }


    addExam() {
      this.modalService.dismissAll();
      this.save();
      this.addExamination.emit();
        }
    
}
