import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from "@angular/forms";
import { PatientHistory } from 'src/app/_models/patientHistory.model';
import { AntecedentService } from 'src/app/_services/antecedent.service';
import { PatientHistoryService } from 'src/app/_services/patient-history.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { AntecedentFamilyService } from 'src/app/_services/antecedent-family.service';
import { CurrentTreatmentService } from 'src/app/_services/current-treatment.service';
import { AllergyService } from 'src/app/_services/allergy.service';

@Component({
  selector: 'app-antecedent',
  templateUrl: './antecedent.component.html',
  styleUrls: ['./antecedent.component.css']
})
export class AntecedentComponent implements OnInit {

  /**
   * 
   */
  form: FormGroup;

  /**
   * 
   */
  searchForm: FormGroup;

  currentTreatmentForm : FormGroup;

  allergyForm : FormGroup;


  histories: object;

  historyFamilies: object;

  currentTreatment: object;

  allergies: object;

  // /**
  //  * 
  //  */
  // surgicalHistories: object;

  
  patientHistories = [];
  medicalHistories = [];
  surgicalHistories= [];
  familyHistories = [];
  medicalHistoriesIds = [];
  surgicalHistoriesIds= [];
  familyHistoriesIds = [];

  @Input()
  patientId: number;

  historyType = 'medicalHistories';

  selectedIds = [];
  selectedNames = [];

  /**
  * selected  antecedent  */
  selectedHistories = [];


  constructor(
    private historyService: PatientHistoryService,
    private alertService: AlertService,
    private antecedentService: AntecedentService,
    private antecedentFamiltyService: AntecedentFamilyService,
    private treatmentService : CurrentTreatmentService,
    private allergyService : AllergyService
  ) { }

