import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { id } from "date-fns/locale";
import { ActService } from "src/app/act/act/service/act.service";
import { InsuranceService } from "src/app/insurance/insurance.service";
import { GMHISPatientType } from "src/app/patient/patient";
import { PracticianService } from "src/app/practician/practician.service";
import { GMHISKeyValue, GMHISNameAndID } from "src/app/shared/models/name-and-id";
import { GMHISQuotationPartial } from "../api/domain/gmhis.quotation";

@Component({selector: 'gmhis-quotation-create-update', templateUrl: './gmhis-quotation-create-update.component.html', styleUrls:['./gmhis-quotiation-create-update.component.scss']})
export class GMHISQuotationCreateUpdate implements OnInit {

    quotationFieldGroup: FormGroup;
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

    applyCnam: boolean = false;

    constructor(
        private fb: FormBuilder,
         private actService: ActService,
         private insuranceService: InsuranceService,
         private practicianService: PracticianService){}

    ngOnInit(): void {
        this.initialize();
        this.findInssurance();
    }
    public onSelectAct(actID: any, formArrayRowID): void {
        let act = this.acts.find(act => act.id === actID);
        this.quotationItemsFormArray.controls[formArrayRowID].get('unitPrice').setValue(act.amount);
         
    }

    public onSelectPatientType(patientType: GMHISPatientType): void {
        this.patientType = patientType;
    }

    public onApplyCnam(event : any){
        this.applyCnam = event.target.checked;
        
    }

    public isInsuredPatient(): boolean {
        return this.patientType === GMHISPatientType.INSURED_PATIENT;
    }

    public isapplyCnam(): boolean {
        return this.applyCnam;
    }

    public addItem(): void {  
        
        const  quotationItemFieldGroup = this.fb.group( {
            actId: new FormControl(null, Validators.required),
            actCode: new FormControl(null, Validators.required),
            actNumber: new FormControl(null, Validators.required),
            quantity: new FormControl(null, Validators.required),
            unitPrice: new FormControl(null, Validators.required),
            totalAmount: new FormControl(null, Validators.required),
            moderatorTicket: new FormControl(null),
            cmuAmount: new FormControl(null),
            cmuPercent: new FormControl(null),
            insurancePercent: new FormControl(null),
            PracticianID: new FormControl(null)
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
            InsuranceID: new FormControl(''),
            PatientID: new FormControl(''),
            quotationItems: this.fb.array([])
        })
    }

    get quotationItemsFormArray() : FormArray{
        return this.quotationFieldGroup.controls["quotationItems"] as FormArray;
      }

      // TODO: pas de code d'acte ni de numero d'acte, recuperer cela avec l'id de lacte

    private buildQutationItemFields() : void {
    this.quotationItemFieldGroup = this.fb.group( {
        actId: new FormControl(null, Validators.required),
        actCode: new FormControl(null, Validators.required),
        actNumber: new FormControl(null, Validators.required),
        quantity: new FormControl(null, Validators.required),
        unitPrice: new FormControl(null, Validators.required),
        totalAmount: new FormControl(null, Validators.required),
        moderatorTicket: new FormControl(null),
        cmuAmount: new FormControl(null),
        cmuPercent: new FormControl(null),
        insurancePercent: new FormControl(null),
        PracticianID: new FormControl(null)
    })
    }

    private findActs() {
        this.actService.getListOfActiveAct().subscribe((response: any[]) => {
            console.log(response);
            
            this.acts = response;
        })
    }

    private findInssurance(){
        this.insuranceService.getAllInsuranceActive().subscribe((response: GMHISNameAndID[]) => {this.insurrances = response})
    }

    private findpracticians(){
        this.practicianService.findPracticianSimpleList().subscribe((response: any[]) => this.practicians = response);
    }
    
      private initialize(): void {
        this.buildfieldGroup();
        this.buildQutationItemFields();
        this.findActs();
        this.addItem();
        this.findpracticians();
      }
}