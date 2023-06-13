import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemValue } from 'src/app/shared/domain';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { SepecialityService } from '../sepeciality.service';
import { Speciality } from '../speciality-list/speciality';

@Component({
  selector: 'app-speciality-form',
  templateUrl: './speciality-form.component.html',
  styleUrls: ['./speciality-form.component.scss']
})
export class SpecialityFormComponent implements OnInit {

  private subs = new SubSink();

  @Input() speciality : any;

  specialityCreateData : any;

  @Input() details: boolean;

  @Output() addEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  public fieldGroup: FormGroup = new FormGroup({});

  public invalidFom = false;

  public formSubmitted = false;

  specialities : Speciality[] = [];
  
  loading: boolean = false;

  constructor(private notificationService: NotificationService, private specialityService : SepecialityService) {}

  ngOnInit(): void {    
    this.buildField();
   if (this.speciality) this.fieldGroup.patchValue(this.speciality)
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
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }
  get nom() {return this.fieldGroup.get('nom')}
  
  save() {
    this.invalidFom = !this.fieldGroup.valid;
    this.formSubmitted = true;
    if (this.fieldGroup.valid) {
      this.loading = true;
      this.specialityCreateData = this.fieldGroup.value;  
      if (this.specialityCreateData.id) {
        this.subs.add(
          this.specialityService.update(this.specialityCreateData).subscribe(
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
          this.specialityService.save(this.specialityCreateData).subscribe(
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

}
