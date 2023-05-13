import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SubSink } from "subsink";
import { FloorService } from "../floor.service";
import { NotificationService } from "src/app/_services/notification.service";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { IFloor } from "src/app/_models/floor.model";
import { IBuilding } from "src/app/_models/building.model";
import { BuildingService } from "src/app/building/building.service";

@Component({
  selector: "app-floor-form",
  templateUrl: "./floor-form.component.html",
  styleUrls: ["./floor-form.component.scss"],
})
export class FloorFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  floor: IFloor;

  @Input()
  details: boolean;

  @Output("addFloor") addFloor: EventEmitter<any> = new EventEmitter();
  @Output("updateFloor") updateFloor: EventEmitter<any> = new EventEmitter();

  /**
   * form
   */
  public floorForm: FormGroup;

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
  public buildingList: IBuilding[] = [];

  constructor(
    private floorService: FloorService,
    private buildingService: BuildingService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.onGetBuilding();
    if (this.floor) {
      console.log(this.floor);
      this.floorForm.get("id").setValue(this.floor.id);
      this.floorForm.get("libelle").setValue(this.floor.libelle);
      this.floorForm.get("building").setValue(this.floor.building.id);
    }
  }

  initForm() {
    this.floorForm = new FormGroup({
      id: new FormControl(null),
      libelle: new FormControl("", [Validators.required]),
      building: new FormControl("", [Validators.required]),
    });
  }
  get libelle() {
    return this.floorForm.get("libelle");
  }
  get buildings() {
    return this.floorForm.get("building");
  }

  save() {
    this.invalidFom = !this.floorForm.valid;
    this.formSubmitted = true;
    if (this.floorForm.valid) {
      this.showloading = true;
      this.floor = this.floorForm.value;
      console.log(this.floor);

      if (this.floor.id) {
        this.subs.add(
          this.floorService.updateFloor(this.floor).subscribe(
            (response: IFloor) => {
              this.showloading = false;
              this.updateFloor.emit();
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
          this.floorService.createFloor(this.floor).subscribe(
            (response: IFloor) => {
              this.showloading = false;
              this.addFloor.emit();
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

  onGetBuilding() {
    this.subs.add(
      this.buildingService.findBuildingSimpleList().subscribe(
        (res: any) => {
          console.log(res);
          this.showloading = false;
          this.buildingList = res;
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

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
