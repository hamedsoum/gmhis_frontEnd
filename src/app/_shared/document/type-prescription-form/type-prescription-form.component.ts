import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypePrescription } from 'src/app/_models/typePrescription.model';
import { TypePrescriptionService } from 'src/app/_services/type-prescription.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import {PrescribingMedicationComponent} from 'src/app/_shared/prescribing-medication/prescribing-medication.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-prescription-form',
  templateUrl: './type-prescription-form.component.html',
  styleUrls: ['./type-prescription-form.component.css']
})
export class TypePrescriptionFormComponent implements OnInit {

  @ViewChild(PrescribingMedicationComponent) pmComponent;

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
  prescriptionId: number;

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
  prescription: TypePrescription

  /**
  * define states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ]

  /**
   * init first page
   */
  public page = 0;

  /**
   * number of item par page default 10
   */
  public perPage = 25;

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
   * order column default id
   */
  sort = 'id';

  /**
   *  order direction
   */
  order = 'desc';


  /**
   * define if request result has datas or no
   */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  selectedDrugs = [];
  
  drugFormGroup : FormArray;

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
    private prescriptionService: TypePrescriptionService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.prescriptionId) this.initUpdateAction();
  }

  // ngAfterViewInit() {
  //   this.drugFormGroup = this.pmComponent.drugFormGroup;
  // }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      active: new FormControl("Y"),
      drugIds: new FormControl(null)
    });
    this.drugFormGroup = new FormArray([]);
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {
    this.prescriptionService.findById(this.prescriptionId).subscribe(
      prescription => {
       
        if (prescription) {
          this.form.get('name').setValue(prescription.name);
          this.form.get('id').setValue(prescription.id);
          let drugs = prescription.drugs;

          drugs.forEach(element => {
            this.selectedDrugs.push(element.drug);
            const group = new FormGroup({
              id: new FormControl(element.id),
              dosage: new FormControl(element.dosage),
              drug: new FormControl(element.drug),
              qty: new FormControl(element.qty),
              duration: new FormControl(element.duration)
            });
            this.drugFormGroup.push(group);
          });

        } else {
          this.errorAction("Modification impossible car le l'ordonnance n'existe pas", '/prescription-type/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/prescription-type/list');

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
    this.prescription = this.form.value;
    let drugs = this.drugFormGroup.value;

    if (this.form.valid) {
      if (drugs.length != 0) {
        this.prescription.drugs = JSON.stringify(drugs);
        this.objectEmitter.emit({ prescription: this.prescription, action: this.formAction });
      } else {
        this.alertService.error('Veillez ajouter des medicaments a l\'ordonnance!');
      }
    } else {
      this.alertService.error('Formulaire non valid');
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
    this.errorAction('Action annulée', '/prescription-type/list');
  }

  preview(){
    this.drugFormGroup = this.pmComponent.drugFormGroup;
  }

}
