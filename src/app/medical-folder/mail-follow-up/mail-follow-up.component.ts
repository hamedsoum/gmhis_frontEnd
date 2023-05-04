import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AppCookieService } from 'src/app/_services/app-cookie.service';
import * as DecoupedEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { PatientCourierService } from 'src/app/_services/patient-courier.service';
import { PatientService } from 'src/app/_services/patient.service';
import { TypeMailService } from 'src/app/_services/type-mail.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { replaceDocVarialbles } from 'src/app/_utility/string/replaceDocParms';
import { slugify } from 'src/app/_utility/string/slugify';

@Component({
  selector: 'app-mail-follow-up',
  templateUrl: './mail-follow-up.component.html',
  styleUrls: ['./mail-follow-up.component.css']
})
export class MailFollowUpComponent implements OnInit {

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
 
   mailTypes: Object;
 
   mailType: Object;
 
   patientMails: Object;
 
   mailCustomText = false;
 
   patientMailId = 0;
 
   /**
    * pdf src for ngx-extended-pdf-viewer
    */
   docSrc: any;
 
   constructor(
     private typeMailService: TypeMailService,
     private patientMailService: PatientCourierService,
     private patientService: PatientService,
     private sanitizer: DomSanitizer,
     private alertService: AlertService,
     private userService: UserService,
     private cookieService: AppCookieService
   ) { }
 
   ngOnInit(): void {
     this.initForm();
     this.typeMailService.getIdAndName().subscribe(res => { this.mailTypes = res; console.log(res); });
     this.userService.findByUsername(this.cookieService.get('username')).subscribe(res => { this.practician = res;});
 
     this.patientService.findById(this.patientId).subscribe(res => {
       this.patient = res;
       this.getMails();
     });
 
   }
 
   /**
    * init form
    */
   initForm() {
     this.form = new FormGroup({
       date: new FormControl(dateOutputFormat(new Date())),
       mail: new FormControl(null),
     })
   }
 
   /**
    * get a collection of the patient certificated
    */
   getMails() {
 
     let data = {
       patientId: this.patientId,
       page: this.page,
     }
 
     this.patientMailService.findAllByPage(data).subscribe(
       res => {
         if (res) {
           this.loading = false;
           this.hasNoData = false;
           this.totalItem = res['totalElements'];
           this.pages = res['totalPages'];
           this.patientMails = res['content'];
           this.page = res['pageNumber'] + 1;
         };
       },
       error => {
         this.patientMails = [];
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
     this.getMails();
   }
 
   /**
    * set the content for the chosen cro type
    * @param val 
    */
   setMailText() {
     let croTypeId = this.form.get("mail").value;
 
     this.typeMailService.findById(croTypeId).subscribe(res => {
 
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
     this.mailCustomText = this.mailCustomText ? false : true;
   }
 
   /**
    * save data into the database
    */
   save() {
 
     if (this.patientMailId == 0) {
       let customText = !this.mailCustomText ? null : this.model.editorData;
       let data = {
         "admission": this.admissionId,
         "docId": this.form.get('mail').value,
         "custom_text": customText,
         "id": this.patientMailId
       }
 
       this.patientMailService.save(data).subscribe(res => {
         if (res) {
           this.alertService.success('Courier creé avec succès !');
           this.page = this.page - 1;
           this.patientMailId = res.id;
           this.getMails();
         }
       });
     } else {
       this.alertService.error('Impossible de mofier un  Courier qui a deja été crée, veillez creer un autre.')
     }
   }
 
   /**
    * generate pdf in the ngx-pdf-extended-viewer
    */
   generateMail(mail) {
 
     const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
     this.patient = mail['patient'];
     let doc = this.patientMailService.generatePdf(mail, patientTag);
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
    this.patientMailId = 0;
    this.form.get('mail').reset();
   }
 

}
