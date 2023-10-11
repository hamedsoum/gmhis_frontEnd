import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { Patient } from "src/app/patient/patient";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { GMHISDeathCreateUpdate, GMHISDeathPartial } from "../api/domain/gmhis.death.domain";
import { GmhisDeathService } from "../api/service/gmhis.death.service";

@Component({selector: 'gmhis-death-create-update', templateUrl: './gmhis-patient-death-create-update.component.html'})
export class GMHISPatientDeathCreateUpdate implements OnInit, OnDestroy {

    @Input() styleClass?: string

    @Input() patientID: Patient;

    @Input() death: GMHISDeathPartial;
    
    @Output() saveEvent = new EventEmitter();
    @Output() updateEvent = new EventEmitter();
    
    loading: boolean = false;

    public invalidForm: boolean = false;

    public fieldGroup: FormGroup;

    public formSubmitted = false;

    deathCreate: GMHISDeathCreateUpdate;

    subscription: Subscription = new Subscription();
    
    constructor(
      private deathService: GmhisDeathService,
      private modalService: NgbModal,
      private notificationService: NotificationService
        ){}


    ngOnInit(): void {
      this.buildFields();
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

 
 
   private buildFields(): void {
        this.fieldGroup = new FormGroup({
            deathDate: new FormControl(null,Validators.required),
            deathReason: new FormControl(null,Validators.required),
            patientID: new FormControl(this.patientID),
        })
      }

      save(): void {
        this.invalidForm = !this.fieldGroup.valid;
        this.formSubmitted = true;
        if (!this.invalidForm) {
            this.loading = true;
            this.deathCreate = this.fieldGroup.value;
            if (this.deathCreate.id) {
                this.subscription.add(
                    this.deathService.update(this.deathCreate.id, this.deathCreate)
                    .pipe(finalize(()=> this.loading = false))
                    .subscribe(
                      (response : GMHISDeathPartial) => {
                          this.updateEvent.emit();
                      },
                      (errorResponse : HttpErrorResponse) => {
                          this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
                      }
                    )
                )
            }else {
              this.subscription.add(
                  this.deathService.create(this.deathCreate)
                  .pipe(finalize(()=> this.loading = false))
                  .subscribe(
                    (response: GMHISDeathPartial) => {
                      this.saveEvent.emit();
                    },
                    (errorResponse: HttpErrorResponse) => {
                      this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message);
                    }
                  )
                );
            }
        }
    }
}