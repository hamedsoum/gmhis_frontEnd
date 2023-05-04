import { Component, Input, OnInit, Output, EventEmitter, Injectable, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateDate } from 'src/app/_utility/CustomValidators/date.validator';
import { PatientService } from 'src/app/_services/patient.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { AdmissionService } from "./../../../_services/admission.service";
import { Router } from "@angular/router";
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { InsuranceService } from "./../../../_services/insurance.service";
import { InsuranceSubscriberService } from "./../../../_services/insurance-subscriber.service";
import { InsuredService } from "./../../../_services/insured.service";
import { AdmissionInvoice } from 'src/app/_models/admissionInvoice.model';
import { Admission } from 'src/app/_models/admission.model';
import { AdmissionInvoiceService } from 'src/app/_services/admission-invoice.service';
import jsPDF from 'jspdf';
import { environment } from 'src/environments/environment';
import { ActService } from 'src/app/_services/act.service';
import { PracticianService } from 'src/app/_services/practician.service';
import { ConventionService } from 'src/app/_services/convention.service';
import { CashRegisterService } from 'src/app/_services/cash-register.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider

})
export class InvoiceFormComponent implements OnInit {

  /**
   *   form Group
   */
  form: FormGroup;

  /**
  * form submission action, it will get the value of the action to do
  */
  formAction = '';

  /**
   * invalid from controls
   */
  invalidFormControls: any;

  /**
   * parent component input
   */
  @Input()
  invoiceId: number;

  /**
   * parent component input
   */
  @Input()
  admissionId: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * child component output
   */
  @Output()
  invoiceEmitter: EventEmitter<any> = new EventEmitter();

  /**
    * date picker model
    */
  datePicker: NgbDateStruct;

  /** 
   * the curent component
  */
  @Input()
  component: string;

  /**
   * cash register compoenent  or not
   */
  cashRegisterComponent: boolean;

  /**
   * invoice component or not
   */
  invoiceComponent: boolean;

  /**
   * 
   */
  updateInvoiceComponent: boolean;

  /**
   * define patient types options
   */
  patientTypes = [
    { id: 'A', value: 'Assuré' },
    { id: 'C', value: 'Comptant' },
  ]

  /**
   * define patient insurances options
   */
  patientInsurances = [];

  patient: Object;
  acts: Object;
  practicians: Object;
  conventions: Object;
  paymentTypes: Object;
  cashRegisters: Object;

  @Input()
  invoice: AdmissionInvoice;

  @Input()
  createdInvoice: AdmissionInvoice;

  admission: Admission;
  partTakenCareOf: number;
  patientPart: number = 0;
  total: number;
  discount: number = 0;
  insured = null;
  isCollected = false;

  /**
   * insurances form array
   */
  actFormGroup = new FormArray([]);

  /**
   * act inputs
   */
  actInputs = [];

