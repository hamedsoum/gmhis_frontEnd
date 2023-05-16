import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IRoom } from "src/app/_models/room.model";
import { NotificationService } from "src/app/_services/notification.service";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { BedroomTypeService } from "src/app/bedroom-type/bedroom-type.service";
import { SubSink } from "subsink";
import { RoomService } from "../room.service";
import { FloorService } from "src/app/floor/floor.service";
import { IFloor } from "src/app/_models/floor.model";
import { IBedroomType } from "src/app/_models/bedroom-type.model";

@Component({
  selector: "app-room-form",
  templateUrl: "./room-form.component.html",
  styleUrls: ["./room-form.component.scss"],
})
export class RoomFormComponent implements OnInit {
  private subs = new SubSink();

  @Input()
  room: IRoom;

  @Input()
  details: boolean;

  @Output("addRoom") addRoom: EventEmitter<any> = new EventEmitter();
  @Output("updateRoom") updateRoom: EventEmitter<any> = new EventEmitter();

  /**
   * form
   */
  public roomForm: FormGroup;

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
  public floorList: IFloor[] = [];
  public bedroomTypeList: IBedroomType[] = [];

  constructor(
    private bedroomTypeService: BedroomTypeService,
    private floorService: FloorService,
    private roomService: RoomService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.onGetFloorList();
    this.onGetBedroomTypeList();
    // if (this.room) {
    //   console.log(this.room);
    //   this.roomForm.patchValue(this.room);
    // }

    if (this.room) {
      console.log(this.room);
      this.roomForm.get("id").setValue(this.room.id);
      this.roomForm.get("libelle").setValue(this.room.libelle);
      this.roomForm.get("bedroomType").setValue(this.room.bedroomType.id);
      this.roomForm.get("storey").setValue(this.room.storey.id);
    }
  }

  onGetFloorList() {
    this.subs.add(
      this.floorService.findFloorSimpleList().subscribe(
        (res) => {
          console.log(res);
          this.floorList = res;
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  onGetBedroomTypeList() {
    this.subs.add(
      this.bedroomTypeService.findBedroomTypeSimpleList().subscribe(
        (res) => {
          console.log(res);
          this.bedroomTypeList = res;
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  initForm() {
    this.roomForm = new FormGroup({
      id: new FormControl(null),
      libelle: new FormControl("", [Validators.required]),
      bedroomType: new FormControl("", [Validators.required]),
      storey: new FormControl("", [Validators.required]),
    });
  }

  get libelle() {
    return this.roomForm.get("libelle");
  }

  get bedroomType() {
    return this.roomForm.get("bedroomType");
  }

  get storey() {
    return this.roomForm.get("storey");
  }

  save() {
    this.invalidFom = !this.roomForm.valid;
    this.formSubmitted = true;
    if (this.roomForm.valid) {
      this.showloading = true;
      this.room = this.roomForm.value;
      console.log(this.room);

      if (this.room.id) {
        this.subs.add(
          this.roomService.updateRoom(this.room).subscribe(
            (response: IRoom) => {
              this.showloading = false;
              this.updateRoom.emit();
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
          this.roomService.createRoom(this.room).subscribe(
            (response: IRoom) => {
              this.showloading = false;
              this.addRoom.emit();
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
