import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActService } from 'src/app/act/act/service/act.service';
import { admissionStatus, Admission } from 'src/app/admission/model/admission';
import { CashRegisterService } from 'src/app/cash-register/cash-register.service';
import { Insured } from 'src/app/insurance/insured';
import { GMHISInsuredService } from 'src/app/insured/service/insured-service.service';
import { PaymentTypeService } from 'src/app/payment-type/service/payment-type.service';
import { PracticianService } from 'src/app/practician/practician.service';
import { GmhisUtils } from 'src/app/shared/base/utils';
import { GMHISNameAndID } from 'src/app/shared/models/name-and-id';
import { Invoice } from 'src/app/_models/invoice.model';
import { User } from 'src/app/_models/user.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { UserService } from 'src/app/_services/user.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { InvoiceCreateData, InvoiceCost, patientType } from '../models/invoice';
import { InvoiceService } from '../service/invoice.service';

@Component({selector: 'app-invoice-form',templateUrl: './invoice-form.component.html',styleUrls: ['./invoice-form.component.scss']})
export class InvoiceFormComponent implements OnInit, OnDestroy {

  @Input() admission: Admission;

  @Input() InvoiceType : string;

  @Input() invoice: Invoice;

  @Input() showHearderInformation?: boolean;

  @Output() addInvoice = new EventEmitter();

  @Output() updateInvoice = new EventEmitter();

  @Output() addPayment = new EventEmitter();

  public invoiceA: Invoice;
  public admissionForTemplate: Admission;

  public fieldsForm: FormGroup;

  public cashRegisters: GMHISNameAndID[];

  public paymentTypes: any;

  public invoiceCreateData: InvoiceCreateData;

  public patientInsurances: Insured[] = [];

  public practicians: any;

  public actsList: GMHISNameAndID[];

  insured = null;

  private actionToDo: 'invoice' | 'payment';

  public user: User;

  showActAddButton: boolean = false;

  currentDate: Date;

  public totalInvoice: number = 0;
  public partPEC: number = 0;
  public partPecByCNAM: number = 0;
  public partPecByOthherInsurance: number = 0;
  public partientPart: number = 0;
  private displayAddInssuranceBtn: boolean = true;

  subscription: Subscription = new Subscription();

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
    
