import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as DecoupedEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { TherapeuticClassService } from 'src/app/_services/therapeutic-class.service';
import { PharmacologicalFormService } from 'src/app/_services/pharmacological-form.service';
import { DciService } from 'src/app/_services/dci.service';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { PatientPrescriptionService } from 'src/app/_services/patient-prescription.service';
import { TypePrescriptionService } from 'src/app/_services/type-prescription.service';
import { PrescribingMedicationComponent } from 'src/app/_shared/prescribing-medication/prescribing-medication.component';
import { AlertService } from 'src/app/_utility/alert/alert.service';


@Component({
  selector: 'app-prescription-follow-up',
  templateUrl: './prescription-follow-up.component.html',
  styleUrls: ['./prescription-follow-up.component.css']
})
export class PrescriptionFollowUpComponent implements OnInit {

  @ViewChild(PrescribingMedicationComponent) pmComponent;

  form: FormGroup;

  prescriptionTypeForm: FormGroup;

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
    * displays if success
    */
  message: string;

  /**
   * displays if error
   * 
   */
  error: string;

  /**
   * pdf src for ngx-extended-pdf-viewer
   */
  docSrc: any;

  public prescribedDrugsArray = [];

  @Input()
  patientId: number;

  @Input()
  admissionId: number;

  /**
   * therapeutic classes options
   */
  therapeuticClasses: object;

  pharmaForms: object;

  /**
   * DCI options
   */
  dcis: object;

  patientPrescriptions: Object;

  prescription: Object;

  /**
   * define drugs options
   */
  drugs = [];

  prescriptionTypes: Object;

  prescriptionCustomText = false;

  selectedDrugs = [];

  drugFormGroup = new FormArray([]);

  prescriptionId = 0;

  patient: object;

  constructor(
    private theraClassService: TherapeuticClassService,
    private pharmaFormService: PharmacologicalFormService,
    private dciService: DciService,
    private patientPrescriptionService: PatientPrescriptionService,
    private prescriptionTypeService: TypePrescriptionService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    console.log(JSON.stringify("id : null, dosage : deux matin deux le soir, drug : paracetamol, qty : 3, duration : 3 semaine "));
    // {
    //   id: new FormControl(item.id),
    //   dosage: new FormControl(item.dosage),
    //   drug: new FormControl(item.drug),
    //   qty: new FormControl(item.qty),
    //   duration: new FormControl(item.duration)
    // }
    this.initForm();
    this.theraClassService.getIdAndName().subscribe(res => { this.therapeuticClasses = res; });
    this.pharmaFormService.getIdAndName().subscribe(res => { this.pharmaForms = res; });
    this.dciService.getIdAndName().subscribe(res => { this.dcis = res; });
    this.prescriptionTypeService.getIdAndName().subscribe(res => { this.prescriptionTypes = res; });
    this.getPrescriptions();
  }

  initForm() {
    this.form = new FormGroup({
      prescriptionType: new FormControl(null)
    })
  }

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
   * add the toolbar to the DOM
   */
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }


  /**
   * get all patient check ups by page
   */
  getPrescriptions() {
    let data = {
      patientId: this.patientId,
      page: this.page,
    }

    this.patientPrescriptionService.findAllByPatientAndPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.patientPrescriptions = res['content'];
          this.page = res['pageNumber'] + 1;

        };
      },
      error => {
        this.patientPrescriptions = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })

  }

  /**
   * 
   */
  save() {
    this.message = null;
    this.error = null;

    let data = {
      "admission": this.admissionId,
      "drugs": JSON.stringify(this.drugFormGroup.value),
      "drugServed":null,
      "id": this.prescriptionId
    }

    if (this.prescriptionId == 0) {
      this.patientPrescriptionService.save(data).subscribe(res => {
        if (res) {
          this.message = "Ordonance creé avec succès!";
          this.prescription = res;
          this.prescriptionId = res['id'];
        }
      })

    } else {
      this.error = 'Impossible de mofier une ordonnance qui a deja été crée, veillez creer une autre.';
    }
  }

  setPrescriptionContent() {
    let pTypeId = this.form.get("prescriptionType").value;

    this.prescriptionTypeService.findById(pTypeId).subscribe(res => {

      this.drugs = res.drugs;

      this.selectedDrugs = this.drugs.map(({ drug }) => drug);
      this.drugFormGroup = new FormArray([]);
      this.drugs.forEach(item => {
        const group = new FormGroup({
          id: new FormControl(item.id),
          dosage: new FormControl(item.dosage),
          drug: new FormControl(item.drug),
          qty: new FormControl(item.qty),
          duration: new FormControl(item.duration)
        });

        this.drugFormGroup.push(group);
      })
    })
  }

  /**
  * generate precription document
  */
  generatePrescription(prescription) {
    const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
    this.patient = prescription['patient'];
    let doc = this.patientPrescriptionService.generatePdf(prescription, patientTag);
    this.docSrc = doc.output('datauristring');
  }

  /**
  * set the current page
  * @param pageNum 
  */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = this.page - 1;
    this.getPrescriptions();
  }


  /**
   * 
   */
  atModalshow() {
    this.message = null;
    this.error = null;
  }

  /**
   * 
   */
  atModalsClose() {
    this.selectedDrugs = [];
    this.prescriptionId = 0;
    this.form.reset();
    this.drugFormGroup = new FormArray([]);
  }
}
