import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ActService } from "src/app/act/act/service/act.service";
import { InsuranceService } from "src/app/insurance/insurance.service";
import { GMHISInsuredService } from "src/app/insured/service/insured-service.service";
import { GMHISPatientType, Patient } from "src/app/patient/patient";
import { PatientService } from "src/app/patient/patient.service";
import { PracticianService } from "src/app/practician/practician.service";
import { GMHISKeyValue, GMHISNameAndID } from "src/app/shared/models/name-and-id";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { GMHISQuotationAmounts, GMHISQuotationCreate, GMHISQuotationPartial } from "../api/domain/gmhis.quotation";
import { GMHISQuotationItemCreate } from "../api/domain/gmhis.quotation.item";
import { GMHISQuotationFeatureService } from "../api/service/gmhis.quotation.feature.service";
import { GMHISQuotationService } from "../api/service/gmhis.quotation.service";

@Component({selector: 'gmhis-quotation-create-update', templateUrl: './gmhis-quotation-create-update.component.html', styleUrls:['./gmhis-quotiation-create-update.component.scss'],providers: [GMHISQuotationFeatureService] })
export class GMHISQuotationCreateUpdate implements OnInit, OnDestroy {

    @Input() patientID: number = 1;

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

    insurranceCoverage: undefined | number;
    insured: any;

    totalAmount: GMHISQuotationAmounts;
    formSubmitted: boolean;

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
         ){}
   
    ngOnInit(): void {
        this.initialize();
        this.findInssurance();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public onSelectAct(actID: any, formArrayRowID): void {
        let act = this.acts.find(act => act.id === actID);
        this.quotationItemsFormArray.controls[formArrayRowID].get('unitPrice').setValue(act.amount);
         
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
        // insurancePercent: new FormControl(null),
        practicianID: new FormControl(null)
        })

        this.quotationItemsFormArray.push(quotationItemFieldGroup);
        
    }

    public removeItem(itemIndex: number): void {
        this.quotationItemsFormArray.removeAt(itemIndex);
    }

    private buildfieldGroup(): void {
        this.quotationFieldGroup = this.fb.group ({
            affection: new FormControl('', Validators.required),
            indication: new FormControl(''),
            insuranceID: new FormControl(''),
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

    private buildQutationItemFields() : void {
    this.quotationItemFieldGroup = this.fb.group( {
      
    })
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
            }  )
    )
    }

    private findPatientPatients(){
        this.subscriptions.add(
            this.patientService.findPatient().subscribe((response: any[]) =>{
                this.patients = response;                
            }  )
    )
    }
    
    private initialize(): void {
        this.buildfieldGroup();
        this.buildQutationItemFields();
        this.findActs();
        this.addItem();
        this.findpracticians();
        this.findPatientPatients();
        this.findPatientInsured(this.patientID);
      }

      calculateAmount(): void {
        const formData = this.quotationFieldGroup.value;
        let quotationItems =  formData.quotationItems;
        this.totalAmount = this.featureService.quotationTotalAmount(quotationItems, this.patientType, this.isApplyCnam(),this.insurranceCoverage);
       console.log(this.quotationFieldGroup);
        console.log(this.quotationFieldGroup.valid);

      }

    save(): void {
        const formData = this.quotationFieldGroup.value;
        const createData = this.buildCreateQuotationData(formData);
        
        let quotationItems =  formData.quotationItems;

        this.totalAmount = this.featureService.quotationTotalAmount(quotationItems, this.patientType, this.isApplyCnam(),this.insurranceCoverage);
        createData.totalAmount = this.totalAmount.totalAmount;
        createData.moderatorTicket = this.totalAmount.moderatorTicket;
        createData.cmuPart = this.totalAmount.cmuPart;
        createData.insurancePart = this.totalAmount.insurancePart;
        
        if (this.insured) createData.insuranceID = this.insured.insuranceId;
        this.formSubmitted = true;
        if(this.quotationFieldGroup.valid){
            this.subscriptions.add(
                this.quotationService.create(createData).subscribe(
                    {
                        next: (quotationCreated: any) => {
                            this.router.navigateByUrl('/gmhis-quotations');
                            this.notificationService.notify(NotificationType.SUCCESS,'Facture Proformat Crée');
                        }
                    }
                )
            )
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
}