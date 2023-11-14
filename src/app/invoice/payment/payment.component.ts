import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ExamenCreateData } from 'src/app/examen/models/exam-dto';
import { ExamService } from 'src/app/examen/services/exam.service';
import { GMHISCautionTransactionCreate } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { PaymentTypeService } from 'src/app/payment-type/service/payment-type.service';
import { labelValue } from 'src/app/shared/domain';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import Swal from 'sweetalert2';
import { InvoiceService } from '../service/invoice.service';
import { PaymentType } from './payment';


type GMHISPaymentCreate = {
  cashRegister: number,
  bill: number,
  paymentType: string,
  amountReceived: number,
  amountReturned: number
}

@Component({selector: 'app-payment',templateUrl: './payment.component.html',styleUrls: ['./payment.component.scss']})
export class PaymentComponent implements OnInit {
  
  @Input() invoice: any;

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
  patientInvoice: any;
  paymentTypes: any;
  amountReceived: any;
  amountReceivedIsvalid: boolean;

  private paymentCreate: GMHISPaymentCreate;

  public paymentTypeForm: FormGroup;

  private collectWithCaution: boolean;

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private paymentTypeService: PaymentTypeService,
    private examenService: ExamService,
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
    this.findPaymentTypesActiveNameAndIds();
  }

  public onSave() {
    let formData = this.paymentForm.value;
    this.buildPaymentCreate(formData);
  
    if (this.paymentCreate.amountReceived < this.patientInvoice?.patientPart) {
      this.amountReceivedIsvalid = true;
    } else {
      this.collectAmount(this.paymentCreate, this.collectWithCaution );
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


  private buildPaymentCreate(formData: any) {
    this.paymentCreate = {
      cashRegister: formData.cashRegister,
      bill: this.patientInvoice.id,
      paymentType: formData.paymentType,
      amountReceived: formData.amountReceived,
      amountReturned: formData.amountReturned
    }
    
  }

  private createCautionTransaction(amount: number): void {
    let cautionTransactionCreate: GMHISCautionTransactionCreate = {
      libelle: 'Règlement de Facture',
      action: 'debit',
      amount: amount,
      patientID: this.patientInvoice.patient.id
    }
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
    console.log(data);
    
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
    console.log(solde);
    
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
  
  saveExamanRequest() {
    this.examDto.examenTytpe = true;
    this.patientInvoice?.billActs.forEach((el) => {
      this.examDto.acts.push(el["id"])
    })

    this.amountReceivedIsvalid = false;

    this.examenService.createExam(this.examDto).subscribe(
      (response: any) => {
        this.modalService.dismissAll();
      },
      (errorResponse: HttpErrorResponse) => {
        this.notificationService.notify(NotificationType.ERROR,errorResponse.error.message);
      }
    )


  }
}