  ngOnInit(): void {
    this.initForm();
   
    // set patient histories form data
    this.historyService.findByPatientId(this.patientId).subscribe(res => {
      if(res){
        this.form.get("id").setValue(res.id);
        this.surgicalHistories = res.surgicalHistories.map(({ name }) => name);
        this.surgicalHistoriesIds = res.surgicalHistories.map(({ id }) => id);
        this.familyHistories = res.familyHistories.map(({ name }) => name);
        this.familyHistoriesIds = res.familyHistories.map(({ id }) => id);
        this.medicalHistories = res.medicalHistories.map(({ name }) => name);
        this.medicalHistoriesIds = res.medicalHistories.map(({ id }) => id);
      }
    });

    // set allergy form data 
    this.treatmentService.findByPatientId(this.patientId).subscribe(res => {
      this.currentTreatmentForm.get("id").setValue(res.id);
      this.currentTreatmentForm.get("description").setValue(res.description);
    })

     // set allergy form data 
     this.allergyService.findByPatientId(this.patientId).subscribe(res => {
      this.allergyForm.get("id").setValue(res.id);
      this.allergyForm.get("description").setValue(res.description);
    })

    this.antecedentFamiltyService.getIdAndName().subscribe(res => { this.historyFamilies = res; });
  }


  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      medicalHistories: new FormControl(''),
      surgicalHistories: new FormControl(''),
      familyHistories: new FormControl(''),
      patient: new FormControl(this.patientId),
      description: new FormControl(''),
      allergies: new FormControl('')
    }); this.histories

    this.searchForm = new FormGroup({
      history: new FormControl(''),
      historyFamily: new FormControl(null)
    });

    this.currentTreatmentForm = new FormGroup ({  
        description: new FormControl(''),
        id: new FormControl(0),
        patient: new FormControl(this.patientId)
    });

    this.allergyForm = new FormGroup ({  
      description: new FormControl(''),
      id: new FormControl(0),
      patient: new FormControl(this.patientId)
  })
  }

  /**
   * 
   */
  save() {

    let antecedantdata = this.form.value;
    antecedantdata["medicalHistories"] = this.medicalHistoriesIds.join(',');
    antecedantdata["surgicalHistories"] = this.surgicalHistoriesIds.join(',');
    antecedantdata["familyHistories"] = this.familyHistoriesIds.join(',');
    this.historyService.save(antecedantdata).subscribe(res => { });

    let treatmentData = this.currentTreatmentForm.value;
    this.treatmentService.save(treatmentData).subscribe(res => {});

    let allergyData = this.allergyForm.value;
    this.allergyService.save(allergyData).subscribe(res => {});

    this.alertService.success('Antécedents & traitements mis a jour!');
  }

  /**
     * search function
     */
  search() {
  }

  /**
   * insert or remove a item from the patient antedents array
   * @param history 
   */
  public getSelectedHistory(history) {

    if (this.patientHistories.includes(history)) {
      let index = this.patientHistories.indexOf(history);
      this.patientHistories.splice(index, 1);
    } else {
      this.patientHistories.push(history);
    }

  }

  /**
   * 
   */
  getHistories() {

    let data = this.searchForm.value;
    this.antecedentService.getIdAndNameByFamily(data).subscribe(res => { this.histories = res; });
  }

  resetHistories() {
    this.histories = [];
    this.selectedHistories = [];
    this.searchForm.get("historyFamily").setValue(null);
  }

  /**
    * insert or remove an act from the selected act array
    * @param selectedItem
    */
  public getSelectedHistories(selectedItem) {

    if (this.selectedHistories.includes(selectedItem)) {

      let index = this.selectedHistories.indexOf(selectedItem);
      this.selectedHistories.splice(index, 1);

    } else {

      this.selectedHistories.push(selectedItem);
    }

  }

  /**
   * remove an act from seleted act list
   * @param item 
   */
  removeMedicalHistory(item) {
    this.medicalHistories.splice(this.medicalHistories.indexOf(item), 1);
    this.medicalHistoriesIds.splice(this.medicalHistoriesIds.indexOf(item), 1)
  }

  removeSurgicalHistory(item) {
    this.surgicalHistories.splice(this.surgicalHistories.indexOf(item), 1);
    this.surgicalHistoriesIds.splice(this.surgicalHistoriesIds.indexOf(item), 1);
  }

  removeFamilyHistory(item) {
    this.familyHistories.splice(this.familyHistories.indexOf(item), 1);
    this.familyHistoriesIds.splice(this.familyHistoriesIds.indexOf(item), 1)
  }

  removeSelectedHistory(item) {
    let index = this.selectedHistories.indexOf(item);
    this.selectedHistories.splice(index, 1);
  }

  setHistoriesType(type) {
    this.historyType = type;
  }

  setHistories() {
  this.selectedIds = this.selectedHistories.map(({ id }) => id);
  this.selectedNames = this.selectedHistories.map(({ name }) => name);
    switch (this.historyType) {
      case "surgicalHistories":
        this.surgicalHistories = this.selectedNames;
        this.surgicalHistoriesIds = this.selectedIds;
        break;

      case "familyHistories":
        this.familyHistories = this.selectedNames;
        this.familyHistoriesIds = this.selectedIds;
        break;

      default:
        this.medicalHistories = this.selectedNames;
        this.medicalHistoriesIds = this.selectedIds;
        break;
    }
  }


  //   if(this.historyType == "medicalHistory" || this.historyType == "familyHistory"){
  //     this.histories = [
  //       { id:1, name: "varicelle"},
  //       { id:2, name: "rougeole"},
  //       { id:3, name: "oreillons"},
  //       { id:4, name: "rubéole"},
  //       { id:5, name: "splénectomie"},
  //       { id:6, name: "Grossesse en cours"},
  //       { id:7, name: "Asthme (autre que sévère et sous traitement continu)"},
  //       { id:8, name: "Asthme sévère sous traitement continu"},
  //       { id:9, name: "Diabète ID ou non ID"},
  //       { id:10, name: "Néoplasie - cancer"},
  //       { id:11, name: "Lupus érythémateux aigu disséminé"},
  //       { id:12, name: "Sclérose en plaques"},
  //       { id:13, name: "Mucoviscidose"}
  //     ];
  //   } else if ((this.historyType == 'surgicalHistory')){

  //


}
