import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { FaciityServiceService } from '../faciity-service.service';
import { IFacility } from '../models/facility';
import { IFacilityDto } from '../models/facility-dto';

@Component({
  selector: 'app-facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.scss']
})
export class FacilityFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  facility: IFacility;

  facilityDto : IFacilityDto

  @Input()
  details: boolean;

  @Output() addFaciity = new EventEmitter();
  @Output() updateFacility = new EventEmitter();

  public facilityForm: FormGroup;

  public invalidFom = false;

  public formSubmitted = false;

  showloading: boolean = false;

  actives = [
    { id: true, value: 'Actif' },
    { id: false, value: 'Inactif' },
  ];

  public errorMessage: string;

  facilityTypesNameAndId: any;
  facilityCategoriesNameAndId: any;
  image : any = "";
  facilityLogo : File;
  constructor(
    private facilityService: FaciityServiceService,
    private notificationService: NotificationService
  ) {}

  // Unsubscribe when the component dies
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.findActiveFacilityTypeNameAndId();
    this.initForm();
    if (this.facility) {
      this.facilityService.getFacilityDetails(this.facility).subscribe(
        (res : any) => {
          this.facilityForm.patchValue(res);
          this.facilityForm.get("facilityCategoryId").setValue(res["facilityCategoryId"]);
          if (res["facilityTypeId"]) {
            this.findActiveFacilityCategoriesNameAndId();
            this.facilityForm.get("facilityTypeId").setValue(res["facilityTypeId"]);
          }
        }
      )
    }
  }


  onSelectFile(event){
    this.facilityLogo = event.target.files[0];        
  }


  initForm() {
    this.facilityForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl('', [Validators.required]),
      active: new FormControl(true),
      dhisCode: new FormControl(""),
      facilityCategoryId: new FormControl(null),
      facilityTypeId: new FormControl(undefined, [Validators.required]),
      latitude: new FormControl(-1.3222443),
      localCode: new FormControl("string"),
      localityId: new FormControl(1),
      longitude: new FormControl(-1.3222443),
      shortName: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required]),
      email: new FormControl(null),
    });
  }
  get name() {return this.facilityForm.get('name')}
  get facilityType() {return this.facilityForm.get('facilityTypeId')}
  get shortName() {return this.facilityForm.get('shortName');}
  get address() {return this.facilityForm.get('contact')}
  get contact() {return this.facilityForm.get('contact')}


  save() {
    this.invalidFom = !this.facilityForm.valid;
    this.formSubmitted = true;
    if (this.facilityForm.valid) {
      this.showloading = true;
      this.facilityDto = this.facilityForm.value;
      if (this.facilityDto.id) {
        this.subs.add(
          this.facilityService.updateFacility(this.facilityDto,this.facilityLogo).subscribe(
            (response: any) => {
              this.showloading = false;
              this.updateFacility.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.showloading = false;
              this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
            }
          )
        );
      } else {
        this.subs.add(
          this.facilityService.createFaciity(this.facilityDto, this.facilityLogo).subscribe(
            (response: IFacility) => {
              this.showloading = false;
              this.addFaciity.emit();
            },
            (errorResponse: HttpErrorResponse) => {
              this.showloading = false;
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


  public findActiveFacilityTypeNameAndId(){
    this.facilityService.findActiveFacilityTypeNameAndId().subscribe(
      (response : any) => {
        this.facilityTypesNameAndId = response;        
      },
      (errorResponse : HttpErrorResponse) => {
        this.showloading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }
  
  onFacilityTypeNameAndIdChange(event){
    if (event == "7a8067ec-8ac1-484b-b827-98e8fa53ea2a") {
      this.findActiveFacilityCategoriesNameAndId();
    }else{
      this.facilityCategoriesNameAndId = [];
    }
  }

  public findActiveFacilityCategoriesNameAndId(){
    this.facilityService.findActiveFacilityCategoryNameAndId().subscribe(
      (response : any) => {
        this.facilityCategoriesNameAndId = response;
      },
      (errorResponse : HttpErrorResponse) => {
        this.showloading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }
}
