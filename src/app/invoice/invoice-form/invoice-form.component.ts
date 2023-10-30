import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActService } from 'src/app/act/act/service/act.service';
import { admissionStatus, Admission } from 'src/app/admission/model/admission';
import { CashRegisterService } from 'src/app/cash-register/cash-register.service';
import { Insured } from 'src/app/insurance/insured';
import { GMHISInsuredService } from 'src/app/insured/service/insured-service.service';
import { PaymentTypeService } from 'src/app/payment-type/service/payment-type.service';
import { PracticianService } from 'src/app/practician/practician.service';
import { GMHISNameAndID } from 'src/app/shared/models/name-and-id';
import { Invoice } from 'src/app/_models/invoice.model';
import { User } from 'src/app/_models/user.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { UserService } from 'src/app/_services/user.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { InvoiceCreateData, InvoiceCost, patientType } from '../models/invoice';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  @Output() addInvoice = new EventEmitter();
  @Output() updateInvoice = new EventEmitter();
  @Output() addPayment= new EventEmitter();

  @Input() admission: Admission;

  @Input() InvoiceType : string;

  @Input() invoice: Invoice;

  admissionForTemplate: Admission;

  public invoiceForm: FormGroup;

  public cashRegisters: GMHISNameAndID[];

  public paymentTypes: any;

  public invoiceCreateData: InvoiceCreateData;

  public patientInsurances: Insured[] = [];

  public practicians: any;

  actsList: GMHISNameAndID[];

  insured = null;

  actionToDo: 'invoice' | 'payment';

  public user: User;

  showActAddButton: boolean = false;

  currentDate: Date;

  public totalInvoice: number = 0;
  public partPEC: number = 0;
  public partPecByCNAM: number = 0;
  public partPecByOthherInsurance: number = 0;
  public partientPart: number = 0;
  private displayAddInssuranceBtn: boolean = true;

  constructor(
    private fb: FormBuilder,
    private cashRegisterService: CashRegisterService,
    private actService: ActService, 
    private practicianService: PracticianService,
    private insuredService: GMHISInsuredService,
    private paymentTypeService: PaymentTypeService, 
    private invoiceService: InvoiceService,
    private notificationService: NotificationService,
    private userService: UserService
    ) {}

  ngOnInit(): void {    
    this.currentDate = new Date();
    this.user = this.userService.getUserFromLocalCache();
    this.buildFields();
    this.addActs();
    if (this.admission) {        
      this.admissionForTemplate = this.admission;  
     
      this.invoiceForm.get('admissionNumber').setValue(this.admission.admissionNumber);
      this.invoiceForm.get('admission').setValue(this.admission.id);
      this.invoiceForm.get('patientExternalId').setValue(this.admission.patientExternalId);
      this.invoiceForm.get('patientName').setValue(this.admission.patientFirstName);
      this.invoiceForm.get('service').setValue(this.admission.service);
      this.invoiceForm.get('invoiceDate').setValue(this.dateOutputFormat(new Date()));
      this.insuredService.getInsuredByPatientId(this.admission.patientId).subscribe(
        (response: Insured[]) => {
          this.patientInsurances = response;
          if (this.patientInsurances.length != 0) {
            this.patientInsurances.forEach((el, i) => {
              this.addInsured();
              this.setInsuredRowValue(el,i);
            })
            this.invoiceForm.get('patientType').setValue(patientType.INSURED);
          } else {
            this.invoiceForm.get('patientType').setValue(patientType.UNINSURED);
          }
          this.onCalculInvoiceCost();

        }
      )
      if (this.admission.admissionStatus == admissionStatus.UNBILLED) {        
        this.acts.at(0).get('act').setValue(this.admission.actId);
        this.acts.at(0).get('cost').setValue(this.admission.actCost);
        this.acts.at(0).get('admission').setValue(this.admission.id);
        this.acts.at(0).get('pratician').setValue(this.admission.practicianId);
      }
    }
    if (this.invoice) {  
      this.showActAddButton = true;    
      this.invoice["billActs"].forEach((element, i) => {
        this.addActs();
        if (element["act"]) this.acts.at(i).get('act').setValue(element["act"]["id"]);
        this.acts.at(i).get('cost').setValue(element["actCost"]);
        if (element["practician"]) this.acts.at(i).get('pratician').setValue(element["practician"]["id"]);
      })
      this.invoiceForm.get('id').setValue(this.invoice.id);
      this.invoiceForm.get('admissionNumber').setValue(this.invoice.admision.admissionNumber);
      this.invoiceForm.get('admission').setValue(this.invoice.admision.id);
      this.invoiceForm.get('patientExternalId').setValue(this.invoice.patient.patientExternalId);
      this.invoiceForm.get('patientName').setValue(this.invoice.patient.firstName);
      this.invoiceForm.get('service').setValue(this.invoice.patient.service);
      this.invoiceForm.get('patientType').setValue(this.invoice["patientType"]);
      this.invoiceForm.get('patientPart').setValue(this.invoice["patientPart"]);
      this.invoiceForm.get('partTakenCareOf').setValue(this.invoice["partTakenCareOf"]);
      this.invoiceForm.get('total').setValue(this.invoice["totalAmount"]);
      this.insuredService.getInsuredByPatientId(this.invoice["patient"].id).subscribe(
        (response: any[]) => {
          this.patientInsurances = response;
        }
      )
    }
    this.findCashRegisternameAndIdList();
    this.findActsNameAndIdList();
    this.findPracticianSimpleList();
    this.findPaymentTypesActiveNameAndIds();
  }

  public onCalculInvoiceCost():void {    
    let invoiceCost: InvoiceCost = this.invoiceService.calculInvoiceCost(this.admissionForTemplate.admissionStatus, this.invoiceForm.getRawValue(), this.insureds.controls);
    this.totalInvoice = invoiceCost.totalInvoice;
    this.partPecByCNAM = invoiceCost.partPecByCNAM;
    this.partPecByOthherInsurance = invoiceCost.partPecByOthherInsurance;
    this.partientPart = invoiceCost.partientPart;    
  }
  public onInvoice() {
    this.actionToDo = "invoice";
    this.onCalculInvoiceCost();
    this.invoiceForm.get('patientPart').setValue(this.partientPart);
    this.invoiceForm.get('partTakenCareOf').setValue(this.partPecByOthherInsurance + this.partPecByCNAM);
    this.invoiceCreateData = this.invoiceForm.getRawValue();
    if (!!this.InvoiceType) this.invoiceCreateData.billType = this.InvoiceType;
    this.invoiceCreateData.acts.forEach((el) => {
      el.admission = this.admissionForTemplate.id
    })  
    console.log(this.invoiceCreateData);
      
    this.invoiceService.createInvoice(this.invoiceCreateData).subscribe(
      (res: any) => {
        this.addInvoice.emit();
      },
      (errorResponse: HttpErrorResponse) => {
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        );
      }
    )
  }

  public onAddActs(){this.addActs()}

  public onDeleteAct(formControlID: number){
    this.deleteAct(formControlID);
 }

 public onAddInsured(){
  this.addInsured();
}

