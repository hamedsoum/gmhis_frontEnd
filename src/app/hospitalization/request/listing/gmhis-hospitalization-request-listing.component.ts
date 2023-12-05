import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { GmhisHospitalizationRequestService } from '../../api/service/request/gmhis-hospitalization.service';
import { GMHISHospitalizationRequestPdfService } from '../../api/service/request/gmhis.hospitalization.pdf.service';

@Component({selector: 'gmhis-hospitalization-request-listing',templateUrl: './gmhis-hospitalization-request-listing.component.html', providers: [GMHISHospitalizationRequestPdfService]})
export class GMHISHospitalizationRequestListingComponent implements OnInit {
 
readonly TITLE = 'Démande d\'hospitalisation';

readonly sizes = PAGINATION_SIZE;


subscription: Subscription = new Subscription()

public searchFieldsForm: FormGroup;

public hospitalizationRequestSelected : GMHISHospitalizationRequestPartial;

pagination: GMHISPagination = {};

loading: boolean;

currentIndex: number;

@ViewChild('hospitalizationRequestTab', {static: false}) table: HTMLElement;

  docSrc: string;

  examination: IExamination;

  admission: Admission;
  
  patient: Patient;

  constructor(
    private hospitalizationService: GmhisHospitalizationRequestService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private examinationPrintDocumentService : ExaminationPrintDocumentService,
    private hospitalizationPdfService: GMHISHospitalizationRequestPdfService,
    private patientService: PatientService


  ) { }

  ngOnInit(): void {
    this.buildFields();
    this.search()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public handleHospitalizationSaveEvent(): void {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Hospitalisation Crée avec succès');
    this.search();
  }

  public onAfterPrintHospitalilazionCertificatePdf(hospitalilazionCertificateDocRef): void {    
    let doc = this.hospitalizationPdfService.buildhospitalizationCertificatePdf(this.hospitalizationRequestSelected);
    this.modalService.open(hospitalilazionCertificateDocRef, { size: 'xl' });
    this.docSrc = doc.output('datauristring'); 
  }

  public onAfterPrintMedicalCertificatePdf(hospitalilazionCertificateDocRef): void {    
    let doc = this.hospitalizationPdfService.buildMedicalCertificate('JEAN NOEL TAMAKLOE', 'SOUMAHORO MAMADOU HAMED');
    this.modalService.open(hospitalilazionCertificateDocRef, { size: 'xl' });
    this.docSrc = doc.output('datauristring'); 
  }

  public onOpenExaminationRecord(recordContent: any):void {  
    this.examination = this.hospitalizationRequestSelected.examination;
    let patientID = this.hospitalizationRequestSelected.patientID;
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

  rowSelected(hospitalizationRequestSelected: GMHISHospitalizationRequestPartial, index: number) {
    this.currentIndex = index;
    this.hospitalizationRequestSelected = hospitalizationRequestSelected;    
  }

  public onHospitalizationRequestSelected(recordRef, hospitalizationRequest : GMHISHospitalizationRequestPartial): void {
    this.hospitalizationRequestSelected = hospitalizationRequest;    
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
        (response: PageList) => {GmhisUtils.pageListMap(this.pagination, response);},
        (errorResponse: HttpErrorResponse) => {}))
  }

  public onOpenCreateForm(hospitalizationRequestFormRef):void {
    this.modalService.open(hospitalizationRequestFormRef, { size: 'md' });
  }

  public onOpenUpdateForm(hospitalizationRequestFormRef, item?):void {
    this.hospitalizationRequestSelected = item;
    this.modalService.open(hospitalizationRequestFormRef, { size: 'md' });
  }

  public handleHospitalizationRequestUpdateEvent():void {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Deemande d\'hospitalisation modifiée avec succès');
    this.search();
  }

  public onPrintExaminationRecord(recordContent: any):void {  
    this.modalService.open(recordContent, { size: 'lg' });
    let doc  = this.examinationPrintDocumentService.examinationRecordPDF(this.examination,this.patient)
    this.docSrc = doc.output('datauristring');       
  }

  public onOpenModal(Ref: any): void {
    
    this.modalService.open(Ref, { size: 'xl' });
  }

}
