import { HttpErrorResponse } from '@angular/common/http';
import {Component,EventEmitter,Input, OnInit,Output } from '@angular/core';
import {FormArray,FormBuilder,FormControl,FormGroup,} from '@angular/forms';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { IConstant } from '../../constantDomain/constant.model';
import { IConstantType } from '../../constantType/constant-type.model';
import { ConstantTypeService } from '../../constantType/constant-type.service';
import { IPatientConstantDto as constantCreateData } from '../models/patient-constant-dto';
import { PatientConstantService } from '../service/patient-constant.service';

@Component({selector: 'app-patient-constant-form',templateUrl: './patient-constant-form.component.html'})
export class CreateConstantFormComponent implements OnInit {
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

  @Input() constantType: IConstantType;
  @Input() details: boolean;
  @Input() patientId: number;
  
  @Output() addConstantType = new EventEmitter();
  @Output() updateConstantType = new EventEmitter();

  public ConstantsCreateForm: FormGroup;
  public createConstantFormIsInvalid:boolean = false;
  public createConstantFormIsSubmitted:boolean = false;
  public loading: boolean = false;

  private constantCreateData : constantCreateData;
  public constantData: IConstant[];

  constructor(private fb: FormBuilder,private constantTypeService: ConstantTypeService,private notificationService: NotificationService,private patientConstantService : PatientConstantService) {}

  ngOnInit(): void {    
    this.buildConstantCreateForm();
    this.getConstant();
    if (this.constantType) {
      this.ConstantsCreateForm.patchValue(this.constantType);
    }
  }

  private buildConstantCreateForm() {
    this.ConstantsCreateForm = this.fb.group({
      id: new FormControl(null),
      constants: this.fb.array([this.buildcreateConstantForm()]),
    });
  }
  get name() {return this.ConstantsCreateForm.get('name');}

  get constantFormArray(): FormArray {return <FormArray>this.ConstantsCreateForm.get('constants') as FormArray;}

  buildcreateConstantForm(): FormGroup {
    return this.fb.group({
      value: [''],
      description: [''],
      constant: [null],
      patient : [this.patientId]
    });
  }

  addCreateConstantFormBuilded() {
    this.constantFormArray.push(this.buildcreateConstantForm());
  }

  removeCreateConstantForm(index: number) {
    this.constantFormArray.removeAt(index);
  }

  save() {
    this.createConstantFormIsInvalid = !this.ConstantsCreateForm.valid;
    this.createConstantFormIsSubmitted = true;
    if (this.ConstantsCreateForm.valid) {
      this.constantCreateData =  this.ConstantsCreateForm.get("constants").value;
      if (this.constantCreateData.id) {
        this.subs.add(
          this.patientConstantService.updatePatientConstant(this.constantCreateData)
            .subscribe(
              (response: constantCreateData) => {
                this.loading = false;
                this.updateConstantType.emit();
              },
              (errorResponse: HttpErrorResponse) => {
                this.loading = false;
                this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);
              }
            )
        );
      } else {
        this.subs.add(
          this.patientConstantService
            .createPatientConstant(this.constantCreateData)
            .subscribe(
              (response: constantCreateData) => {
                this.loading = false;
                this.addConstantType.emit();
              },
              (errorResponse: HttpErrorResponse) => {
                this.loading = false;
                this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);
              }
            )
        );
      }
    }
  }

  getConstant() {
    this.constantTypeService.getNameAndIdOfConstanteTypeActive().subscribe(
      (res) => {
        this.constantData = res;
        let defaultConstant = ["Température","TENSION ARTÉRIELLE  GAUCHE","TENSION ARTÉRIELLE dROIT","pouls","Poids","taille"];
        let newConstantData = [];
        let newConstantData2 = [];

          defaultConstant.forEach((elD) => {
            newConstantData = this.constantData.filter(el => el.name.toLowerCase() === elD.toLocaleLowerCase());
            newConstantData2.push(newConstantData[0]);
          })
      
            newConstantData2.forEach((el, index) => {
              this.addCreateConstantFormBuilded();              
              this.constantFormArray.controls[index]
              .get('constant')
              .setValue(el.id);
        })
        
      },
      (errorResponse: HttpErrorResponse) => {
        this.loading = false;
        this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
