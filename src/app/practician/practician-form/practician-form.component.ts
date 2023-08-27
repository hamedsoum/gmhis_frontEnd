import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SepecialityService } from 'src/app/speciality/sepeciality.service';
import { Speciality } from 'src/app/speciality/speciality-list/speciality';
import { User } from 'src/app/_models';
import { NotificationService, UserService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { Practician } from '../practician';
import { PracticianService } from '../practician.service';

@Component({
  selector: 'app-practician-form',
  templateUrl: './practician-form.component.html',
  styleUrls: ['./practician-form.component.scss']
})
export class PracticianFormComponent implements OnInit, OnChanges {
  private subs = new SubSink();

  @Input() practicianID? : number;
  @Input() practician? : Practician;

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

  users: User[];
  userSelected: User;

  constructor(
    private userService : UserService,
    private practicienService: PracticianService,
    private notificationService: NotificationService,
     private sepecialityService : SepecialityService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.practician) {
      this.retrieveUsersActive();
    }
  }

  ngOnInit(): void {    
    this.initialize();
  }

  public onUserChange (userSlected : User): void {    
    this.fieldGroup.get('nom').setValue(userSlected.lastName);
    this.fieldGroup.get('prenoms').setValue(userSlected.firstName);
    this.fieldGroup.get('telephone').setValue(userSlected.phoneNumber);
    this.fieldGroup.get('email').setValue(userSlected.email);
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
      id: new FormControl(this.practician?.id),
      nom: new FormControl(this.practician?.nom, Validators.required),
      prenoms: new FormControl(this.practician?.prenoms, Validators.required),
      email: new FormControl(this.practician?.email),
      signature: new FormControl(null, Validators.required),
      speciliaty_id: new FormControl(),
      actCategoryID: new FormControl(this.practician?.actCategory.id , Validators.required),
      telephone: new FormControl(this.practician?.telephone, Validators.required),
      user: new FormControl(this.practician?.user, Validators.required),
      userID: new FormControl(this.practician?.user.id)
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
        console.log(this.userSelected);
        
      },
      (error : HttpErrorResponse) => {throw new Error(error.message);
      } )}

private initialize (): void {
  this.retrieveUsersActive();
  this.retrieveSpecilaityNameAndId();
  this.buildFields();

}
}
