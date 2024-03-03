import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { ActService } from "src/app/act/act/service/act.service";
import { GMHISHospitalizationRequestPartial } from "src/app/hospitalization/api/domain/request/gmhis-hospitalization-request";
import { GMHISInsuredService } from "src/app/insured/service/insured-service.service";
import { GMHISPatientType, Patient } from "src/app/patient/patient";
import { PatientService } from "src/app/patient/patient.service";
import { PracticianService } from "src/app/practician/practician.service";
import { GMHISQuotationPartial } from "src/app/quotations/api/domain/gmhis.quotation";
import { GMHISQuotationItemPartial } from "src/app/quotations/api/domain/gmhis.quotation.item";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHISKeyValue } from "src/app/shared/models/name-and-id";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { GMHISInvoiceHAmounts, GMHISInvoiceHCreate, GMHISInvoiceHPartial } from "../api/domain/gmhis.quotation";
import { GMHISInvoiceHItemCreate, GMHISInvoiceHItemPartial } from "../api/domain/gmhis.quotation.item";
import { GMHISInvoiceHFeatureService } from "../api/service/gmhis.invoice-h.feature.service";
import { GMHISInvoiceHService } from "../api/service/gmhis.invoice-h.service";

@Component({selector: 'gmhis-invoice-h-create-update', templateUrl: './gmhis-invoice-h-create-update.component.html', styleUrls:['./gmhis-invoice-h-create-update.component.scss'],providers: [GMHISInvoiceHFeatureService] })
export class GMHISInvoiceHCreateUpdate implements OnInit, OnDestroy {

    @Input() patientID: number = 1;

    @Input() showHeader?: boolean = true;

    @Input() hospitalizationRequest: GMHISHospitalizationRequestPartial;

    @Input() invoice: GMHISInvoiceHPartial;
    @Input() invoiceItems: GMHISInvoiceHItemPartial[];

    @Input() quotation: GMHISQuotationPartial;
    @Input() quotationItems: GMHISQuotationItemPartial[];

    invoiceHFieldGroup: FormGroup = new FormGroup({});
    invoiceHItemFieldGroup: FormGroup;

    // TODO:  Change any to better type for acts
    acts: any[];

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

    insurranceName: string;
    insurranceCoverage: undefined | number;
    insured: any;

    totalAmount: GMHISInvoiceHAmounts;
    formSubmitted: boolean;

    discountAmount: number;
    netToPay: number = 0;

    hospitalizationTypes: any[] = [{key: 2, value: 'Apendicentomie'}]

    constructor(
         private router: Router,
         private fb: FormBuilder,
         private actService: ActService,
         private modalService: NgbModal,
         private practicianService: PracticianService,
         private invoiceService: GMHISInvoiceHService,
         private featureService : GMHISInvoiceHFeatureService,
         private insuredService: GMHISInsuredService,
         private patientService: PatientService,
         private notificationService: NotificationService,
         ){}
   
