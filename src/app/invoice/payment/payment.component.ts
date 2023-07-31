import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ExamenCreateData } from 'src/app/examen/models/exam-dto';
import { ExamService } from 'src/app/examen/services/exam.service';
import { PaymentTypeService } from 'src/app/payment-type/service/payment-type.service';
import { labelValue } from 'src/app/shared/domain';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { InvoiceService } from '../service/invoice.service';
import { PaymentType } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input()
  invoice: any;

  @Output('addPayment') addPayment: EventEmitter<any> = new EventEmitter();
  selectedSize: number;


  paymentTypeList : labelValue[] = [
    { label: PaymentType.CASH, value: PaymentType.CASH },
    { label: PaymentType.CREDITCARD, value: PaymentType.CREDITCARD },
    { label: PaymentType.MOBILEMONEY, value: PaymentType },
  ];

  examDto: ExamenCreateData = {
    acts: [],
    admission: 0,
    diagnostic: 'ok ok ',
    id: 0,
    observation: null,
    examenTytpe: false
  };

  public paymentForm!: FormGroup;
  patientInvoice: any;
  paymentTypes: any;
  amountReceived: any;
  amountReceivedIsvalid: boolean;


  public paymentTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private paymentTypeService: PaymentTypeService,
    private examenService: ExamService

  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.initForm();
    if (this.invoice) {
      this.patientInvoice = this.invoice;
      this.examDto.admission = this.patientInvoice.admission.id;
    }
    this.findPaymentTypesActiveNameAndIds();
  }

  initForm() {
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

  collectAmount() {
    let cashRegister = this.paymentForm.get('cashRegister').value;
    let paymentType = this.paymentForm.get('paymentType').value;
    let amountReceived = this.paymentForm.get("amountReceived").value;

    let data = {
      cashRegister: cashRegister,
      bill: this.patientInvoice.id,
      paymentType: paymentType,
      amountReceived: this.paymentForm.get('amountReceived').value,
      amountReturned: this.paymentForm.get('amountReturned').value
    };

    if (amountReceived < this.patientInvoice?.patientPart) {
      this.amountReceivedIsvalid = true;
    } else {
      this.invoiceService.collectAmount(data).subscribe(
        (response: any) => {
          // this.saveExamanRequest();
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
