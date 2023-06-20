import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActService } from 'src/app/act/act/service/act.service';
import { admissionStatus, IAdmission } from 'src/app/admission/model/admission';
import { CashRegisterService } from 'src/app/cash-register/cash-register.service';
import { Insured } from 'src/app/insurance/insured';
import { InsuredServiceService } from 'src/app/insured/service/insured-service.service';
import { PaymentTypeService } from 'src/app/payment-type/service/payment-type.service';
import { PracticianService } from 'src/app/practician/practician.service';
import { INameAndId } from 'src/app/shared/models/name-and-id';
import { Invoice } from 'src/app/_models/invoice.model';
import { User } from 'src/app/_models/user.model';
import { NotificationService } from 'src/app/_services/notification.service';
import { UserService } from 'src/app/_services/user.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { IInvoiceDto as InvoiceCreateData, InvoiceCost, PATIENTTYPE } from '../models/invoice';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  private readonly CNAM_INSURANCE_NAME = "CNAM";

  @Output() addInvoice = new EventEmitter();
  @Output() updateInvoice = new EventEmitter();
  @Output() addPayment= new EventEmitter();

  @Input() admission: IAdmission;

  @Input() InvoiceType : string;

  @Input() makeInvoice: boolean;

  @Input() invoice: Invoice;

  admissionForTemplate: IAdmission;

  public invoiceForm!: FormGroup;

  public cashRegisters: INameAndId[];

  public paymentTypes: any;

  public invoiceDto: InvoiceCreateData = {
    id: null,
    admission: null,
    billType: "L",
    convention: null,
    discountInCfa: null,
    discountInPercentage: null,
    insured: null,
    patientType: null,
    acts: [],
    insuredList: [],
    patientPart: null,
    partTakenCareOf: null
  };

  public patientInsurances: Insured[] = [];

  public practicians: any;

  actsList: INameAndId[];

  insured = null;

  actionToDo: string;

  public user: User;

  showActAddButton: boolean = false;

  currentDate: Date;

  public totalInvoice: number = 0;
  public partPEC: number = 0;
  public partPecByCNAM: number = 0;
  public partPecByOthherInsurance: number = 0;
  public partientPart: number = 0;
  public totalAmountToPay: number = 0;
  displayAddInssuranceBtn: boolean = true;

  constructor(private fb: FormBuilder,private cashRegisterService: CashRegisterService,private actService: ActService, private practicianService: PracticianService,
  private insuredService: InsuredServiceService,private paymentTypeService: PaymentTypeService, private invoiceService: InvoiceService,private notificationService: NotificationService,
  private userService: UserService) {}

  ngOnInit(): void {    
    this.currentDate = new Date();
    this.user = this.userService.getUserFromLocalCache();
    this.initForm();
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
            this.firstInsuredRow(this.patientInsurances);
            this.invoiceForm.get('patientType').setValue(PATIENTTYPE.INSURED);
          } else {
            this.invoiceForm.get('patientType').setValue(PATIENTTYPE.UNINSURED);
          }
        }
      )
      if (this.admission.admissionStatus == admissionStatus.UNBILLED) {
        this.acts.at(0).get('act').setValue(this.admission["actId"]);
        this.acts.at(0).get('cost').setValue(this.admission.actCost);
        this.acts.at(0).get('admission').setValue(this.admission.id);
        this.acts.at(0).get('pratician').setValue(this.admission["practicianId"]);
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

  setFormValue(value: IAdmission | Invoice) {
    
  }


  dateOutputFormat(date: Date): string {
    let newDate = new Date(date);
    let day = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year = newDate.getFullYear();
    return day + '/' + month + '/' + year;
  }

  initForm() {
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

  private createActsGroups(): FormGroup {
    return this.fb.group({
      act: [null],
      pratician: [null],
      costToApplyCNAMInsured: [0],
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


  onInvoice() {
    this.actionToDo = "makeInvoice";
    this.onCalculInvoiceCost();
    this.invoiceForm.get('patientPart').setValue(this.partientPart);
    this.invoiceForm.get('partTakenCareOf').setValue(this.partPecByOthherInsurance + this.partPecByCNAM);
    this.invoiceDto = this.invoiceForm.getRawValue();
    if (!!this.InvoiceType)  this.invoiceDto.billType = this.InvoiceType;
    this.invoiceDto.acts.forEach((el, index) => {
      el["admission"] = this.admissionForTemplate.id
    })    
    this.invoiceService.createInvoice(this.invoiceDto).subscribe(
      (response: any) => {
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


  public get acts(): FormArray {return this.invoiceForm.get('acts') as FormArray;}

  public addActs(): void {this.acts.push(this.createActsGroups())}
  public deleteAct(index: number) {
    this.acts.removeAt(index);
    this.acts.markAsDirty();
  }

  public get insureds(): FormArray {return this.invoiceForm.get('insuredList') as FormArray;}

  firstInsuredRow(insured: any[]) {
    this.addInsured();
    let cnamInsured = insured.find(function (el) {return el["insuranceName"].toLowerCase() == "cnam";})
    this.insureds.controls[0].get('insurrance').setValue(cnamInsured["insuranceId"]);
    this.insureds.controls[0].get('insured').setValue(cnamInsured["id"]);
    this.insureds.controls[0].get('insurrance').disable();
    this.insureds.controls[0].get('subscriber').setValue(cnamInsured["subscriberName"]);
    this.insureds.controls[0].get('society').setValue(cnamInsured["society"]);
    this.insureds.controls[0].get('insuredCoverage').setValue(cnamInsured["coverage"]);
  }

  secondInsuredRow(insured: any[]) {
    this.addInsured();
    let cnamInsured = insured.find(function (el) {return el["insuranceName"].toLowerCase() != "cnam";})
    this.insureds.controls[1].get('insurrance').setValue(cnamInsured["insuranceId"]);
    this.insureds.controls[1].get('insured').setValue(cnamInsured["id"]);
    this.insureds.controls[1].get('insurrance').disable();
    this.insureds.controls[1].get('subscriber').setValue(cnamInsured["subscriberName"]);
    this.insureds.controls[1].get('society').setValue(cnamInsured["society"]);
    this.insureds.controls[1].get('insuredCoverage').setValue(cnamInsured["coverage"]);
  }

  public addInsured(): void {
    this.insureds.push(this.createInsuredListGroups());
    this.insureds.controls.forEach((element, i) => {
      if (this.user.facility["facilityType"]["name"] === "Centre de sante privé") {
        this.insureds.controls[0].get('insuredPart').enable();
      }
    });
    this.showAddInsuredButton;
  }

  public get showAddInsuredButton(): boolean {
    if (this.insureds.controls.length >= 2) {
      this.displayAddInssuranceBtn = false;
    } else {
      this.displayAddInssuranceBtn = true;
    }
    return this.displayAddInssuranceBtn;
  }

  deleteInsured(index: number) {
    this.insureds.removeAt(index);
    this.insureds.markAsDirty();
    this.showAddInsuredButton;
  }

  private findCashRegisternameAndIdList() {
    this.cashRegisterService.findCashRegisternameAndIdList().subscribe(
      (response: INameAndId[]) => {
        this.cashRegisters = response;
      }
    )
  }



  private findActsNameAndIdList() {
    this.actService.getListOfActiveAct().subscribe(
      (response: INameAndId[]) => {
        this.actsList = response;
      }
    )
  }

  private findPracticianSimpleList() {
    this.practicianService.findPracticianSimpleList().subscribe(
      (response: any) => {
        this.practicians = response;
      }
    )
  }

  private findPaymentTypesActiveNameAndIds() {
    this.paymentTypeService.findPaymentTypesActiveNameAndIds().subscribe(
      (response: any) => {
        this.paymentTypes = response;
      }
    )
  }

  onActSelect(row) {
    let data = {
      "act": this.acts.value[row]["act"],
      "convention": this.invoiceForm.get('convention').value
    }
    this.invoiceService.getActCost(data).subscribe(res => {
      this.acts.controls[row].get('cost').setValue(res);
    });

  }

  onInsurranceSelect(row) {
    this.insureds.controls[row].get('subscriber').setValue(row["insured"]);

  }

  onInsuredSelect(index, event) {
    let insured = this.patientInsurances.find(function (el) {
      return el["insuranceId"] == event
    })
    this.insureds.controls[index].get('insured').setValue(insured["id"]);
    this.insureds.controls[index].get('subscriber').setValue(insured["subscriberName"]);
    this.insureds.controls[index].get('society').setValue(insured["society"]);
    this.insureds.controls[index].get('insuredCoverage').setValue(insured["coverage"]);
  }

  getInsured(insured, row) {
    return insured["insuranceId"] == row;
  }

  onCalculInvoiceCost() {
    let invoiceCost: InvoiceCost = this.invoiceService.calculInvoiceCost(this.admissionForTemplate.admissionStatus, this.invoiceForm.getRawValue(), this.invoiceForm.getRawValue(), this.totalInvoice, this.partPecByCNAM, this.partPecByOthherInsurance, this.partientPart, this.insureds.controls);
    this.totalInvoice = invoiceCost.totalInvoice;
    this.partPecByCNAM = invoiceCost.partPecByCNAM;
    this.partPecByOthherInsurance = invoiceCost.partPecByOthherInsurance;
    this.partientPart = invoiceCost.partientPart;    
  }

  collectAmount() {
    this.actionToDo = "makePayment";

    this.invoiceForm.get("cashRegister").clearValidators();
    this.invoiceForm.get("paymentType").clearValidators();
    this.invoiceForm.get("cashRegister").setValidators([Validators.required]);
    this.invoiceForm.get("paymentType").setValidators([Validators.required]);
    this.invoiceForm.get("cashRegister").updateValueAndValidity();
    this.invoiceForm.get("paymentType").updateValueAndValidity();

    let cashRegister = this.invoiceForm.get("cashRegister").value
    let paymentType = this.invoiceForm.get("paymentType").value

    let data = {
      "cashRegister": cashRegister,
      "bill": this.invoiceForm.get("id").value,
      "paymentType": paymentType,
      
    }
    this.invoiceService.collectAmount(data).subscribe(
      (response: any) => {
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

  fieldForCnamCost(controlIndex: number): boolean {
    if (controlIndex === 0) return true
    return false;
  }
}


