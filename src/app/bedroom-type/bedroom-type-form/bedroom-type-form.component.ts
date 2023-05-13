import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IBedroomType } from "src/app/_models/bedroom-type.model";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { SubSink } from "subsink";
import { BedroomTypeService } from "../bedroom-type.service";
import { NotificationService } from "src/app/_services/notification.service";

@Component({
  selector: "app-bedroom-type-form",
  templateUrl: "./bedroom-type-form.component.html",
  styleUrls: ["./bedroom-type-form.component.scss"],
})
export class BedroomTypeFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  bedroomType: IBedroomType;

  @Input()
  details: boolean;

  @Output("addBedroomType") addBedroomType: EventEmitter<any> =
    new EventEmitter();
  @Output("updateBedroomType") updateBedroomType: EventEmitter<any> =
    new EventEmitter();

  /**
   * form
   */
  public bedroomTypeForm: FormGroup;

  /**
   * the form valid state
   */
  public invalidFom = false;

  /**
   * check if the form is submitted
   */
  public formSubmitted = false;
  showloading: boolean = false;
  public errorMessage!: string;

  public formsErrors: { [key: string]: string } = {};

  private isFormSubmitted: boolean = false;

  constructor(
    private bedroomTypeService: BedroomTypeService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.bedroomType) {
      console.log(this.bedroomType);
      this.bedroomTypeForm.patchValue(this.bedroomType);
    }
  }

  initForm() {
    this.bedroomTypeForm = new FormGroup({
      id: new FormControl(null),
      libelle: new FormControl("", [Validators.required]),
      cost: new FormControl("", [Validators.required]),
    });
  }
  get libelle() {
    return this.bedroomTypeForm.get("libelle");
  }
  get cost() {
    return this.bedroomTypeForm.get("cost");
  }

  save() {
    this.invalidFom = !this.bedroomTypeForm.valid;
    this.formSubmitted = true;
    if (this.bedroomTypeForm.valid) {
      this.showloading = true;
      this.bedroomType = this.bedroomTypeForm.value;
      console.log(this.bedroomType);

      if (this.bedroomType.id) {
        this.subs.add(
          this.bedroomTypeService.updateBedroomType(this.bedroomType).subscribe(
            (response: IBedroomType) => {
              this.showloading = false;
              this.updateBedroomType.emit();
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
      } else {
        this.subs.add(
          this.bedroomTypeService.createBedroomType(this.bedroomType).subscribe(
            (response: IBedroomType) => {
              this.showloading = false;
              this.addBedroomType.emit();
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

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
