import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Facility } from 'src/app/_models/facility.model';
import { CityService } from 'src/app/_services/city.service';
import { CountryService } from 'src/app/_services/country.service';
import { FacilityService } from 'src/app/_services/facility.service';
import { LocalityService } from 'src/app/_services/locality.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.css']
})
export class FacilityFormComponent implements OnInit {

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
  facilityId: number;

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
  facility: object;

  /**
   * collection of actives localities
   */
  localities : Object;

  /**
   * collection of countries
   */
  countries : Object;

  /**
   * collection of  cities
   */
  cities : Object;

   /**
   * define  states options
   */
  actives = [
    {id: "Y", value: "Actif"},
    {id: "N", value: "Inactif"},
  ]

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
    private alertService : AlertService,
    private facilityService: FacilityService,
    private countryService : CountryService,
    private cityService : CityService,
    private localityService : LocalityService
    
  ) { }

  ngOnInit(): void {  
    this.initForm();
    this.cityService.getIdAndName().subscribe(res => { this.cities = res; });
    this.countryService.getIdAndName().subscribe(res => { this.countries = res; });
    if (this.facilityId) this.initUpdateAction();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      dhisCode: new FormControl(''),
      latitude: new FormControl(''),
      localCode: new FormControl(''),
      longitude: new FormControl(''),
      active: new FormControl('Y', Validators.required),
      shortName: new FormControl(''),
      localityId : new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {
      this.facilityService.findById(this.facilityId).subscribe(
        res => {
          if (res) {
            this.facility = res;
            this.form
            this.form.patchValue(this.facility)
          } else {
            this.errorAction("Modification impossible car l'établissement n'existe pas", '/facility/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/facility/list');
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
    this.facility = this.form.value;

    if (this.form.valid) {
      this.objectEmitter.emit({ facility: this.facility, action: this.formAction })
      if (this.formAction == "save_and_new") this.initForm();
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
    this.errorAction('Action annulée', '/facility/list');
  }

    /**
  * get cities by country
  */
 OnCountryChange() {
  let country = this.form.get('country').value;
  this.cityService.findByCountry(country).subscribe(res => { this.cities = res; });
 
} 

 /**
  * get localities by city
  */
 OnCityChange() {
  let city = this.form.get("city").value;
  this.localityService.findByCity(city).subscribe(res => { this.localities = res; });
}
}