    if(GmhisUtils.isNull(this.showHearderInformation)) this.showHearderInformation = true;   
    this.currentDate = new Date();
    this.user = this.userService.getUserFromLocalCache();
    this.buildFields();
    if (this.admission) {        
      this.admissionForTemplate = this.admission;  
      this.fieldsForm.get('admissionNumber').setValue(this.admission.admissionNumber);
      this.fieldsForm.get('admission').setValue(this.admission.id);
      this.fieldsForm.get('patientExternalId').setValue(this.admission.patientExternalId);
      this.fieldsForm.get('patientName').setValue(this.admission.patientFirstName);
      this.fieldsForm.get('service').setValue(this.admission.service);
      this.fieldsForm.get('invoiceDate').setValue(this.dateOutputFormat(new Date()));
      this.patientInsured(this.admission.patientId);
      this.addActs();
      if (this.admission.admissionStatus == admissionStatus.UNBILLED) {        
        this.acts.at(0).get('act').setValue(this.admission.actId);
        this.acts.at(0).get('cost').setValue(this.admission.actCost);
        this.acts.at(0).get('admission').setValue(this.admission.id);
        this.acts.at(0).get('pratician').setValue(this.admission.practicianId);
      }
    }
    if (this.invoice) { 
      console.log(this.invoice);
      this.invoiceA = this.invoice;
      this.patientInsured(this.invoice.patient.id);

       this.admissionForTemplate = this.invoice.admission;
       this.admissionForTemplate.patientFirstName = this.invoice.patient.firstName;
       this.admissionForTemplate.patientLastName = this.invoice.patient.lastName;
      this.admissionForTemplate.act = this.invoice.admissionActName;
      this.admissionForTemplate.practician = this.invoice.practicianName;
      this.admissionForTemplate.service = this.invoice.admission.service;


      this.showActAddButton = true;    
      this.invoice["billActs"].forEach((element, i) => {
        this.addActs();
        if (element["act"]) this.acts.at(i).get('act').setValue(element["id"]);
        this.acts.at(i).get('cost').setValue(element["actCost"]);
        if (element["practician"]) this.acts.at(i).get('pratician').setValue(element["practician"]["id"]);
      })
      this.fieldsForm.get('id').setValue(this.invoice.id);
      this.fieldsForm.get('admissionNumber').setValue(this.invoice.admission.admissionNumber);
      this.fieldsForm.get('admission').setValue(this.invoice.admission.id);
      this.fieldsForm.get('patientExternalId').setValue(this.invoice.patient.patientExternalId);
      this.fieldsForm.get('patientName').setValue(this.invoice.patient.firstName);
      this.fieldsForm.get('service').setValue(this.invoice.patient.service);
      this.fieldsForm.get('patientType').setValue(this.invoice["patientType"]);
      this.fieldsForm.get('patientPart').setValue(this.invoice["patientPart"]);
      this.fieldsForm.get('partTakenCareOf').setValue(this.invoice["partTakenCareOf"]);
      this.fieldsForm.get('total').setValue(this.invoice["totalAmount"]);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onCalculInvoiceCost():void {    
    let invoiceCost: InvoiceCost = this.invoiceService.calculInvoiceCost(this.admissionForTemplate.admissionStatus, this.fieldsForm.getRawValue(), this.insureds.controls);
    this.totalInvoice = invoiceCost.totalInvoice;
    this.partPecByCNAM = invoiceCost.partPecByCNAM;
    this.partPecByOthherInsurance = invoiceCost.partPecByOthherInsurance;
    this.partientPart = invoiceCost.partientPart;    
  }
  public onInvoice(): void {
    this.buildInvoice();
    console.log(this.invoiceCreateData);
    
    if(this.isInvoiced()) this.update();
    else this.create();
  }

  buildInvoice(): void  {
    this.actionToDo = "invoice";
    this.onCalculInvoiceCost();
    this.fieldsForm.get('patientPart').setValue(this.partientPart);
    this.fieldsForm.get('partTakenCareOf').setValue(this.partPecByOthherInsurance + this.partPecByCNAM);
    this.invoiceCreateData = this.fieldsForm.getRawValue();
    if (!!this.InvoiceType) this.invoiceCreateData.billType = this.InvoiceType;
    
    this.invoiceCreateData.acts.forEach((el) => {
      el.admission = this.admissionForTemplate.id
    })  
  }

  private create(): void {
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

  private update():void {
    this.subscription.add(
      this.invoiceService.update(this.invoiceA.id, this.invoiceCreateData).subscribe(
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
    )
  }

  isInvoiced():boolean { return !GmhisUtils.isNull(this.invoiceA) };

  private patientInsured(patientId: number): void {
    this.insuredService.getInsuredByPatientId(patientId).subscribe(
      (response: Insured[]) => {
        this.patientInsurances = response;
        if (this.patientInsurances.length != 0) {
          this.patientInsurances.forEach((el, i) => {
            this.addInsured();
            this.setInsuredRowValue(el,i);
          })
          this.fieldsForm.get('patientType').setValue(patientType.INSURED);
        } else {
          this.fieldsForm.get('patientType').setValue(patientType.UNINSURED);
        }
        this.onCalculInvoiceCost();

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
    this.fieldsForm = this.fb.group({
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
  public get acts(): FormArray {return this.fieldsForm.get('acts') as FormArray;}

  public get insureds(): FormArray {return this.fieldsForm.get('insuredList') as FormArray;}

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
    this.fieldsForm.get("cashRegister").clearValidators();
    this.fieldsForm.get("paymentType").clearValidators();
    this.fieldsForm.get("cashRegister").setValidators([Validators.required]);
    this.fieldsForm.get("paymentType").setValidators([Validators.required]);
    this.fieldsForm.get("cashRegister").updateValueAndValidity();
    this.fieldsForm.get("paymentType").updateValueAndValidity();

    let cashRegister = this.fieldsForm.get("cashRegister").value
    let paymentType = this.fieldsForm.get("paymentType").value

    let collectAmountData = {
      "cashRegister": cashRegister,
      "bill": this.fieldsForm.get("id").value,
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


