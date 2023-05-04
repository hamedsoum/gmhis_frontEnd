import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/_models/service.model';
import { FacilityService } from 'src/app/_services/facility.service';
import { medicalServiceService } from 'src/app/_services/medicalService.service';
import { WaitingRoomService } from 'src/app/_services/waiting-room.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
  
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
  serviceId: number;

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
  service: Service

  /**
   * collection of facilities
   */
  facilities: object;

  /**
   * collection of waiting rooms
   */
  waitingRooms: object;

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
    private medicalService: medicalServiceService,
    private facilityService: FacilityService,
    private waitingRoomService : WaitingRoomService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.serviceId) this.initUpdateAction();
    this.facilityService.getIdAndName().subscribe(res => {this.facilities = res ;});
    this.waitingRoomService.getIdAndName().subscribe(res => {this.waitingRooms = res ;});
  }

  /**
   *  init form 
   */
  initForm() {
     this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      active: new FormControl('Y', Validators.required),
      waitingRoom: new FormControl(null, Validators.required),
      facilityId: new FormControl(null, Validators.required)

    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {
 
      this.medicalService.findById(this.serviceId).subscribe(
        service => {
          if (service) {
            this.service = service;
            this.form.patchValue(service);
          } else {
            this.errorAction("Modification impossible car le service n'existe pas", '/service/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/service/list');
          
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
      this.objectEmitter.emit({ service: data, action: this.formAction });
      if (this.formAction == "save_and_new")   this.initForm();
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
    this.errorAction('Action annulée', '/service/list');
  }

}