  /**
   * action to do for display error msg and redirect
   * @param msg 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };


  constructor(
    private admissionService: AdmissionService,
    private router: Router,
    private alertService: AlertService,
    private invoiceService: AdmissionInvoiceService,
    private insuranceSubscriberService: InsuranceSubscriberService,
    private patientService: PatientService,
    private insuredService: InsuredService,
    private actService: ActService,
    private practicianService: PracticianService,
    private conventionService: ConventionService,
    private cashRegisterService: CashRegisterService,
    private paymentTypeService: PaymentTypeService
  ) { }

  ngOnInit(): void {

    this.initForm();
    this.actService.getIdAndName().subscribe(res => { this.acts = res; });
    this.practicianService.getIdAndName().subscribe(res => { this.practicians = res; });
    this.cashRegisterService.getIdAndName().subscribe(res => { this.cashRegisters = res; });
    this.conventionService.getIdAndName().subscribe(res => { this.conventions = res; });
    this.paymentTypeService.getIdAndName().subscribe(res => { this.paymentTypes = res; });
    this.initAddAction();
    this.initUpdateAction();
    this.cashRegisterComponent = (this.component == 'AddCashOperationComponent') ? true : false;
    this.invoiceComponent = (this.component == 'AddInvoiceComponent') ? true : false;
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      admission: new FormControl(0),
      admissionNumber: new FormControl({ value: '', disabled: true }),
      patientExternalId: new FormControl({ value: '', disabled: true }),
      patientName: new FormControl({ value: '', disabled: true }),
      service: new FormControl({ value: '', disabled: true }),
      invoiceDate: new FormControl(''),
      patientType: new FormControl(null, Validators.required),
      insurance: new FormControl(null),
      subscriber: new FormControl({ value: '', disabled: true }),
      coverRate: new FormControl(''),
      consumableRate: new FormControl(0),
      discountInPercentage: new FormControl(0),
      discountInCfa: new FormControl(0),
      total: new FormControl(0),
      cashRegister: new FormControl(null),
      // partTakenCareOfNumber: new FormControl(''),
      patientPart: new FormControl(0),
      partTakenCareOf: new FormControl(0),
      // partTakenCareOfDate: new FormControl(''),
      // accountNumber: new FormControl(''),
      invoiceEdition: new FormControl(''),
      convention: new FormControl(null),
      paymentType: new FormControl(null)

    });
  }

  /**
   * init the form value when adding
   */
  initAddAction() {
    if (this.admissionId) {

      this.admissionService.findById(this.admissionId).subscribe(
        admission => {
          if (admission) {
            this.form.get('admission').setValue(admission.id);
            this.form.get('admissionNumber').setValue(admission.admissionNumber);
            this.form.get('patientExternalId').setValue(admission.patientExternalId);
            this.form.get('patientName').setValue(admission.patientFirstName + ' ' + admission.patientMaidenName + ' ' + admission.patientLastName);
            this.form.get('service').setValue(admission.service);
            this.form.get('invoiceDate').setValue(dateOutputFormat(new Date()));

            this.insuredService.findByPatientId(admission.patient).subscribe(res => {
              console.log(res);
              
              this.patientInsurances = res;
            })

          } else {
            this.errorAction("facturation impossible car l'admission n'existe pas", '/admission/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de l'ajout", '/admission/list')
        })
    }

  }

  /**
   * init this form value when updating
   */
  initUpdateAction() {

    if (this.invoiceId) {

      this.invoiceService.findById(this.invoiceId).subscribe(
        invoice => {
          if (invoice) {
            if (invoice.billStatus == 'C') this.isCollected = true;
            this.insuredService.findByPatientId(invoice.patientId).subscribe(res => {
              this.patientInsurances = res;
            });

            this.form.get('id').setValue(invoice.id);
            this.form.get('admission').setValue(invoice.admissionId);
            this.form.get('admissionNumber').setValue(invoice.billNumber);
            this.form.get('patientExternalId').setValue(invoice.patientExternalId);
            this.form.get('patientName').setValue(invoice.patientFirstName + ' ' + invoice.patientMaidenName + ' ' + invoice.patientLastName);
            this.form.get('service').setValue(invoice.serviceName);
            this.form.get('invoiceDate').setValue(dateOutputFormat(invoice.billDate));

            if (this.cashRegisterComponent) {
              let pt = (invoice.patientType == 'C') ? 'Client comptant' : 'Assuré';
              this.form.get('patientType').setValue(pt);
              this.form.get('convention').setValue(invoice.convention);
              this.form.get('insurance').setValue(invoice.insuranceName);
            } else {
              this.form.get('patientType').setValue(invoice.patientType);
              this.form.get('convention').setValue(invoice.conventionId);
              this.form.get('insurance').setValue(invoice.insuranceId);
            }

            
            this.form.get('coverRate').setValue(invoice.coverage);
            this.form.get('subscriber').setValue(invoice.subscriberName);
            this.form.get('discountInCfa').setValue(invoice.discountInCfa);
            this.form.get('discountInPercentage').setValue(invoice.discountInPercentage);
            this.form.get('patientPart').setValue(invoice.patientPart);
            this.form.get('partTakenCareOf').setValue(invoice.partTakenCareOf);
            this.form.get('total').setValue(invoice.totalAmount);
            this.form.get('cashRegister').setValue(invoice.cashRegister);

            this.actService.findByBill(invoice.id).subscribe(res => {

              if (res.length > 0) {
                for (let index = 0; index < res.length; index++) {
                  this.actRowAdd();

                  if (this.cashRegisterComponent) {
                    let practicianFullName = res[index].practicianFirstName + " " + res[index].practicianLastName;
                    this.actFormGroup.controls[index].get('practician').setValue(practicianFullName);
                    this.actFormGroup.controls[index].get('act').setValue(res[index].actName);
                    this.actFormGroup.controls[index].get('cost').setValue(res[index].actCost);
                  } else {
                    this.actFormGroup.controls[index].get('practician').setValue(res[index].practician);
                    this.actFormGroup.controls[index].get('act').setValue(res[index].act);
                    this.onActSelect(index);
                  }

                  this.actFormGroup.controls[index].get('admission').setValue(invoice.admissionId);

                }
              }
            });
          } else {
            this.errorAction("Modification impossible car la facture n'existe pas", '/admission/invoice/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/admission/invoice/list');
        })
    }
  }

  /**
   * get the bill DTO
   */
  getBillDto() {

    let admission = this.form.get('admission').value;
    let data = {
      "id": this.form.get("id").value,
      "admission": admission,
      "billStatus": "R",
      "billType": "A",
      "convention": this.form.get("convention").value,
      "discountInCfa": this.form.get("discountInCfa").value,
      "discountInPercentage": this.form.get("discountInPercentage").value,
      "insured": this.insured,
      "patientType": this.form.get("patientType").value,
      "acts": this.actFormGroup.value
    }

    return data;
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {
    // reset alerts on submit
    this.alertService.clear();
    // //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    let validActs = true;
    let acts = this.actFormGroup.value;

    if (this.form.valid) {

      if (acts.length > 0) {
        if (this.actFormGroup.valid) {
          this.invoiceEmitter.emit({ invoice: this.getBillDto(), action: this.formAction });
        } else {
          this.alertService.error("Veillez renseigner correctement les informations sur l'(les) act(s)");
         return null;
        }
      } else {
        this.errorAction("Veillez selectionner des acts a facturer", 'admission/add-invoice/' + this.admissionId);
        return null;
      }
    } else {
      this.alertService.error('Formulaire non valid');
    }
  }


  /**
   * 
   * @param selectedOption 
   */
  setInsuranceData() {
    let insurance = this.form.get("insurance").value;
    let subscriber = this.patientInsurances.find(e => e.insuranceId === insurance)['subscriberName'];
    let coverRate = this.patientInsurances.find(e => e.insuranceId === insurance)['coverage'];
    this.insured = this.patientInsurances.find(e => e.insuranceId === insurance)['id'];
    this.form.get('coverRate').setValue(coverRate);
    this.form.get('subscriber').setValue(subscriber);
  }

  /**
   * set the consumable rate
   */
  calculConsommableRate() {
    let coverRate = this.form.get('coverRate').value;
    let consumableRate = 100 - coverRate;
    this.form.get('consumableRate').setValue(consumableRate);
  }

  /**
   * get the bill total amount
   */
  calculInvoiceCost() {
    let data = this.getBillDto();
    this.invoiceService.getCost(data).subscribe(res => {
      this.form.get("partTakenCareOf").setValue(res.partTakenCareOf);
      this.form.get("patientPart").setValue(res.patientPart);
      this.form.get("total").setValue(res.totalAmount);
    })
  }

  /**
   * get the form submission action
   * @param action : string
   */
  actionToDo(action) {
    this.formAction = action;
  }

  /**
   * action to Do when  ckick on cancel button
   */
  cancelAction() {
    this.errorAction('Action annulée', '/admission/invoice/list');
  }

  /**
   * create dynamic insured inputs
   */
  actRowAdd() {
    const group = new FormGroup({
      practician: new FormControl('', Validators.required),
      act: new FormControl('', Validators.required),
      cost: new FormControl({ value: 0, disabled: true }),
      admission: new FormControl(this.admissionId)
    });

    this.actInputs.push('selectedInsurance' + this.actFormGroup.length);
    this.actFormGroup.push(group);
  }

  /**
   * 
   * @param row get act's information on act change
   */
  onActSelect(row) {
    let data = {
      "act" : this.actFormGroup.controls[row].get('act').value,
      "convention" : this.form.get('convention').value
    } 

      this.invoiceService.getActCost(data).subscribe(res => {
        this.actFormGroup.controls[row].get('cost').setValue(res);
    });

  }

  /**
    * remove the correponding row from the FormGroup
    * @param row remove an act row from the DOM
    */
  deleteActRow(row) {
    this.actFormGroup.removeAt(row);
  }

  /**
   * collect a bill
   */
  collectAmount() {

    this.alertService.clear();

    if (this.isCollected) {
      this.errorAction('cette facture a deja ete encaisser', '/admission/bill/invoice')
    } else {

      this.form.get("cashRegister").clearValidators();
      this.form.get("paymentType").clearValidators();
      this.form.get("cashRegister").setValidators([Validators.required]);
      this.form.get("paymentType").setValidators([Validators.required]);
      this.form.get("cashRegister").updateValueAndValidity();
      this.form.get("paymentType").updateValueAndValidity();

      this.invalidFormControls = invalidformControls(this.form);

      let cashRegister = this.form.get("cashRegister").value
      let paymentType = this.form.get("paymentType").value

      let data = {
        "cashRegister": cashRegister,
        "bill": this.form.get("id").value,
        "paymentType": paymentType,
      }

      if (this.form.valid) {
        this.invoiceService.collectAmount(data).subscribe(res => {
          this.alertService.success('Facture encaissé !');
          this.router.navigate(["/admission/invoice/list"]);
        });
      } else {
        this.alertService.error('Formulaire non valide');
      }
    }
  }

  /**
   *  print the invoice in a jspdf doc 
   */
  public generateInvoice(): void {

    //   let doc = new jsPDF('p', 'pt', 'a4');

    //   let patientType = this.createdInvoice.patientType == "a" ? "Patient assuré ": "Client comptant";

    //   let discount = this.createdInvoice.discountInCfa ? this.createdInvoice.discountInCfa : this.createdInvoice.discountInPercentage ;

    //   let docHead = ' <table style="font-size: 14px"><tr><td><img src="'+ environment.logo +'" alt="Logo" width="100"></td>' +
    //     '<td class="text-bold text-nowrap"> Numero patient : ' + this.admission.patient.patientExternalId + '</td></tr></table>';

    //    let info = '<table class="ml-2 mt-5" style="width: 560px; font-size: 12px;"><tr><td class="text-nowrap"> <strong>Facture N°: </strong> ' + 'FA-012' + this.createdInvoice.invoiceNumber + '</td>' +
    //       '<td  class="text-nowrap pl-5"> <strong>Date: </strong> ' + dateOutputFormat(this. createdInvoice.date) + '</td>' +
    //       '</tr><tr><td  class="text-nowrap text-uppercase"> <strong>Patient:&nbsp; &nbsp;</strong>' + this.admission.patient.firstName +"&nbsp;&nbsp;"+ this.admission.patient.lastName + '</td>' +
    //       '<td  class="text-nowrap pl-5"> <strong>contact: </strong>' +  this.admission.patient.contact1 + '</td>' +
    //       '</tr><tr><td  class="text-nowrap"> <strong>Type de client: </strong>' + patientType + '</td>' +
    //       '<td  class="text-nowrap pl-5"><strong>Etab.payeur '+ '' +' </strong></td></tr>' +
    //       '<tr><td class="text-nowrap"><strong>Matricule assuré: '+ '' +' </strong></td><td></td></tr></table>';

    //   let data = '<table class="table table-bordered mt-2 ml-2 table-sm" style="font-size: 12px; width:560px; border-bottom: none; border-left: none;"><thead class="text-center" style="background-color: #DCDCDC;">' +
    //       '<th>Date</th><th>Service</th><th>Medecin</th><th>Acte</th><th>Coût</th></thead>' +
    //       '<tbody><tr><td>' + dateOutputFormat(this.admission.admissionDate )+'</td><td class="text-capitalized">' + this.admission.service.name +'</td>' +
    //       '<td class="text-capitalized">' + this.admission.doctor.name +'</td><td class="text-capitalized">' + this.admission.act.name +'</td><td class="text-nowrap">' + this.admission.act.price + ' fcfa</td></tr>'+
    //       '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Part&nbsp;PEC</td><td colspan="1">' + this.createdInvoice.partTakenCareOf +' fcfa</td></tr>' +
    //       '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Part&nbsp;consommable</td><td colspan="1" class="text-danger text-bold">' + this.createdInvoice.patientPart + ' fcfa</td>' + '</td></tr>' +
    //       '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Remise</td><td colspan="1">' + discount + '</td></tr>' +
    //       '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Total</td><td colspan="1" class="text-bold">' + this.createdInvoice.total + ' fcfa </td></tr>' +
    //       '</tbody></table>';

    //  let docFoot = '<div style="width:540px; text-align:center; border-top:1px solid gray; padding-top:2px; font-size:10px; color:gray">' + environment.documentFooter + '</div>';

    //  let  invoiceInfo = '<div style="min-height: 750px;">' + docHead + info + data +'</div>' +docFoot;

    //   doc.html(invoiceInfo, {
    //     callback: function (doc) {
    //       doc.output('dataurlnewwindow');
    //     },
    //     x: 10,
    //     y: 10
    //   });

  }
}
