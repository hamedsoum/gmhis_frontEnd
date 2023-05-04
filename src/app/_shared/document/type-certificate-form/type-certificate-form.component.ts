import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeCertificate } from 'src/app/_models/typeCertificate.model';
import { TypeCertificateService } from 'src/app/_services/type-certificate.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import * as DecoupedEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { environment } from 'src/environments/environment';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { slugify } from 'src/app/_utility/string/slugify';
import { replaceDocVarialbles } from 'src/app/_utility/string/replaceDocParms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { documentTypes } from '../../../../appData/docTypeVariables';


@Component({
  selector: 'app-type-certificate-form',
  templateUrl: './type-certificate-form.component.html',
  styleUrls: ['./type-certificate-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class TypeCertificateFormComponent implements OnInit {

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
  typeCertificateId: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * child component output
   */
  @Output()
  objectEmitter: EventEmitter<any> = new EventEmitter();

  /**
   * the component model
   */
  typeCertificate: TypeCertificate;

  /**
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ];

  /**
   * Document type variables
   */
  docTypeVariables = documentTypes.variables;

  logo: string;

  /**
   * store the clicked variable value
   */
  clickedVariable: string

  /**
   * today's' date
   */
  today = dateOutputFormat(new Date());
  /**
   * assign the editor to a public property to make it accessible from the template
   */
  public Editor = DecoupedEditor;

  /**
   * share a model in with the editor
   */
  public model = {
    editorData: ''
  };

  /**
   * data to preview
   */
  previewData: SafeHtml;

  /**
   * add the toolbar to the DOM
   */
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  /**
   * action to do for display error msg and redirect
   * @param msg 
   * @param redirectTo 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };

  constructor(
    private router: Router,
    private alertService: AlertService,
    private typeCerticateService: TypeCertificateService,
    private sanitizer:  DomSanitizer
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.typeCertificateId) this.initUpdateAction();
    this.logo = environment.logo;
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      content: new FormControl(null, Validators.required),
      active: new FormControl('Y', Validators.required),

    });
  }


  /**
   * init the form value when updating
   */
  initUpdateAction() {

    this.typeCerticateService.findById(this.typeCertificateId).subscribe(
      res => {
        if (res) {
          this.form.patchValue(res);
          
        } else {
          this.errorAction("Modification impossible car l'élément n'existe pas", '/certificate-type/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/certificate-type/list');

      })
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {

    // reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    let data = this.form.value;

    if (this.form.valid) {
      this.objectEmitter.emit({ certificateType: data, action: this.formAction })

      if (this.formAction == "save_and_new") {
        this.initForm();
      }

    } else {
      this.alertService.error('Formulaire non valid');
    }
  }


  /**
   * 
   */
preview(){

 let patient = documentTypes.patient_test;
 let practician = documentTypes.practician_test;

  for (let index = 0; index < Object.keys(patient).length; index++) {
    const element = '@@@-' + slugify(Object.keys(patient)[index]) + '-';
    this.previewData =this.sanitizer.bypassSecurityTrustHtml(replaceDocVarialbles(this.model.editorData, patient, practician));

  }
  
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
    this.errorAction('Action annulée', '/certificate-type/list');
  }

  /**
   * get the clicked variable value
   */
  copyVariableValue(value) {
 
    this.clickedVariable = '@@@' + slugify(value);

  }

}
