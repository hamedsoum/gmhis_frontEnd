import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, Sanitizer } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { medicalServiceService } from 'src/app/_services/medicalService.service';
import { PracticianService } from 'src/app/_services/practician.service';
import { SpecialityService } from 'src/app/_services/speciality.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-practician-form',
  templateUrl: './practician-form.component.html',
  styleUrls: ['./practician-form.component.css']
})
export class PracticianFormComponent implements OnInit {


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
  practicianId: number;

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
   * define user options;
   */
  users: object;

  /**
   * define cash register options
   */
  cashRegisters: object;

  /**
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ];

  /**
   * define services options
   */
  services: object;

  /**
   * define speciality options
   */
  specialities: object;

  /***
   * 
   */
  files: File[] = [];

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
    private medicalService: medicalServiceService,
    private specialityService: SpecialityService,
    private userService: UserService,
    private practicianService: PracticianService,
    private httpClient: HttpClient,
    private sanitizer : DomSanitizer ) { }
    signature : any;
  ngOnInit(): void {
    this.initForm();
    if (this.practicianId) this.initUpdateAction();
    this.medicalService.getIdAndName().subscribe(res => { this.services = res; });
    this.specialityService.getIdAndName().subscribe(res => { this.specialities = res; });
    this.userService.getIdAndName().subscribe(res => { 
      console.log(res); 
      this.users = res 
    });
    
    this.signature = this.sanitizer.bypassSecurityTrustUrl("C:/Users/Dabre Adjaratou/eclipse-workspace/gmhis/uploads/5i7YcfDU3d2ajmm.png");
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      user: new FormControl(1, ),
      speciality: new FormControl(null, Validators.required),
      service: new FormControl(null, Validators.required),
      signature: new FormControl(null),
      practicianNumber: new FormControl(null, Validators.required),
      active: new FormControl('Y', Validators.required),
    });
  }

  /**
   * init the form value when updating
   */
  initUpdateAction() {

    this.practicianService.findById(this.practicianId).subscribe(
      practician => {
        if (practician) {
          this.form.get("id").setValue(practician['id']);
          this.form.get("user").setValue(practician['userId']);
          this.form.get("speciality").setValue(practician['speciality']);
          this.form.get("service").setValue(practician['service']);
          this.form.get("signature").setValue(practician['signature']);
          this.form.get("practicianNumber").setValue(practician['practicianNumber']);
          this.form.get("active").setValue(practician['active']);
          
  

        } else {
          this.errorAction("Modification impossible car le praticien n'existe pas", '/practician/list');
        }
      },
      error => {
        this.errorAction("Erreur lors de la modification", '/practician/list');

      })
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {
    // reset alerts on submit
    this.alertService.clear();

    // //validate form '
    this.invalidFormControls = invalidformControls(this.form);

         const  formData= new FormData();

          formData.append('id', this.form.get('id').value);
          formData.append('user', this.form.get('user').value);
          formData.append('speciality', this.form.get('speciality').value);
          formData.append('service', this.form.get('service').value);
          formData.append('signature', this.form.get('signature').value);
          formData.append('practicianNumber', this.form.get('practicianNumber').value);
          formData.append('active', this.form.get('active').value);

    if (this.form.valid) {
      this.objectEmitter.emit({ practician: formData, action: this.formAction })
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
    this.errorAction('Action annulée', '/practician/list');
  }

  // in app.component.ts
  onSelect(event) {

  this.files.push(...event.addedFiles);
  this.form.get("signature").setValue(this.files[0]);
  
  this.readFile(this.files[0]).then(fileContents => {
    
    // Put this string in a request body to upload it to an API.
   // console.log(fileContents);
  });
}




 
onRemove(event) {
  //console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

private async readFile(file: File): Promise<string | ArrayBuffer> {
  return new Promise<string | ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = e => {
      return resolve((e.target as FileReader).result);
    };

    reader.onerror = e => {
      console.error(`FileReader failed on file ${file.name}.`);
      return reject(null);
    };

    if (!file) {
      console.error('No file to read.');
      return reject(null);
    }

    reader.readAsDataURL(file);
  });
}
}
