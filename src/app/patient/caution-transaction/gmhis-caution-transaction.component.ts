import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHISPatientPdfService } from "../api/service/gmhis.patient-pdf-service";
import { GMHISCautionTransactionPartial, Patient } from "../patient";
import { PatientService } from "../patient.service";

@Component({selector: 'gmhis-caution-transaction', templateUrl: './gmhis-caution-transaction.component.html', providers: [GMHISPatientPdfService]})
export class GMHISBalanceTransactionComponent implements OnInit, OnDestroy {
    @Input() styleClass;

    iconStyle = ['sh-color-primary']
    @Input() patient: Patient;
    
    @Input() accountBallance: number = 0;

    data: GMHISCautionTransactionPartial[];

    subscription: Subscription = new Subscription();

    loading: boolean = false;
    docSrc: string;

    constructor(private patientService: PatientService, private patientPdfService : GMHISPatientPdfService, private modalService: NgbModal) {}

    ngOnInit(): void {
        GmhisUtils.notNull(this.patient, "patientID");
        this.findTransactions(this.patient.id);
    }

    ngOnDestroy(): void {
       this.subscription.unsubscribe(); 
    }

    public onPrintTransactions(transactionsRef): void {   
        let doc = this.patientPdfService.buildcautionTransactionPdf(this.data, this.patient);
        this.modalService.open(transactionsRef, { size: 'xl' });
        this.docSrc = doc.output('datauristring'); 


    }
    
    private findTransactions(patientID: number): void {
        this.loading = true;
        this.subscription.add(
            this.patientService.findCautionTransactions(patientID)
            .pipe(finalize(()=> this.loading = false))
            .subscribe(
                (response) => {this.data = response},
                (error: HttpErrorResponse) => {}
            )
        )
      
    }
}