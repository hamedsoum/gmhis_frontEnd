import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SepecialityService } from 'src/app/speciality/sepeciality.service';
import { Speciality } from 'src/app/speciality/speciality-list/speciality';
import { NotificationService } from 'src/app/_services';
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

  constructor(private practicienService: PracticianService,private notificationService: NotificationService, private sepecialityService : SepecialityService) {}

  ngOnInit(): void {
    this.retrieveSpecilaityNameAndId();
    this.buildField();
  }

  showPreview(event: any) {
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let result = reader.result as string;
      this.fieldGroup.get('signature').setValue(result);
    };    
    reader.readAsDataURL(file);    
  }

  private buildField() {
    this.fieldGroup = new FormGroup({
      id: new FormControl(null),
      nom: new FormControl('', Validators.required),
      prenoms: new FormControl('', Validators.required),
      email: new FormControl(''),
      signature: new FormControl('', Validators.required),
      speciliaty_id: new FormControl(2),
      telephone: new FormControl('', Validators.required),
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
    console.log(this.fieldGroup);
    
    if (this.fieldGroup.valid) {
      this.loading = true;
      this.practicianDto = this.fieldGroup.value;  
      console.log(this.practicianDto);
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

}
