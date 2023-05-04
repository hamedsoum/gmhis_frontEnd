import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckUp } from 'src/app/_models/checkUp.model';
import { ActCategoryService } from 'src/app/_services/act-category.service';
import { ActFamilyService } from 'src/app/_services/act-family.service';
import { ActService } from 'src/app/_services/act.service';
import { CheckUpService } from 'src/app/_services/check-up.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-up-form',
  templateUrl: './check-up-form.component.html',
  styleUrls: ['./check-up-form.component.css']
})
export class CheckUpFormComponent implements OnInit {

  /**
   *   form Group
   */
  form: FormGroup;

  /**
   * form Group
   */
  actForm: FormGroup;

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
  checkUpId: number;

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
  checkUp: CheckUp

  /**
  * define states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ]

  /**
   * define categories options
   */
  categories: object;

  /**
  * define families options
  */
  families: object;

  /**
    * handle the spinner
    */
  public loading = true;

  /**
    * define acts options
    */
  acts: object;

  /**
  * define if request result has datas or no
  */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  /**
  * selected Acts
  */
  selectedActs = [];

  /**
   * check up name
   */
  ckeckUpName = "Bilan médical";

  /**
   * logo
   */
  logo = environment.logo;


  /**
   * today's' date
   */
  today = dateOutputFormat(new Date());

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
    private checkUpService: CheckUpService,
    private actService: ActService,
    private actFamilyService: ActFamilyService,
    private actCategoryService: ActCategoryService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.checkUpId) this.initUpdateAction();
    this.actCategoryService.getIdAndName().subscribe(res => { this.categories = res; });
    this.actFamilyService.getIdAndName().subscribe(res => { this.families = res; });
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      active: new FormControl("Y"),
      acts: new FormControl(null)
    });

    this.actForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl(null),
      family: new FormControl(null),
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {
    this.checkUpService.findById(this.checkUpId).subscribe(
      checkUp => {
        if (checkUp) {
          this.checkUp = checkUp;
          this.form.get('name').setValue(this.checkUp.name);
          this.form.get('id').setValue(checkUp.id);
          this.selectedActs = this.checkUp.acts;

        } else {
          this.errorAction("Modification impossible car le bilan n'existe pas", '/check-up/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/check-up/list');

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
    this.checkUp = this.form.value;
    this.checkUp.acts = this.selectedActs.map(({ id }) => id);

    if (this.form.valid) {
      if (this.checkUp.acts.length != 0) {
        this.objectEmitter.emit({ checkUp: this.checkUp, action: this.formAction });
        if (this.formAction == "save_and_new") this.initForm();
      } else {
        this.alertService.error('Veillez ajouter des actes au bilans!');
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
    this.errorAction('Action annulée', '/check-up/list');
  }


  /**
    * insert or remove an act from the selected act array
    * @param selectedItem
    */
  public getSelectedActs(selectedItem) {

    if (this.selectedActs.includes(selectedItem)) {

      let index = this.selectedActs.indexOf(selectedItem);
      this.selectedActs.splice(index, 1);

    } else {

      this.selectedActs.push(selectedItem);
    }

  }

  /**
   * remove an act from seleted act list
   * @param item 
   */
  removeAct(item) {
    let index = this.selectedActs.indexOf(item);
    this.selectedActs.splice(index, 1);

  }

  /**
   * fetch acts from database
   */
  fetchActs() {
    let data = this.actForm.value;
    this.actService.findByCriteria(data).subscribe(res => {
      this.acts = res;
      this.loading = false;
      this.hasNoData = false;
    }, error => {
      this.acts = [];
      this.loading = false;
      this.hasNoData = true;
      this.EmptyMessage = error;
    })
  }

  preview() {
    if (this.form.get('name').value) {
      this.ckeckUpName = this.form.get('name').value;
    }


  }

}
