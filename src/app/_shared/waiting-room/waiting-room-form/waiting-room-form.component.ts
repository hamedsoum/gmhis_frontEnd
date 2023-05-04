import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WaitingRoom } from 'src/app/_models/waitingRoom.model';
import { medicalServiceService } from 'src/app/_services/medicalService.service';
import { WaitingRoomService } from 'src/app/_services/waiting-room.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
// import { ValidateInt } from 'src/app/_utility/CustomValidators/int.Validator';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-waiting-room-form',
  templateUrl: './waiting-room-form.component.html',
  styleUrls: ['./waiting-room-form.component.css']
})
export class WaitingRoomFormComponent implements OnInit {

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
  waitingRoomId: number;

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
  waitingRoom: WaitingRoom

  /**
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
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
    private alertService: AlertService,
    private waitingRoomService: WaitingRoomService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.waitingRoomId) this.initUpdateAction();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      // capacity: new FormControl('', ValidateInt),
      capacity: new FormControl(''),
      active: new FormControl('Y', Validators.required),

    });
    
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {

      this.waitingRoomService.findById(this.waitingRoomId).subscribe(
        res => {
          if (res) {
            this.waitingRoom = res;
            this.form.patchValue(res);
          } else {
            this.errorAction("Modification impossible car la salle d'attente n'existe pas", '/waiting-room/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/waiting-room/list');
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
    this.waitingRoom = this.form.value;
   
    if (this.form.valid) {
      this.objectEmitter.emit({ waitingRoom: this.waitingRoom, action: this.formAction })
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
    this.errorAction('Action annulée', '/waiting-room/list');
  }

}
