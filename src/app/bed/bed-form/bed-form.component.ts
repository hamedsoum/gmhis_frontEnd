import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IBed } from "src/app/_models/bed.model";
import { SubSink } from "subsink";
import { BedService } from "../bed.service";
import { NotificationService } from "src/app/_services/notification.service";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { IRoom } from "src/app/_models/room.model";
import { RoomService } from "src/app/room/room.service";

@Component({
  selector: "app-bed-form",
  templateUrl: "./bed-form.component.html",
  styleUrls: ["./bed-form.component.scss"],
})
export class BedFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  bed: IBed;

  @Input()
  details: boolean;

  @Output("addBed") addBed: EventEmitter<any> = new EventEmitter();
  @Output("updateBed") updateBed: EventEmitter<any> = new EventEmitter();

  /**
   * form
   */
  public bedForm: FormGroup;

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
  public roomList: IRoom[] = [];

  constructor(
    private bedService: BedService,
    private roomService: RoomService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.onGetRoomList();
    if (this.bed) {
      console.log(this.bed);
      this.bedForm.patchValue(this.bed);
      this.bedForm.get("id").setValue(this.bed.id);
      this.bedForm.get("libelle").setValue(this.bed.libelle);
      this.bedForm.get("bedroom").setValue(this.bed.bedroom.id);
    }
  }

  onGetRoomList() {
    this.subs.add(
      this.roomService.findRoomSimpleList().subscribe(
        (res: any) => {
          console.log(res);
          this.showloading = false;
          this.roomList = res;
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

  initForm() {
    this.bedForm = new FormGroup({
      id: new FormControl(null),
      libelle: new FormControl("", [Validators.required]),
      bedroom: new FormControl("", [Validators.required]),
    });
  }
  get libelle() {
    return this.bedForm.get("libelle");
  }

  save() {
    this.invalidFom = !this.bedForm.valid;
    this.formSubmitted = true;
    if (this.bedForm.valid) {
      this.showloading = true;
      this.bed = this.bedForm.value;
      console.log(this.bed);

      if (this.bed.id) {
        this.subs.add(
          this.bedService.updateBed(this.bed).subscribe(
            (response: IBed) => {
              this.showloading = false;
              this.updateBed.emit();
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
          this.bedService.createBed(this.bed).subscribe(
            (response: IBed) => {
              this.showloading = false;
              this.addBed.emit();
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
