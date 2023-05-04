import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DciService } from 'src/app/_services/dci.service';
import { DrugService } from 'src/app/_services/drug.service';
import { PharmacologicalFormService } from 'src/app/_services/pharmacological-form.service';
import { TherapeuticClassService } from 'src/app/_services/therapeutic-class.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prescribing-medication',
  templateUrl: './prescribing-medication.component.html',
  styleUrls: ['./prescribing-medication.component.css']
})
export class PrescribingMedicationComponent implements OnInit {

  /**
   * form Group
   */
  drugForm: FormGroup;

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


  /**
    * define drugs options
    */
  drugs: object;

  /**
  * selected drugs
  */
 @Input()
  selectedDrugs = [];

  /**
   * define pharmacological Forms options
   */
  pharmacologicalForms: object;

  /**
   * define therapeutic Classes options 
   */
  therapeuticClasses: object;

  /**
   * define DCI options
   */
  dcis: object;


  /**
   * insurances form array
   */
  @Input()
  drugFormGroup = new FormArray([]);

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
    private drugService: DrugService,
    private pharmaFormService: PharmacologicalFormService,
    private theraClassService: TherapeuticClassService,
    private dciService: DciService

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.pharmaFormService.getIdAndName().subscribe(res => { this.pharmacologicalForms = res; });
    this.theraClassService.getIdAndName().subscribe(res => { this.therapeuticClasses = res; });
    this.dciService.getIdAndName().subscribe(res => { this.dcis = res; });
    this.fetchDrugs();
  }

  /**
   *  init form 
   */
  initForm() {
    
    this.drugForm = new FormGroup({
      name: new FormControl('', Validators.required),
      pharmaFormId: new FormControl(null),
      theraClassId: new FormControl(null),
      dcns: new FormControl([]),
    });
  }


  /**
    * insert or remove an drug from the selected drug array
    * @param selectedItem
    */
  public getSelectedDrugs(selectedItem) {

    let itemName = selectedItem['name'];

    if (this.selectedDrugs.includes(itemName)) {
      Swal.fire(
        'Dejà ajouté!',
        itemName + " a dejà été ajouté l'ordonnance!",
        'error'
      )
      //  uncheck item
      document.getElementById(selectedItem['id'])['checked'] = false;

    } else {

      this.selectedDrugs.push(itemName);

      const group = new FormGroup({
        id: new FormControl(selectedItem.id),
        dosage: new FormControl(selectedItem.defaultDosage),
        drug: new FormControl(selectedItem.name),
        qty: new FormControl(),
        duration: new FormControl()
      });
      this.drugFormGroup.push(group);
    }

  }

  /**
   * remove an drug from seleted drug list
   * @param index 
   */
  removeDrug(index) {
    this.selectedDrugs.splice(index, 1);
    this.drugFormGroup.removeAt(index);
  }

  /**
   * fetch drugs from database
   */
  fetchDrugs() {
    let data = this.drugForm.value;
    data.page = this.page > 0 ? this.page - 1: 0;
    data.sort = this.sort;
    data.size = this.perPage;
    data.order = this.order;

    this.drugService.findAllPharmacyArticle(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.drugs = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.drugs = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      });
  }

  /**
 * set the current page
 * @param pageNum 
 */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = this.page - 1;
    this.fetchDrugs();
  }
}
