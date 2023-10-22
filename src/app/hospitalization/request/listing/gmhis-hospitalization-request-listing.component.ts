import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Admission } from 'src/app/admission/model/admission';
import { IExamination } from 'src/app/medical-folder/examination/models/examination';
import { ExaminationPrintDocumentService } from 'src/app/medical-folder/examination/record/examination-print-document.service';
import { Patient } from 'src/app/patient/patient';
import { PatientService } from 'src/app/patient/patient.service';
import { GmhisUtils } from 'src/app/shared/base/utils';
import { PAGINATION_DEFAULT_SIZE, PAGINATION_SIZE } from 'src/app/shared/constant';
import { GMHISPagination } from 'src/app/shared/models/gmhis-domain';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { GMHISHospitalizationRequestPartial } from '../../api/domain/request/gmhis-hospitalization-request';
import { GmhisHospitalizationService } from '../../api/service/gmhis-hospitalization.service';
import { GMHISHospitalizationPdfService } from '../../api/service/gmhis.hospitalization.pdf.service';

@Component({selector: 'gmhis-hospitalization-request-listing-update',templateUrl: './gmhis-hospitalization-request-listing.component.html', providers: [GMHISHospitalizationPdfService]})
export class GMHISHospitalizationRequestListingComponent implements OnInit {
 
readonly TITLE = 'Démande d\'hospitalisation';

readonly sizes = PAGINATION_SIZE;


subscription: Subscription = new Subscription()

public searchFieldsForm: FormGroup;

public hospitalizationRequest : GMHISHospitalizationRequestPartial;

pagination: GMHISPagination = {};

loading: boolean;

currentIndex: number;

@ViewChild('hospitalizationRequestTab', {static: false}) table: HTMLElement;

docSrc: string;
examination: IExamination;
  admission: Admission;
  patient: Patient;

  constructor(
    private hospitalizationService: GmhisHospitalizationService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private examinationPrintDocumentService : ExaminationPrintDocumentService,
    private hospitalizationPdfService: GMHISHospitalizationPdfService,
    private patientService: PatientService


  ) { }

  ngOnInit(): void {
    this.buildFields();
    this.search()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onAfterPrintHospitalilazionCertificatePdf(hospitalilazionCertificateDocRef, hospitalisationRequest: GMHISHospitalizationRequestPartial): void {    
    let doc = this.hospitalizationPdfService.buildhospitalizationCertificatePdf(hospitalisationRequest);
    this.modalService.open(hospitalilazionCertificateDocRef, { size: 'xl' });
    this.docSrc = doc.output('datauristring'); 
  }

  public onAfterPrintMedicalCertificatePdf(hospitalilazionCertificateDocRef): void {    
    let doc = this.hospitalizationPdfService.buildMedicalCertificate('JEAN NOEL TAMAKLOE', 'SOUMAHORO MAMADOU HAMED');
    this.modalService.open(hospitalilazionCertificateDocRef, { size: 'xl' });
    this.docSrc = doc.output('datauristring'); 
  }

  buildMedicalCertificates

  public onOpenExaminationRecord(recordContent: any, patientID: number, examination):void {  
    this.examination = examination;
    this.retrievePatient(patientID,recordContent)
  }


  private retrievePatient(patientID: number, recordContent): void {
    this.subscription.add(
      this.patientService.retrieve(patientID).subscribe(
          (response: Patient) => {
            this.patient = response;
            this.modalService.open(recordContent, { size: 'lg' });
            let doc  = this.examinationPrintDocumentService.examinationRecordPDF(this.examination,this.patient)
            this.docSrc = doc.output('datauristring');
          },
          (err: HttpErrorResponse) => {}
      )
    )
  }


  public onHospitalizationRequestSelected(recordRef, hospitalizationRequest : GMHISHospitalizationRequestPartial): void {
    this.hospitalizationRequest = hospitalizationRequest;
      this.modalService.open(recordRef, {size: 'lg'})
  }

  public onPageChange(event) {
    this.searchFieldsForm.get('page').setValue(event - 1);
    this.search();
  }

  public onSearchValueChange(): void {
    this.search();
  }

  private buildFields(): void {
    this.searchFieldsForm = new FormGroup({
      page: new FormControl(0),
      size: new FormControl(PAGINATION_DEFAULT_SIZE),
      sort: new FormControl('id,desc'),
    })
  }

  private search(): void {
    this.loading = true;
    this.subscription.add(
      this.hospitalizationService.search(this.searchFieldsForm.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        (response: PageList) => {
         GmhisUtils.pageListMap(this.pagination, response);         
        },
        (errorResponse: HttpErrorResponse) => {         
        }
      )
    )
  }

  public onOpenCreateForm(hospitalizationRequestFormRef):void {
    this.modalService.open(hospitalizationRequestFormRef, { size: 'md' });
  }

  public onOpenUpdateForm(hospitalizationRequestFormRef, item?):void {
    this.hospitalizationRequest = item;
    this.modalService.open(hospitalizationRequestFormRef, { size: 'md' });
  }

  public handeDeathSaveEvent(): void{
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Décès declaré avec succès');
    this.search();
  }

  public handeDeathUpdateEvent():void {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Décès modifié avec succès');
    this.search();
  }

  public onPrintExaminationRecord(recordContent: any):void {  
    this.modalService.open(recordContent, { size: 'lg' });
    let doc  = this.examinationPrintDocumentService.examinationRecordPDF(this.examination,this.patient)
    this.docSrc = doc.output('datauristring');       
  }


}
