import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ExamenCreateData } from 'src/app/examen/models/exam-dto';
import { ExamService } from 'src/app/examen/services/exam.service';
import { GMHISInvoiceHPartial } from 'src/app/invoice-h/api/domain/gmhis.quotation';
import { GMHISInvoiceHItemPartial } from 'src/app/invoice-h/api/domain/gmhis.quotation.item';
import { GMHISCautionTransactionCreate } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { PaymentTypeService } from 'src/app/payment-type/service/payment-type.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import Swal from 'sweetalert2';
import { InvoiceService } from '../service/invoice.service';


type GMHISPaymentCreate = {
  cashRegister: number,
  billID: number,
  invoiceHID: string,
  paymentType: string,
  amountReceived: number,
  amountReturned: number
}

@Component({selector: 'app-payment',templateUrl: './payment.component.html',styleUrls: ['./payment.component.scss']})
export class PaymentComponent implements OnInit, OnDestroy {
  
  @Input() invoice: any;

  @Input() invoiceH: GMHISInvoiceHPartial;
  @Input() invoiceHItems: GMHISInvoiceHItemPartial[];

  @Input() libellePaymentWithCaution?: string;

  @Output('addPayment') addPayment: EventEmitter<any> = new EventEmitter();
  selectedSize: number;

  examDto: ExamenCreateData = {
    acts: [],
    admission: 0,
    diagnostic: '',
    id: 0,
    observation: null,
    examenTytpe: false
  };

  public paymentForm!: FormGroup;
  patientInvoice: any = {
    patient:{},
    insurance:{},
    billActs:[]
  };
  paymentTypes: any;
  amountReceived: any;
  amountReceivedIsvalid: boolean;

  public paymentTypeForm: FormGroup;

  private collectWithCaution: boolean;

  subscription = new Subscription();
  patient: any;
  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private paymentTypeService: PaymentTypeService,
    private patientService: PatientService

  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
        
    this.initForm();
    if (this.invoice) {
      this.patientInvoice = this.invoice;
    
      this.examDto.admission = this.patientInvoice.admission.id;
      
      this.onCollectWithCaution(this.patientInvoice.patient.solde);
    }

    if(this.invoiceH){
      console.log(this.invoiceH);
      this.retrievePatient(this.invoiceH.patientID);
      this.buildPatientInvoice(this.invoiceH);
      this.buildPatientInvoiceAct(this.invoiceHItems);
    }
    this.findPaymentTypesActiveNameAndIds();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public onSave() {
    let formData = this.paymentForm.value;
    const paymentCreate = this.buildPaymentCreate(formData);
  
    if (paymentCreate.amountReceived < this.patientInvoice?.patientPart) {
      this.amountReceivedIsvalid = true;
    } else {
      this.collectAmount(paymentCreate, this.collectWithCaution );
    }
  }

  private initForm() {
    this.paymentForm = this.fb.group({
      id: new FormControl(0),
      code: new FormControl(null),
      cashRegister: new FormControl(1),
      paymentType: new FormControl(''),
      bill: new FormControl(null),
      admissionNumber: new FormControl({ value: '', disabled: true }),
      amountReceived: new FormControl(0),
      amountReturned: new FormControl(null),
      paymentsType: this.fb.array([this.createPaymentsType()]),

    });
  }

  get paymentsType(): FormArray {
    return <FormArray>this.paymentForm.get('paymentsType') as FormArray;
  }

  createPaymentsType(): FormGroup {
    return this.fb.group({
      id : [''],
      amount: [''],
      paymentTypeID: [null],
      amountReturned: [''],
    });
  }

  addPaymentType() {this.paymentsType.push(this.createPaymentsType());}

  removePaymentType(index: number) {this.paymentsType.removeAt(index);}


  private buildPaymentCreate(formData: any): GMHISPaymentCreate {
    return {
      cashRegister: formData.cashRegister,
      billID: this.patientInvoice.id,
      paymentType: formData.paymentType,
      amountReceived: formData.amountReceived,
      amountReturned: formData.amountReturned,
      invoiceHID: this.invoiceH?.id
    }
    
  }

