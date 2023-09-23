import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Patient } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IPatientConstant } from './models/patient-constant';
import { PatientConstantService } from './service/patient-constant.service';

@Component({selector: 'app-patient-constant',templateUrl: './patient-constant.component.html',providers: [NgbActiveModal] })
export class PatientConstantComponent implements OnInit {
  private readonly POUL_MIN = 60;
  private readonly POUL_MAXI = 80;
  private readonly POUL_LIMIT_MIN_DANGER = 50; // Si la valeur est < à 50 pls/min, on parle de bradycardie
  private readonly POUL_LINIT_MAX_DANGER = 100;// Si la valeur est > à 100 pls/min, on parle de tachycardie

  private readonly BLOOD_PRESSURE_NORMAL = '140/90'; //La valeur doit être inférieure à 140/90 mmHg pour un adulte.
  private readonly BLOOD_PRESSURE_LIMIT_MIN_DANGER = '100/50'; //Au dessus de 140/90 mmHg, on parle d’hypertension artérielle
  private readonly BLOOD_PRESSURE_LIMIT_MAX_DANGER = '140/90'; //En dessous de 100/50 mmHg, on parle d’hypotension artérielle.

  private readonly TEMPERATURE_NORMAL = 37 ; //La température centrale usuelle du corps humain est de 37°C. Il s’agit d’une valeur au repos.
  private readonly TEMPERATURE_LIMIT_MIN_DANGER = 36.5;
  private readonly TEMPERATURE_LIMIT_MAX_DANGER = 37.5;

  private subs = new SubSink();

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
  ];


  showloading: boolean = false;
  currentIndex: number;
  PatientconstantDomain: any;
  patient: Patient;

  @Input()
  patientId: number;

  @Input()
  newConstantsButtonVisibled: boolean = true ;

  @Input() PaginationSize = 10 ;

  @Output('updatePattientConstantNumber') updatePattientConstantNumber: EventEmitter<any> =
  new EventEmitter();
  uniquefieldHeader: string[];
  uniqueTableHeaders: any[];

  private openConstantModalRef: NgbModalRef;

  constructor(
    private route : ActivatedRoute,
    private patientConstantService : PatientConstantService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private patientService : PatientService,
    private datePipe : DatePipe
    ) { }

  ngOnInit(): void {  
    this.initform();
    if (this.patientId) {      
      this.getPatientDetailsByPatientId(this.patientId)
    }
    this.route.paramMap.subscribe(
      params => {
        const id = Number(params.get('patientId'));
        this.getPatientDetailsByPatientId(id);
      }
      ) 
  }

  public controlConstants(constant: string):void{
    console.log(constant); 
  }
 
  initform() {
    this.searchForm = new FormGroup({
      patientId: new FormControl(null),
      date: new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(25),
      sort: new FormControl('id,desc'),
    });
  }

  onSearchValueChange(): void {
    this.getPatientConstant();
  }
  
  public getPatientConstant() {
    this.showloading = true;
    if (this.patientId) {
      this.searchForm.get("patientId").setValue(this.patientId);
    }
    this.subs.add(
      this.patientConstantService.findAll(this.searchForm.value).
      pipe(
        map((response: PageList) => {          
            let data = response.items;  
            console.log(data);       
            const constantgroupedByDate : any[] = data.reduce((constantGroup: {[key: string]: any[]}, item) => {
              if (!constantGroup[item.takenAt]) {
               constantGroup[item.takenAt] = [];
              }
              constantGroup[item.takenAt].push(item);      
              return constantGroup;
             }, {});             
             let constantTab  = [];
             let TableHeader  = [];
             Object.values(constantgroupedByDate).forEach((el, i) => {               
              let newObject = {};
              newObject['date'] = this.datePipe.transform(new Date(el[0]['takenAt'])) ;
               el.forEach((item) => {                 
                newObject[`${item['constant']}`] = item['value'];
               })
               constantTab.push(newObject);
             } )             
             constantTab.forEach((item) => {
              Object.keys(item).forEach(key => {
                TableHeader.push(key);
              })
             })
                             
             this.uniqueTableHeaders = [...new Set(TableHeader)];
             ;

             response.items = constantTab;
          return response;
        })
    )
      .subscribe(
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
    this.getPatientConstant();
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getPatientConstant();
  }

  openAddForm(addFormContent) {
    this.openConstantModalRef = this.modalService.open(addFormContent, { size: 'lg' });
  }

  openUpdateForm(updateFormContent, item?) {
    this.PatientconstantDomain = item;
    this.modalService.open(updateFormContent, { size: 'lg' });
  }

  openDetailsForm(constantListFormContent,item){
    this.PatientconstantDomain = item;
    if (this.patientId == null) {
          this.patientId = this.patient.id;
    }
    this.modalService.open(constantListFormContent, { size: 'lg' });
  }

  addConstantType() {
    this.openConstantModalRef.close();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'Constante ajoutée avec succès'
    );
    this.getPatientConstant();
    this.updatePattientConstantNumber.emit();
  }

  updateConstantDomain() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'Constante modifieé avec succès'
    );
    this.getPatientConstant();
  }

  rowSelected(constant: IPatientConstant, index: number) {
    this.currentIndex = index;
    this.PatientconstantDomain = constant;
  }

  getPatientDetailsByPatientId(patientId : number){
    this.searchForm.get("patientId").setValue(patientId);
    this.getPatientConstant();
    this.patientService.retrieve(patientId).subscribe(
      (response : any) => {
        this.patient = response;
      }
    )
  }

}