    ngOnInit(): void {
        this.initialize();
        
        if(!GmhisUtils.isNull(this.hospitalizationRequest)) this.setFormFields();         

        if(this.quotationItems) {
            this.setFormArrayFields(this.quotationItems);
        }

        if (this.quotation) {
           this.invoice = this.convertQuotationToInvoice(this.quotation); 
           this.calculateAmount();
           console.log(this.quotation);
           
        };

        if(!GmhisUtils.isNull(this.invoiceItems)) {
            this.setFormArrayFields(this.invoiceItems);
            this.calculateAmount();
        }   

        if(!GmhisUtils.isNull(this.invoice)){            
            this.setFieldsForm(this.invoice);
            if(this.invoice.cmuPart > 0) {
                this.applyCMU = true;
                this.totalAmount.cmuPart = this.invoice.cmuPart;
            } 
            if(!GmhisUtils.isNull(this.invoice.insuranceID)) { 
                this.onSelectPatientType(GMHISPatientType.INSURED_PATIENT);
                this.invoiceHFieldGroup.get('patientType').setValue(GMHISPatientType.INSURED_PATIENT);
            }
            this.defaultAmounts();
        }
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
         this.insurranceName = this.insured.insuranceName;
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

    public isWrongDiscount():boolean {
        if(!GmhisUtils.isNull(this.totalAmount)) return this.discountAmount > this.totalAmount.netToPay;
        else return false;
    }

    private defaultAmounts(): void {
        console.log(this.invoice);
        
        this.totalAmount.insurancePart = this.invoice.insurancePart,
        this.totalAmount.moderatorTicket = this.invoice.moderatorTicket;
        this.totalAmount.netToPay = this.invoice.moderatorTicket ? this.invoice.moderatorTicket : this.invoice.totalAmount
        this.insurranceName = this.invoice.insuranceName;
        this.netToPay = this.invoice.netToPay;
        if (this.invoice.discount){
            this.discountAmount = this.invoice.discount;
        }
    }

    private setFormFields(): void {
        this.invoiceHFieldGroup.get('patientID').setValue(this.hospitalizationRequest.patientID);
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
        this.calculateAmount();
      }

    private buildfieldGroup(): void {
        this.invoiceHFieldGroup = this.fb.group ({
            affection: new FormControl('', Validators.required),
            indication: new FormControl(''),
            insuranceID: new FormControl(''),
            patientType: new FormControl(''),
            patientID: new FormControl(null, Validators.required),
            insured: new FormControl(null),
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


      private createMode(): boolean {
        return GmhisUtils.isNull(this.invoice?.id)
    }
 
    private createUpdateData(): GMHISInvoiceHCreate {
      const formData = this.invoiceHFieldGroup.value;
      const createData = this.buildCreateInvoiceHData(formData);
      
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
      this.subscriptions.add(
          this.invoiceService.create(createData).subscribe(
              {
                  next: (invoiceCreated: any) => {
                      this.modalService.dismissAll();
                      this.router.navigateByUrl('/hospitalization');
                      this.notificationService.notify(NotificationType.SUCCESS,'Facture Crée');
                  },
                  error: (error: HttpErrorResponse) => {
                      this.notificationService.notify(NotificationType.ERROR, error.message)
                  }
              }
      ))
    }

    public save(): void {
        this.calculateAmount();
       
        this.formSubmitted = true;
        if(this.invoiceHItemsFormArray.length == 0) {
            this.notificationService.notify(NotificationType.ERROR, 'Veuillez sélectionnez une prestation');
            return
        }
        if(!this.invoiceHFieldGroup.valid) return
        
        if (this.createMode()) this.create();
        else this.update();

      }

    private update(): void {
        const updateData = this.createUpdateData();
        
        this.subscriptions.add(
            this.invoiceService.update(this.invoice.id,updateData).subscribe(
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

    public onCalculAmount(): void {
        this.calculateAmount();
    }

    private calculateAmount(): void {
        const formData = this.invoiceHFieldGroup.value;
        let invoiceItems = formData.invoiceHItems;

        this.totalAmount = this.featureService.quotationTotalAmount(invoiceItems, this.patientType, this.isApplyCnam(),this.insurranceCoverage);
        this.netToPay = this.totalAmount.netToPay;
        if (this.discountAmount){
            if(this.isWrongDiscount()) return;
            this.netToPay = this.totalAmount.netToPay - this.discountAmount;
        }
      }

     public buildCreateInvoiceHData(formData:any): GMHISInvoiceHCreate {
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
        this.invoiceHItemFieldGroup = this.fb.group( { })
    }
    
        private findActs() {
            this.actService.getListOfActiveAct().subscribe((response: any[]) => {            
                this.acts = response;
            })
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
                    if (!GmhisUtils.isNull(this.invoice)) {
                        this.insured = this.patientInsureds.find((insured) => insured.insuranceId === this.invoice.insuranceID);   
                        this.invoiceHFieldGroup.get('insured').setValue(this.insured);  
                        this.onSelectInsurance(this.insured);   
                    }
                                   
                }  )
        )
        }
    
        private findPatients(){
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
        this.findpracticians();
        this.findPatients();
        this.findPatientInsured(this.patientID);
      }

      private setFieldsForm(data: any): void {
        this.invoiceHFieldGroup.get('affection').setValue(data.affection);
        this.invoiceHFieldGroup.get('indication').setValue(data.indication);
        this.invoiceHFieldGroup.get('insuranceID').setValue(data.insuranceID);
        this.invoiceHFieldGroup.get('patientID').setValue(data.patientID);
        this.invoiceHFieldGroup.get('insured').setValue(this.insured);
      }

      private setFormArrayFields(data: any): void {
        data.forEach((el,i )=> {
            this.addItem();
            this.invoiceHItemsFormArray.controls[i].get('actId').setValue(el.actID);
            this.invoiceHItemsFormArray.controls[i].get('quantity').setValue(el.quantity);
            this.invoiceHItemsFormArray.controls[i].get('unitPrice').setValue(el.unitPrice);
            this.invoiceHItemsFormArray.controls[i].get('cmuAmount').setValue(el.cmuAmount);
            this.invoiceHItemsFormArray.controls[i].get('cmuPercent').setValue(el.cmuPercent);
            this.invoiceHItemsFormArray.controls[i].get('practicianID').setValue(el.practicianID);
            ;
        })
      }

      private convertQuotationToInvoice(quotation: GMHISQuotationPartial):GMHISInvoiceHPartial {

        return {
            insuranceName : quotation.insuranceName,
            insuranceID : quotation.insuranceID,
            affection : quotation.affection,
            indication : quotation.indication,    
            patientName : quotation.patientName,
            patientID : quotation.patientID,
            totalAmount : quotation.totalAmount,
            moderatorTicket : quotation.moderatorTicket,    
            cmuPart : quotation.cmuPart,
            insurancePart : quotation.insurancePart,
            discount : quotation.discount,
            netToPay : quotation.netToPay
        }
      
      }

}