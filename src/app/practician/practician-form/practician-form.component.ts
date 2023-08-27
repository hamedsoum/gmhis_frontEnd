import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SepecialityService } from 'src/app/speciality/sepeciality.service';
import { Speciality } from 'src/app/speciality/speciality-list/speciality';
import { User } from 'src/app/_models';
import { NotificationService, UserService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { PracticianService } from '../practician.service';

@Component({
  selector: 'app-practician-form',
  templateUrl: './practician-form.component.html',
  styleUrls: ['./practician-form.component.scss']
})
export class PracticianFormComponent implements OnInit {
  private subs = new SubSink();

  @Input() practician : any;

  practicianDto : any;

  @Input() details: boolean;

  @Output() addEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  public fieldGroup: FormGroup = new FormGroup({});

  public invalidFom = false;

  public formSubmitted = false;

  specialities : Speciality[] = [];
  
  loading: boolean = false;

  actives = [
    { id: true, value: 'Practicien Actif' },
    { id: false, value: 'Practicien Inactif' },
  ];
  users: any;
  signatureFile: any;

  constructor(
    private userService : UserService,
    private practicienService: PracticianService,
    private notificationService: NotificationService,
     private sepecialityService : SepecialityService) {}

  ngOnInit(): void {
    this.initialize();
  }

  public onUserChange (userSlected : User): void {
    console.log(userSlected);
    
    this.fieldGroup.get('user').setValue(userSlected.id);
    this.fieldGroup.get('nom').setValue(userSlected.lastName);
    this.fieldGroup.get('prenoms').setValue(userSlected.firstName);
    this.fieldGroup.get('telephone').setValue(userSlected.phoneNumber);
    this.fieldGroup.get('email').setValue(userSlected.email);

  }

  onSelectFile(event){
    this.signatureFile = event.target.files[0];            
    const reader = new FileReader();
    reader.onload = () => {
      let imageURL;
      imageURL = reader.result as string;
      console.log(imageURL);
      this.fieldGroup.get('signature').setValue(imageURL);
    };
    reader.readAsDataURL(this.signatureFile);
  }

  public showPreview(event: any) {
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let result = reader.result as string;
      this.fieldGroup.get('signature').setValue(result);
    };    
    reader.readAsDataURL(file);    
  }



  private buildFields() {
    this.fieldGroup = new FormGroup({
      id: new FormControl(null),
      nom: new FormControl('', Validators.required),
      prenoms: new FormControl('', Validators.required),
      email: new FormControl(''),
      signature: new FormControl(null, Validators.required),
      speciliaty_id: new FormControl(),
      actCategoryID: new FormControl(null, Validators.required),
      telephone: new FormControl('', Validators.required),
      user: new FormControl(null, Validators.required)
    });
  }
  get nom() {return this.fieldGroup.get('nom')}
  get prenoms() {return this.fieldGroup.get('prenoms')}
  get email() {return this.fieldGroup.get('email')}
  get signature() {return this.fieldGroup.get('signature')}
  get speciliaty() {return this.fieldGroup.get('speciliaty_id')}
  get telephone() {return this.fieldGroup.get('telephone')}

  save() {
    this.invalidFom = !this.fieldGroup.valid;
    this.formSubmitted = true;
    if (this.fieldGroup.valid) {
      this.loading = true;
      this.practicianDto = this.fieldGroup.value;  
      if (this.practicianDto.id) {
        this.subs.add(
          this.practicienService.update(this.practicianDto).subscribe(
            (response: any) => {
              this.loading = false;
              this.updateEvent.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.loading = false;
              this.notificationService.notify(
                NotificationType.ERROR,
                errorResponse.error.message
              );
            }
          )
        );
      } else {
        this.subs.add(
          this.practicienService.save(this.practicianDto).subscribe(
            (response: any) => {
              this.loading = false;
              this.addEvent.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.loading = false;
              this.notificationService.notify(
                NotificationType.ERROR,
                errorResponse.error.message
              );
            }
          )
        );
      }
    }
  }

  private retrieveSpecilaityNameAndId(){
    this.sepecialityService.retrieveSpecialityNameAndId().subscribe(
      (response : any) => {
        this.specialities = response;   
        console.log(this.specialities);
             
      },
      (errorResponse : HttpErrorResponse) => {
        this.loading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }

  private retrieveUsersActive(): void {
    this.userService.findAllActive()
    .subscribe( 
      (response : any) => {
        this.users = response;
        console.log(this.users); 
      },
      (error : HttpErrorResponse) => {throw new Error(error.message);
      } )}

private initialize (): void {
  this.retrieveUsersActive();
  this.retrieveSpecilaityNameAndId();
  this.buildFields();
}
}
