import { Component, Input, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../_utility/date/ngb-datepicker";
import * as DecoupedEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeCertificateService } from 'src/app/_services/type-certificate.service';
import { PatientService } from 'src/app/_services/patient.service';
import { PatientCertificateService } from 'src/app/_services/patient-certificate.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { slugify } from 'src/app/_utility/string/slugify';
import { replaceDocVarialbles } from 'src/app/_utility/string/replaceDocParms';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { UserService } from 'src/app/_services/user.service';
import { AppCookieService } from 'src/app/_services/app-cookie.service';


@Component({
  selector: 'app-certificate-follow-up',
  templateUrl: './certificate-follow-up.component.html',
  styleUrls: ['./certificate-follow-up.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider
})
export class CertificateFollowUpComponent implements OnInit {

  /**
   * form
   */
  form: FormGroup;

  @Input()
  patientId: number;

  @Input()
  admissionId: number;

  /**
  * init first page
  */
  public page = 0;

  /**
   * number of item par page default 10
   */
  public perPage = 25;


  /**
   *  order direction
   */
  order = 'desc';

  /**
   * order column default id
   */
  sort = 'id';

  /**
   * total items
   */
  public totalItem: number;

  /**
   * number of page
   */
  public pages: number;

  /**
   * handle the spinner
   */
  public loading = true;

  /**
   * define if request result has datas or no
   */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  /**
   * 
   */
  today = dateOutputFormat(new Date());

  patient: Object;

  pratician: Object;

  /**
    * date picker model
    */
  datePicker: NgbDateStruct;

  /**
  * assign the editor to a public property to make it accessible from the template
  */
  public Editor = DecoupedEditor;

  /**
  * data to preview
  */
  previewData: SafeHtml;

  /**
   * share a model in with the editor
   */
  public model = {
    editorData: ''
  };

  certificateTypes: Object;

  certificateType: Object;

  patientCertificates: Object;

  certificateCustomText = false;

  patientCertificateId = 0;

  /**
   * pdf src for ngx-extended-pdf-viewer
   */
  docSrc: any;

  constructor(
    private typeCertificateService: TypeCertificateService,
    private patientCertificateService: PatientCertificateService,
    private patientService: PatientService,
    private sanitizer: DomSanitizer,
    private alertService: AlertService,
    private userService: UserService,
    private cookieService: AppCookieService
    

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.typeCertificateService.getIdAndName().subscribe(res => { this.certificateTypes = res; });
    this.userService.findByUsername(this.cookieService.get('username')).subscribe(res => { this.pratician = res; });
    this.patientService.findById(this.patientId).subscribe(res => {
      this.patient = res;
      this.getCertificates();
    });
  }

  /**
   * init form
   */
  initForm() {
    this.form = new FormGroup({
      date: new FormControl(dateOutputFormat(new Date())),
      certificate: new FormControl(null),
    })
  }

  /**
   * get a collection of the patient certificated
   */
  getCertificates() {

    let data = {
      patientId: this.patientId,
      page: this.page,
    }

    this.patientCertificateService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.patientCertificates = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.patientCertificates = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })
  }

  /**
   * add the toolbar to the DOM
   * 
   */
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }


  /**
  * set the current page
  * @param pageNum 
  */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = this.page - 1;
    this.getCertificates();
  }

  /**
   * set the content for the chosen certificate type
   * @param val 
   */
  setCertificateText() {
    let certificateTypeId = this.form.get("certificate").value;

    this.typeCertificateService.findById(certificateTypeId).subscribe(res => {
  
    this.model.editorData = res['content'];

      for (let index = 0; index < Object.keys(this.patient).length; index++) {
        const element = '@@@-' + slugify(Object.keys(this.patient)[index]) + '-';
        this.model.editorData = replaceDocVarialbles(this.model.editorData, this.patient, this.pratician)
      }

      this.previewData = this.sanitizer.bypassSecurityTrustHtml(this.model.editorData);
    })

  }

  /**
   *  tooble the hiden state of the editor
   */
  toggleEditorHidden() {
    this.certificateCustomText = this.certificateCustomText ? false : true;
  }

  /**
   * save data into the database
   */
  save() {

    if (this.patientCertificateId == 0) {
      let customText = !this.certificateCustomText ? null : this.model.editorData;
      let data = {
        "admission": this.admissionId,
        "docId": this.form.get('certificate').value,
        "custom_text": customText,
        "id": this.patientCertificateId
      }

      this.patientCertificateService.save(data).subscribe(res => {
        if (res) {
          this.alertService.success('Certificat creé avec succès !');
          this.page = this.page - 1;
          this.patientCertificateId = res.id;
          this.getCertificates();
        }
      });
    } else {
      this.alertService.error('Impossible de modifier un certificat qui a deja été crée, veillez creer un autre.')
    }
  }

  /**
   * pgenerate pdf in the ngx-pdf-extended-viewer
   */
  generateCerticifate(certificate) {
      
    const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
    this.patient = certificate['patient'];
    let doc = this.patientCertificateService.generatePdf(certificate, patientTag);
    this.docSrc = doc.output('datauristring');

  }

  /**
   *  reset the datas and the form
   */
  reset() {
   this.previewData = null;
   this.patientCertificateId = 0;
   this.form.get('certificate').reset();
  }

}