  private createCautionTransaction(amount: number): void {
    let cautionTransactionCreate: GMHISCautionTransactionCreate = {
      libelle:   this.libellePaymentWithCaution,
      action: 'debit',
      amount: amount,
      patientID: this.patientInvoice.patient.id
    }
    console.log(cautionTransactionCreate);
    
    this.patientService.createCautionTransaction(cautionTransactionCreate).subscribe(
      (response: any) => {
      },
      (errorResponse: HttpErrorResponse) => {
        this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
        this.modalService.dismissAll();
      }
    );
  }

  private collectAmount(data: GMHISPaymentCreate, collectWithCaution: boolean) {        
    this.invoiceService.collectAmount(data).subscribe(
      (response: any) => {
        this.addPayment.emit();
        if(collectWithCaution) this.createCautionTransaction(data.amountReceived);
      },
      (errorResponse: HttpErrorResponse) => {
        this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
      }
    );
  }

  private onCollectWithCaution(solde:any ) {
    
    if(solde > 0) {
      Swal.fire({
        title: `Ce Patient Dispose d'une caution, Voulez-vous l'utiliser ?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'oui',
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          let amountToPay =  (solde > this.patientInvoice.patientPart) ? this.patientInvoice.patientPart : solde;
          console.log(amountToPay);
          
          const paymentTypeCautionID = 5; 
          this.paymentForm.get('paymentType').setValue(paymentTypeCautionID);
          this.paymentForm.get('amountReceived').setValue(amountToPay);
          this.collectWithCaution = result.isConfirmed;
        } else if (result.isDenied) {
          this.collectWithCaution = result.isDenied;

        }
      
      })
    }
  }

  private findPaymentTypesActiveNameAndIds() {
    this.paymentTypeService
      .findPaymentTypesActiveNameAndIds()
      .subscribe((response: any) => {
        this.paymentTypes = response;
      });
  }

  onGetamountReceived(index? : any) {
    let amountReceived = this.paymentForm.get("amountReceived").value;
    let amountReturned = 0;
    if (amountReceived > this.patientInvoice?.patientPart) {
      amountReturned = amountReceived - this.patientInvoice?.patientPart;
      this.amountReceivedIsvalid = false;
    } else {
      amountReturned = 0;
    }
    this.paymentForm.get("amountReturned").setValue(amountReturned);
  }
  

  private buildPatientInvoice(invoiceH : GMHISInvoiceHPartial): void {
    console.log(invoiceH);
    
    this.patientInvoice.patient.id = invoiceH.patientID;
    this.patientInvoice.billDate = invoiceH.dateOp;
    this.patientInvoice.patient.firstName = invoiceH.patientName.firstName;
    this.patientInvoice.patient.lastName = invoiceH.patientName.lastName;
    this.patientInvoice.insurance.name = invoiceH.insuranceName;
    this.patientInvoice.patientPart = invoiceH.moderatorTicket ? invoiceH.moderatorTicket : invoiceH.totalAmount;
    this.patientInvoice.partTakenCareOf = invoiceH.insurancePart;
    this.patientInvoice.totalAmount = invoiceH.totalAmount;
  }

   private buildPatientInvoiceAct(invoiceHItems: GMHISInvoiceHItemPartial[]): void {
    invoiceHItems.forEach( el => {
      this.patientInvoice.billActs.push({act: el.act.name, practicianFirstName: el.praticianName?.firstName, practicianLastName: el.praticianName?.lastName,actCost: el.totalAmount})
    })
   }

   
   private retrievePatient(patientID: number): void {
     this.subscription.add(
       this.patientService.retrieve(patientID).subscribe(
         (response: any) => {
           this.patient = response;
           console.log(this.patient);
           this.onCollectWithCaution(this.patient.solde);
         }
       )
     )
   }
}