public get showAddInsuredButton(): boolean {
  this.insureds.controls.length >= 2 ? this.displayAddInssuranceBtn = false: this.displayAddInssuranceBtn = true;
  return this.displayAddInssuranceBtn;
}

public onDeleteInsured(controlIndex : number){
  this.deleteInsured(controlIndex);
}

public onActSelect(ActID,i) {
  this.acts.at(i).get('act').setValue(ActID);
  const act = this.actsList.find(act => act.id == ActID);
  this.acts.at(i).get('cost').setValue(act["amount"]);  
}

public onInsuredSelect(index, selectedInsured) {
  let insured = this.patientInsurances.find(function (el) {
    return el.insuranceId == selectedInsured;
  })
  this.insureds.controls[index].get('insured').setValue(insured.id);
  this.insureds.controls[index].get('subscriber').setValue(insured.subscriberName);
  this.insureds.controls[index].get('society').setValue(insured.society);
  this.insureds.controls[index].get('insuredCoverage').setValue(insured.coverage);
}

public isCnamCostField(controlIndex: number): boolean {
  if (controlIndex !== 0) return false;
  return true;
}

  private addActs(): void {this.acts.push(this.createActsGroups())}
 
  private deleteAct(formControlID: number) {
    this.acts.removeAt(formControlID);
    this.acts.markAsDirty();
  }

  private dateOutputFormat(date: Date): string {
    let newDate = new Date(date);
    let day = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year = newDate.getFullYear();
    return day + '/' + month + '/' + year;
  }

  private deleteInsured(controlIndex: number) {
    this.insureds.removeAt(controlIndex);
    this.insureds.markAsDirty();
    this.showAddInsuredButton;
  }

  private buildFields() {
    this.invoiceForm = this.fb.group({
      id: new FormControl(0),
      admission: new FormControl(0),
      admissionNumber: new FormControl({ value: '', disabled: true }),
      patientExternalId: new FormControl({ value: '', disabled: true }),
      patientName: new FormControl({ value: '', disabled: true }),
      service: new FormControl({ value: '', disabled: true }),
      invoiceDate: new FormControl(''),
      patientType: new FormControl(null, Validators.required),
      insurance: new FormControl(null),
      total: new FormControl(0),
      cashRegister: new FormControl(null),
      patientPart: new FormControl(0),
      partTakenCareOf: new FormControl(0),
      totalAmount: new FormControl(0),
      paymentType: new FormControl(null),
      insuredList: this.fb.array([]),
      acts: this.fb.array([])
    });
  }
  public get acts(): FormArray {return this.invoiceForm.get('acts') as FormArray;}

  public get insureds(): FormArray {return this.invoiceForm.get('insuredList') as FormArray;}

  private createActsGroups(): FormGroup {
    return this.fb.group({
      act: [null],
      pratician: [null],
      costToApplyCNAMInsured: [null, Validators.required],
      admission: [this.admission?.id],
      cost: [{ value: null, disabled: true }],
    })
  }

  private createInsuredListGroups(): FormGroup {
    return this.fb.group({
      admission: [this.admissionForTemplate?.id],
      bill: [null],
      insurrance: [null],
      insured: [null],
      subscriber: [{ value: null, disabled: true }],
      society: [{ value: null, disabled: true }],
      insuredCoverage: [{ value: null, disabled: true }],
      insuredPart: [0],
      costToApplyCNAMInsured: [0],

    })
  }
  
  private setInsuredRowValue(insured: Insured,i) {
    this.insureds.controls[i].get('insurrance').setValue(insured.insuranceId);
    this.insureds.controls[i].get('insured').setValue(insured.id);
    this.insureds.controls[i].get('insurrance').disable();
    this.insureds.controls[i].get('subscriber').setValue(insured.subscriberName);
    this.insureds.controls[i].get('society').setValue(insured.society);
    this.insureds.controls[i].get('insuredCoverage').setValue(insured.coverage);
  }

  private addInsured(): void {
    this.insureds.push(this.createInsuredListGroups());
    this.insureds.controls.forEach((element, i) => {
      if (this.user.facility["facilityType"]["name"] === "Centre de sante privé") {
        this.insureds.controls[0].get('insuredPart').enable();
      }
    });
    this.showAddInsuredButton;
  }

  private findCashRegisternameAndIdList(){
    this.cashRegisterService.findCashRegisternameAndIdList().subscribe((response: GMHISNameAndID[]) => {this.cashRegisters = response;})
  }

  private findActsNameAndIdList() {
    this.actService.getListOfActiveAct().subscribe((response: GMHISNameAndID[]) => {this.actsList = response;})
  }

  private findPracticianSimpleList() {
    this.practicianService.findPracticianSimpleList().subscribe((response: any) => {
      this.practicians = response;
      console.log(this.practicians);
      
    })
  }

  private findPaymentTypesActiveNameAndIds() {
    this.paymentTypeService.findPaymentTypesActiveNameAndIds().subscribe((response: any) => {this.paymentTypes = response;})
  }

  // TODO: this method is for payment process
  private collectAmount() {
    this.actionToDo = "payment";
    this.invoiceForm.get("cashRegister").clearValidators();
    this.invoiceForm.get("paymentType").clearValidators();
    this.invoiceForm.get("cashRegister").setValidators([Validators.required]);
    this.invoiceForm.get("paymentType").setValidators([Validators.required]);
    this.invoiceForm.get("cashRegister").updateValueAndValidity();
    this.invoiceForm.get("paymentType").updateValueAndValidity();

    let cashRegister = this.invoiceForm.get("cashRegister").value
    let paymentType = this.invoiceForm.get("paymentType").value

    let collectAmountData = {
      "cashRegister": cashRegister,
      "bill": this.invoiceForm.get("id").value,
      "paymentType": paymentType,
    }

    this.invoiceService.collectAmount(collectAmountData).subscribe(
      (res: any) => {
        this.addPayment.emit();
      },
      (errorResponse: HttpErrorResponse) => {
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        );
      }
    );

  }

}


