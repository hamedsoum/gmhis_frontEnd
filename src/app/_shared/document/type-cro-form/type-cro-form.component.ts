import { Component, EventEmitter, Input, OnInit, Output, Sanitizer, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import * as DecoupedEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { environment } from 'src/environments/environment';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { slugify } from 'src/app/_utility/string/slugify';
import { replaceDocVarialbles } from 'src/app/_utility/string/replaceDocParms';
import { TypeCro } from 'src/app/_models/typeCro.model';
import { TypeCroService } from 'src/app/_services/type-cro.service';
import { TypeCroFamilyService } from 'src/app/_services/type-cro-family.service';
import { documentTypes } from '../../../../appData/docTypeVariables';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-type-cro-form',
  templateUrl: './type-cro-form.component.html',
  styleUrls: ['./type-cro-form.component.css']
})
export class TypeCroFormComponent implements OnInit {

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
  typeCroId: number;

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
  typeCro: TypeCro;

/**
 * define CRO family options
 */
  croFamilies: object;

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
    private typeCroService: TypeCroService,
    private crofamilyService : TypeCroFamilyService,
    private sanitizer:  DomSanitizer
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.typeCroId) this.initUpdateAction();
    this.logo = environment.logo;
    this.crofamilyService.getIdAndName().subscribe(res => {this.croFamilies = res; });
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      content: new FormControl(null, Validators.required),
      croGroup: new FormControl(null, Validators.required),
      active: new FormControl('Y', Validators.required),

    });
  }


  /**
   * init the form value when updating
   */
  initUpdateAction() {

    this.typeCroService.findById(this.typeCroId).subscribe(
      res => {
        if (res) {
          this.form.patchValue(res);
          this.form.get('croGroup').setValue(res['croGroup']['id']);
        } else {
          this.errorAction("Modification impossible car l'élément n'existe pas", '/cro-type/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/cro-type/list');

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
      this.objectEmitter.emit({ croType: data, action: this.formAction })

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
    this.previewData = this.sanitizer.bypassSecurityTrustHtml(replaceDocVarialbles(this.model.editorData, patient, practician));
     
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
    this.errorAction('Action annulée', '/cro-type/list');
  }

  /**
   * get the clicked variable value
   */
  copyVariableValue(value) {
 
    this.clickedVariable = '@@@' + slugify(value);

  }

}
