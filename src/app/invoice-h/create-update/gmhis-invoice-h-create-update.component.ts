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
import { GMHISInvoiceHAmounts, GMHISInvoiceHCreate, GMHISInvoiceHPartial } from "../api/domain/gmhis.quotation";
import { GMHISInvoiceHItemCreate } from "../api/domain/gmhis.quotation.item";
import { GMHISInvoiceHFeatureService } from "../api/service/gmhis.invoice-h.feature.service";
import { GMHISInvoiceHService } from "../api/service/gmhis.invoice-h.service";

@Component({selector: 'gmhis-quotation-create-update', templateUrl: './gmhis-invoice-h-create-update.component.html', styleUrls:['./gmhis-invoice-h-create-update.component.scss'],providers: [GMHISInvoiceHFeatureService] })
export class GMHISInvoiceHCreateUpdate implements OnInit, OnDestroy {

    @Input() patientID: number = 1;

    invoiceHFieldGroup: FormGroup = new FormGroup({});
    invoiceHItemFieldGroup: FormGroup;

    quotationIntems: GMHISInvoiceHPartial[];

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

    totalAmount: GMHISInvoiceHAmounts;
    formSubmitted: boolean;

    constructor(
        private router: Router,
        private fb: FormBuilder,
         private actService: ActService,
         private insuranceService: InsuranceService,
         private practicianService: PracticianService,
         private quotationService: GMHISInvoiceHService,
         private featureService : GMHISInvoiceHFeatureService,
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
        this.invoiceHItemsFormArray.controls[formArrayRowID].get('unitPrice').setValue(act.amount);
         
    }

    public onSelectPatientType(patientType: GMHISPatientType): void {
        this.patientType = patientType;
        if (this.patientType === GMHISPatientType.INSURED_PATIENT){
            this.invoiceHFieldGroup.get("insuranceID").setValidators(Validators.required);
            this.invoiceHFieldGroup.updateValueAndValidity();
        } else if (this.patientType === GMHISPatientType.CASH_PATIENT) {
            this.invoiceHFieldGroup.get("insuranceID").clearValidators();
            this.invoiceHFieldGroup.updateValueAndValidity(); 
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
        
        const  invoiceItemFieldGroup = this.fb.group( {
        actId: new FormControl(null, Validators.required),
        quantity: new FormControl(1, Validators.required),
        unitPrice: new FormControl(null, Validators.required),
        cmuAmount: new FormControl(null),
        cmuPercent: new FormControl(null),
        // insurancePercent: new FormControl(null),
        practicianID: new FormControl(null)
        })

        this.invoiceHItemsFormArray.push(invoiceItemFieldGroup);
        
    }

    public removeItem(itemIndex: number): void {
        this.invoiceHItemsFormArray.removeAt(itemIndex);
    }

    private buildfieldGroup(): void {
        this.invoiceHFieldGroup = this.fb.group ({
            affection: new FormControl('', Validators.required),
            indication: new FormControl(''),
            insuranceID: new FormControl(''),
            patientID: new FormControl(null, Validators.required),
            invoiceHItems: this.fb.array([])
        })
    }

    get patientIDField() {return this.invoiceHFieldGroup.get('patientID')}
    get affection() {return this.invoiceHFieldGroup.get('affection')}
    get insurance() {return this.invoiceHFieldGroup.get('insuranceID')}


    get invoiceHItemsFormArray() : FormArray{
        return this.invoiceHFieldGroup.controls["invoiceHItems"] as FormArray;
      }

      // TODO: pas de code d'acte ni de numero d'acte, recuperer cela avec l'id de l'acte

   

    public save(): void {
        this.calculateAmount();
        const formData = this.invoiceHFieldGroup.value;
        const createData = this.buildCreateInvoiceHData(formData);
        

        createData.totalAmount = this.totalAmount.totalAmount;
        createData.moderatorTicket = this.totalAmount.moderatorTicket;
        createData.cmuPart = this.totalAmount.cmuPart;
        createData.insurancePart = this.totalAmount.insurancePart;
        
        if (this.insured) createData.insuranceID = this.insured.insuranceId;
        this.formSubmitted = true;
        if(this.invoiceHFieldGroup.valid){
            this.subscriptions.add(
                this.quotationService.create(createData).subscribe(
                    {
                        next: (quotationCreated: any) => {
                            this.router.navigateByUrl('/gmhis-invoice-h');
                            this.notificationService.notify(NotificationType.SUCCESS,'Facture Proformat Crée');
                        }
                    }
                )
            )
        }
       
    }

    public onCalculAmount(): void {
        this.calculateAmount();
    }

    private calculateAmount(): void {
        const formData = this.invoiceHFieldGroup.value;
        let quotationItems =  formData.invoiceHItems;

        this.totalAmount = this.featureService.quotationTotalAmount(quotationItems, this.patientType, this.isApplyCnam(),this.insurranceCoverage);
      }

     private buildCreateInvoiceHData(formData:any): GMHISInvoiceHCreate {
        const invoiceHItemsItemsCreate : GMHISInvoiceHItemCreate[] = [];
        let totalAmount = 0;

        formData.invoiceHItems.forEach( quotationItem => {
            invoiceHItemsItemsCreate.push(this.buildCreateInvoiceHItemData(quotationItem));
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
                invoiceHItems: invoiceHItemsItemsCreate
            }
    }

    private buildCreateInvoiceHItemData(formData: any): GMHISInvoiceHItemCreate {
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

    private buildQutationItemFields() : void {
        this.invoiceHItemFieldGroup = this.fb.group( {
          
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

}