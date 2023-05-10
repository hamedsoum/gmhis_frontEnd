import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { SubSink } from "subsink";
import { BuildingService } from "../building.service";
import { IBuilding } from "src/app/_models/building.model";
import { NotificationService } from "src/app/_services/notification.service";

@Component({
  selector: "app-building-form",
  templateUrl: "./building-form.component.html",
  styleUrls: ["./building-form.component.scss"],
})
export class BuildingFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  building: IBuilding;

  @Input()
  details: boolean;

  @Output("addBuilding") addBuilding: EventEmitter<any> = new EventEmitter();
  @Output("updateBuilding") updateBuilding: EventEmitter<any> =
    new EventEmitter();

  /**
   * form
   */
  public buildingForm: FormGroup;

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
    private buildingService: BuildingService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.building) {
      console.log(this.building);
      this.buildingForm.patchValue(this.building);
    }
  }

  initForm() {
    this.buildingForm = new FormGroup({
      id: new FormControl(null),
      libelle: new FormControl("", [Validators.required]),
    });
  }
  get libelle() {
    return this.buildingForm.get("libelle");
  }

  save() {
    this.invalidFom = !this.buildingForm.valid;
    this.formSubmitted = true;
    if (this.buildingForm.valid) {
      this.showloading = true;
      this.building = this.buildingForm.value;
      console.log(this.building);

      if (this.building.id) {
        this.subs.add(
          this.buildingService.updateBuilding(this.building).subscribe(
            (response: IBuilding) => {
              this.showloading = false;
              this.updateBuilding.emit();
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
          this.buildingService.createBuilding(this.building).subscribe(
            (response: IBuilding) => {
              this.showloading = false;
              this.addBuilding.emit();
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
