import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { create } from "domain";
import { Subscription } from "rxjs";
import { ActService } from "src/app/act/act/service/act.service";
import { GMHISHospitalizationRequestPartial } from "src/app/hospitalization/api/domain/request/gmhis-hospitalization-request";
import { InsuranceService } from "src/app/insurance/insurance.service";
import { GMHISInsuredService } from "src/app/insured/service/insured-service.service";
import { GMHISPatientType, Patient } from "src/app/patient/patient";
import { PatientService } from "src/app/patient/patient.service";
import { PracticianService } from "src/app/practician/practician.service";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHISKeyValue, GMHISNameAndID } from "src/app/shared/models/name-and-id";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { GMHISQuotationAmounts, GMHISQuotationCreate, GMHISQuotationPartial } from "../api/domain/gmhis.quotation";
import { GMHISQuotationItemCreate, GMHISQuotationItemPartial } from "../api/domain/gmhis.quotation.item";
import { GMHISQuotationFeatureService } from "../api/service/gmhis.quotation.feature.service";
import { GMHISQuotationService } from "../api/service/gmhis.quotation.service";

@Component({selector: 'gmhis-quotation-create-update', templateUrl: './gmhis-quotation-create-update.component.html', styleUrls:['./gmhis-quotiation-create-update.component.scss'],providers: [GMHISQuotationFeatureService] })
export class GMHISQuotationCreateUpdate implements OnInit, OnDestroy {

    @Input() patientID: number = 1;

    @Input() hospitalizationRequest: GMHISHospitalizationRequestPartial;

    @Input() showHeader?: boolean;

    @Input() quotation: GMHISQuotationPartial;
    @Input() quotationItems: GMHISQuotationItemPartial[];

    quotationFieldGroup: FormGroup = new FormGroup({});
    quotationItemFieldGroup: FormGroup;

    quotationIntems: GMHISQuotationPartial[];

    // TODO:  Change any to better type for acts
    acts: any[];

    insurrances: GMHISNameAndID[];

    patientType: GMHISPatientType;

    practicians: any[];

    patientTypes: GMHISKeyValue[] = [
        {key: GMHISPatientType.CASH_PATIENT, value:GMHISPatientType.CASH_PATIENT},
        {key: GMHISPatientType.INSURED_PATIENT, value:GMHISPatientType.INSURED_PATIENT},
    ]

    applyCMU: boolean = false;

    subscriptions: Subscription = new Subscription();

    patients: Patient[];
    patientInsureds: any[];

    insurranceName?: string;
    insurranceCoverage: undefined | number;
    insured: any;

    totalAmount: GMHISQuotationAmounts;
    formSubmitted: boolean;

    discountAmount: number;
    netToPay: number = 0;

