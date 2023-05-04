import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as DecoupedEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { PatientCroService } from 'src/app/_services/patient-cro.service';
import { PatientService } from 'src/app/_services/patient.service';
import { TypeCroService } from 'src/app/_services/type-cro.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { replaceDocVarialbles } from 'src/app/_utility/string/replaceDocParms';
import { slugify } from 'src/app/_utility/string/slugify';
import { UserService } from 'src/app/_services/user.service';
import { AppCookieService } from 'src/app/_services/app-cookie.service';

@Component({
  selector: 'app-cro-follow-up',
  templateUrl: './cro-follow-up.component.html',
  styleUrls: ['./cro-follow-up.component.css']
})
export class CroFollowUpComponent implements OnInit {
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
  public perPage = 10;


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

  practician: Object;

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

  croTypes: Object;

  croType: Object;

  patientCros: Object;

  croCustomText = false;

  patientCroId = 0;

  /**
   * pdf src for ngx-extended-pdf-viewer
   */
  docSrc: any;

  constructor(
    private typeCroService: TypeCroService,
    private patientCroService: PatientCroService,
    private patientService: PatientService,
    private sanitizer: DomSanitizer,
    private alertService: AlertService,
    private userService: UserService,
    private cookieService: AppCookieService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.typeCroService.getIdAndName().subscribe(res => { this.croTypes = res; });
    this.userService.findByUsername(this.cookieService.get('username')).subscribe(res => { this.practician = res; });

    this.patientService.findById(this.patientId).subscribe(res => {
      this.patient = res;
      this.getCros();
    });

  }

  /**
   * init form
   */
  initForm() {
    this.form = new FormGroup({
      date: new FormControl(dateOutputFormat(new Date())),
      cro: new FormControl(null),
    })
  }

  /**
   * get a collection of the patient certificated
   */
  getCros() {

    let data = {
      patientId: this.patientId,
      page: this.page,
    }

    this.patientCroService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.patientCros = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.patientCros = [];
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
    this.getCros();
  }

  /**
   * set the content for the chosen cro type
   * @param val 
   */
  setCroText() {
    let croTypeId = this.form.get("cro").value;

    this.typeCroService.findById(croTypeId).subscribe(res => {

    this.model.editorData = res['content'];

      for (let index = 0; index < Object.keys(this.patient).length; index++) {
        const element = '@@@-' + slugify(Object.keys(this.patient)[index]) + '-';
        this.model.editorData = replaceDocVarialbles(this.model.editorData, this.patient, this.practician)
      }
      this.previewData = this.sanitizer.bypassSecurityTrustHtml(this.model.editorData);
    })

  }

  /**
   *  tooble the hiden state of the editor
   */
  toggleEditorHidden() {
    this.croCustomText = this.croCustomText ? false : true;
  }

  /**
   * save data into the database
   */
  save() {

    if (this.patientCroId == 0) {
      let customText = !this.croCustomText ? null : this.model.editorData;
      let data = {
        "admission": this.admissionId,
        "docId": this.form.get('cro').value,
        "custom_text": customText,
        "id": this.patientCroId
      }

      this.patientCroService.save(data).subscribe(res => {
        if (res) {
          this.alertService.success('CRO creé avec succès !');
          this.page = this.page - 1;
          this.patientCroId = res.id;
          this.getCros();
        }
      });
    } else {
      this.alertService.error('Impossible de mofier un CRO qui a deja été crée, veillez creer un autre.')
    }
  }

  /**
   * generate pdf in the ngx-pdf-extended-viewer
   */
  generateCro(cro) {

    const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
    this.patient = cro['patient'];
    let doc = this.patientCroService.generatePdf(cro, patientTag);
    this.docSrc = doc.output('datauristring');
    // doc.html(data, {
    //   callback: function (doc) {
    //     doc.output('dataurlnewwindow');
    //   },
    //   x: 10,
    //   y: 10
    // });
  }

  /**
   *  reset the datas and the form
   */
  reset() {
   this.previewData = null;
   this.patientCroId = 0;
   this.form.get('cro').reset();
  }

}
