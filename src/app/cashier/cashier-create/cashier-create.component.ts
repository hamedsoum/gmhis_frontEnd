import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { User } from "src/app/_models";
import { NotificationService, UserService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { SubSink } from "subsink";
import { Cashier, CashierCreate } from "../api/domain/cashier";
import { CashierService } from "../api/service/cashier.service";

@Component({selector: 'cashier-create', templateUrl: './cashier-create.component.html'})
export class CashierCreateComponent implements OnInit {
    private subs = new SubSink();

    @Input() cashier: Cashier;
    
    @Output() saveEvent = new EventEmitter();
    @Output() updateEvent = new EventEmitter();
    
    loading: boolean = false;

    public invalidForm: boolean = false;

    public fieldGroup: FormGroup;

    public formSubmitted = false;


    actives = [
        { id: true, value: 'Actif' },
        { id: false, value: 'Inactif' },
      ];

      public errorMessage: string;

    cashierCreate : CashierCreate;
    users: User[];

    constructor(
        private userService: UserService,
        private cashierService: CashierService,
        private notificationService: NotificationService, 
    ){}

    ngOnInit(): void {
        this.buildFields();
        this.retrieveUsers();
        if (this.cashier) {
            console.log(this.cashier);
            
            this.fieldGroup.get('id').setValue(this.cashier.id);
            this.fieldGroup.get('active').setValue(this.cashier.active);
            this.fieldGroup.get('userID').setValue(this.cashier.userID);
        }
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
      }

      private buildFields(): void {
        this.fieldGroup = new FormGroup({
            id: new FormControl(null),
            active: new FormControl(null, Validators.required),
            userID: new FormControl(null,Validators.required),
        })
      }

      get name() {return this.fieldGroup.get('active')}
      get userID() {return this.fieldGroup.get('userID')}

      save(): void {
          this.invalidForm = !this.fieldGroup.valid;
          this.formSubmitted = true;
          if (!this.invalidForm) {
              this.loading = true;
              this.cashierCreate = this.fieldGroup.value;
              console.log(this.cashierCreate);
              
              if (this.cashierCreate.id) {
                  this.subs.add(
                      this.cashierService.updateCashier(this.cashierCreate.id, this.cashierCreate)
                      .pipe(finalize(()=> this.loading = false))
                      .subscribe(
                        (response : Cashier) => {
                            this.updateEvent.emit();
                        },
                        (errorResponse : HttpErrorResponse) => {
                            this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
                        }
                      )
                  )
              }else {
                this.subs.add(
                    this.cashierService.createCashier(this.cashierCreate)
                    .pipe(finalize(()=> this.loading = false))
                    .subscribe(
                      (response: Cashier) => {
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

      retrieveUsers(): void {
          this.userService.findAllActive()
            .subscribe(
                (response : User[]) => {this.users = response; console.log(this.users);
                },
                (errorResponse: HttpErrorResponse) => {this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message)})
     }
}