    hospitalizationTypes: any[] = [
        {key: 2, value: 'Apendicentomie'},
      ]

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private actService: ActService,
        private insuranceService: InsuranceService,
        private practicianService: PracticianService,
        private quotationService: GMHISQuotationService,
        private featureService : GMHISQuotationFeatureService,
        private insuredService: GMHISInsuredService,
        private patientService: PatientService,
        private notificationService: NotificationService,
        private modalService: NgbModal,
         ){}
   
    ngOnInit(): void {
        this.initialize();
        this.findInssurance();  
        if(!GmhisUtils.isNull(this.hospitalizationRequest)) this.setFormFields(); 
        if(GmhisUtils.isNull(this.showHeader)) this.showHeader = true;


        if(!GmhisUtils.isNull(this.quotationItems)) {
            this.setFormArrayFields(this.quotationItems);
            this.calculateAmount();
        }   
        
        if(!GmhisUtils.isNull(this.quotation)){ 
            console.log(this.quotation);
                                   
            this.setFieldsForm(this.quotation);
            if(this.quotation.cmuPart > 0) {
                this.applyCMU = true;
                this.totalAmount.cmuPart = this.quotation.cmuPart;
            } 
            if(!GmhisUtils.isNull(this.quotation.insuranceID)) { 
                this.onSelectPatientType(GMHISPatientType.INSURED_PATIENT);
                this.quotationFieldGroup.get('patientType').setValue(GMHISPatientType.INSURED_PATIENT);   
            }
            this.defaultAmounts();
        }
    }


    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public onSelectAct(actID: any, formArrayRowID): void {
        let act = this.acts.find(act => act.id === actID);
        this.quotationItemsFormArray.controls[formArrayRowID].get('unitPrice').setValue(act.amount);
         this.calculateAmount();
    }

    public onSelectPatientType(patientType: GMHISPatientType): void {
        this.patientType = patientType;
        if (this.patientType === GMHISPatientType.INSURED_PATIENT){
            this.quotationFieldGroup.get("insuranceID").setValidators(Validators.required);
            this.quotationFieldGroup.updateValueAndValidity();
        } else if (this.patientType === GMHISPatientType.CASH_PATIENT) {
            this.quotationFieldGroup.get("insuranceID").clearValidators();
            this.quotationFieldGroup.updateValueAndValidity(); 
        }
    }

    public onApplyCMU(event : any){
        this.applyCMU = event.target.checked;
        
    }

    public isInsuredPatient(): boolean {
        return this.patientType === GMHISPatientType.INSURED_PATIENT;
    }

    public onSelectInsurance(event):void {
        this.insured = event;
         this.insurranceCoverage = event.coverage;  
         this.insurranceName = this.insured.insuranceName;
    }

    public isApplyCnam(): boolean {
        return this.applyCMU;
    }

    public addItem(): void {  
        
        const  quotationItemFieldGroup = this.fb.group( {
        actId: new FormControl(null, Validators.required),
        quantity: new FormControl(1, Validators.required),
        unitPrice: new FormControl(null, Validators.required),
        cmuAmount: new FormControl(null),
        cmuPercent: new FormControl(null),
        practicianID: new FormControl(null)
        })

        this.quotationItemsFormArray.push(quotationItemFieldGroup);
        this.calculateAmount();
    }

    public removeItem(itemIndex: number): void {
        this.quotationItemsFormArray.removeAt(itemIndex);
    }

    private defaultAmounts(): void {
        this.totalAmount.insurancePart = this.quotation.insurancePart,
        this.totalAmount.moderatorTicket = this.quotation.moderatorTicket;
        this.totalAmount.netToPay = this.quotation.moderatorTicket ? this.quotation.moderatorTicket : this.quotation.totalAmount
        this.insurranceName = this.quotation.insuranceName;
        this.netToPay = this.quotation.netToPay;
        if (this.quotation.discount){
            this.discountAmount = this.quotation.discount;
        }
    }

    private buildfieldGroup(): void {
        this.quotationFieldGroup = this.fb.group ({
            affection: new FormControl('', Validators.required),
            indication: new FormControl(''),
            insuranceID: new FormControl(''),
            patientType: new FormControl(null),
            insured: new FormControl(null),
            patientID: new FormControl(null, Validators.required),
            quotationItems: this.fb.array([])
        })
    }

    get patientIDField() {return this.quotationFieldGroup.get('patientID')}
    get affection() {return this.quotationFieldGroup.get('affection')}
    get insurance() {return this.quotationFieldGroup.get('insuranceID')}

    get quotationItemsFormArray() : FormArray{
        return this.quotationFieldGroup.controls["quotationItems"] as FormArray;
      }

      // TODO: pas de code d'acte ni de numero d'acte, recuperer cela avec l'id de l'acte

      private createMode(): boolean {
          return GmhisUtils.isNull(this.quotation?.id)
      }
   
      private createUpdateData(): GMHISQuotationCreate {
        const formData = this.quotationFieldGroup.value;          
        const createData = this.buildCreateQuotationData(formData);
        
        createData.totalAmount = this.totalAmount.totalAmount;
        createData.moderatorTicket = this.totalAmount.moderatorTicket;
        createData.cmuPart = this.totalAmount.cmuPart;
        createData.insurancePart = this.totalAmount.insurancePart;
        createData.netToPay = this.totalAmount.netToPay;
        if (this.insured) createData.insuranceID = this.insured.insuranceId;
        if (this.discountAmount){
            createData.discount = this.discountAmount;
            createData.netToPay = this.totalAmount.netToPay - this.discountAmount;
        }
        
        return createData;
      }

      private create(): void {
       
        const createData = this.createUpdateData();  
        console.log(createData);
              
        this.subscriptions.add(
            this.quotationService.create(createData).subscribe(
                {
                    next: (quotationCreated: any) => {
                        this.modalService.dismissAll();
                        this.router.navigateByUrl('/hospitalization');
                        this.notificationService.notify(NotificationType.SUCCESS,'Facture Proformat Crée');
                    },
                    error: (error: HttpErrorResponse) => {
                        this.notificationService.notify(NotificationType.ERROR, error.message)
                    }
                }
        ))
      }

      private buildCreateQuotationItemData(formData: any): GMHISQuotationItemCreate {
        return {
            actId: formData.actId,
            quantity: formData.quantity,
            totalAmount: formData.quantity * formData.unitPrice,
            cmuAmount: formData.cmuAmount,
            cmuPercent: formData.cmuPercent,
            insurancePercent: formData.insurancePercent,
            moderatorTicket: formData.moderatorTicket,
            practicianID: formData.practicianID
        }
    }

      private update(): void {
        const updateData = this.createUpdateData();
        
        this.subscriptions.add(
            this.quotationService.update(this.quotation.id,updateData).subscribe(
                {
                    next: (quotationCreated: any) => {
                        this.modalService.dismissAll();
                        this.router.navigateByUrl('/hospitalization');
                        this.notificationService.notify(NotificationType.SUCCESS,'Facture Proformat Modifiée');
                    },
                    error: (error: HttpErrorResponse) => {
                        this.notificationService.notify(NotificationType.ERROR, error.message)
                    }
                }
        ))
      }

    public isFormValid(): boolean {
        return this.quotationFieldGroup.valid;
    }

    public save(): void {
        this.calculateAmount();
       
        this.formSubmitted = true;
        if(this.quotationItemsFormArray.length == 0) {
            this.notificationService.notify(NotificationType.ERROR, 'Veuillez sélectionnez une prestation');
            return
        }
        if(!this.isFormValid()) return

        if (this.createMode()) this.create();
        else this.update();

      }

    public onCalculAmount(): void {
        this.calculateAmount();
    }

    public isWrongDiscount():boolean {
        if(!GmhisUtils.isNull(this.totalAmount)) return this.discountAmount > this.totalAmount.netToPay;
        else return false;
    }

    public onHospitalizationTypeChange(type: any) {
        let actArr = [
            {actID: 276,quantity: 1,  unitPrice: 90000}
            ,{actID: 278,quantity: 1,  unitPrice: 140000}
            ,{actID: 279,quantity: 1,  unitPrice: 50000}
            ,{actID: 280,quantity: 1,  unitPrice: 126000}
            ,{actID: 281,quantity: 1,  unitPrice: 40000}
            ,{actID: 282,quantity: 1,  unitPrice: 36000}
            ,{actID: 283,quantity: 1,  unitPrice: 9800}
            ,{actID: 284,quantity: 1,  unitPrice: 10000}

            ]
        this.setFormArrayFields(actArr);
      }
  
    private calculateAmount(): void {
        const formData = this.quotationFieldGroup.value;
        let quotationItems =  formData.quotationItems;

        this.totalAmount = this.featureService.quotationTotalAmount(quotationItems, this.patientType, this.isApplyCnam(),this.insurranceCoverage);
        this.netToPay = this.totalAmount.netToPay;
        if (this.discountAmount){
            if(this.isWrongDiscount()) return;
            this.netToPay = this.totalAmount.netToPay - this.discountAmount;
        }
      }

     private buildCreateQuotationData(formData:any): GMHISQuotationCreate {
        const quotationItemsCreate : GMHISQuotationItemCreate[] = [];
        let totalAmount = 0;

        formData.quotationItems.forEach( quotationItem => {
            quotationItemsCreate.push(this.buildCreateQuotationItemData(quotationItem));
            let itemTotalAmount = quotationItem.quantity * quotationItem.unitPrice;
            totalAmount += itemTotalAmount;
        })

            return {
                affection: formData.affection,
                indication: formData.indication,
                insuranceID: formData.insuranceID,
                patientID: formData.patientID,
                totalAmount: totalAmount,
                moderatorTicket: formData.moderatorTicket,
                quotationItems: quotationItemsCreate
            }
    }

   

    private buildQutationItemFields() : void {
        this.quotationItemFieldGroup = this.fb.group( {})
    }
    
        private findActs() {
            this.actService.getListOfActiveAct().subscribe((response: any[]) => {            
                this.acts = response;
            })
        }
        
        private findInssurance(){
            this.subscriptions.add(
            this.insuranceService.getAllInsuranceActive().subscribe((response: GMHISNameAndID[]) => {this.insurrances = response})
            )
        }
    
        private findpracticians(){
            this.subscriptions.add(
            this.practicianService.findPracticianSimpleList().subscribe((response: any[]) => this.practicians = response)
            )
        }
    
        private findPatientInsured(patientID: number){
            this.subscriptions.add(
                this.insuredService.getInsuredByPatientId(patientID).subscribe((response: any[]) =>{
                    this.patientInsureds = response;
                    if (!GmhisUtils.isNull(this.quotation)) {
                        this.insured = this.patientInsureds.find((insured) => insured.insuranceId === this.quotation.insuranceID);   
                        this.quotationFieldGroup.get('insured').setValue(this.insured);  
                        this.onSelectInsurance(this.insured);   
                    }
                })
        )
        }
    
        private findPatients(){
            this.subscriptions.add(
                this.patientService.findPatient().subscribe((response: any[]) =>{
                    this.patients = response;                
                })
        )
        }

    private initialize(): void {
        this.buildfieldGroup();
        this.buildQutationItemFields();
        this.findActs();
        this.findpracticians();
        this.findPatients();
        this.findPatientInsured(this.patientID);
      }

    private setFormFields(): void {
        this.quotationFieldGroup.get('patientID').setValue(this.hospitalizationRequest.patientID);
    }

    private setFieldsForm(data: any): void {
        this.quotationFieldGroup.get('affection').setValue(data.affection);
        this.quotationFieldGroup.get('indication').setValue(data.indication);
        this.quotationFieldGroup.get('insuranceID').setValue(data.insuranceID);
        this.quotationFieldGroup.get('patientID').setValue(data.patientID);
      }

      private setFormArrayFields(data: any): void {
        data.forEach((el,i )=> {
            this.addItem();
            this.quotationItemsFormArray.controls[i].get('actId').setValue(el.actID);
            this.quotationItemsFormArray.controls[i].get('quantity').setValue(el.quantity);
            this.quotationItemsFormArray.controls[i].get('unitPrice').setValue(el.unitPrice);
            this.quotationItemsFormArray.controls[i].get('cmuAmount').setValue(el.cmuAmount);
            this.quotationItemsFormArray.controls[i].get('cmuPercent').setValue(el.cmuPercent);
            this.quotationItemsFormArray.controls[i].get('practicianID').setValue(el.practicianID);
            ;
        })
      }
}