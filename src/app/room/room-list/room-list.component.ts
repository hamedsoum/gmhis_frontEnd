import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { IFloor } from "src/app/_models/floor.model";
import { PageList } from "src/app/_models/page-list.model";
import { IRoom } from "src/app/_models/room.model";
import { NotificationService } from "src/app/_services/notification.service";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { BedroomTypeService } from "src/app/bedroom-type/bedroom-type.service";
import { FloorService } from "src/app/floor/floor.service";
import { SubSink } from "subsink";
import { RoomService } from "../room.service";
import { IBedroomType } from "src/app/_models/bedroom-type.model";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.scss"],
})
export class RoomListComponent implements OnInit {
  private subs = new SubSink();

  public searchForm: FormGroup;

  public room: IRoom;

  currentPage: number;
  empty: boolean;
  firstPage: boolean;
  lastPage: boolean;
  totalItems: number;
  totalPages: number;

  public items: any;

  selectedSize: number;

  sizes = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 },
    { id: 250, value: 250 },
    { id: 500, value: 500 },
    { id: 1000, value: 1000 },
  ];

  showloading: boolean = false;
  currentIndex: number;
  roomItem: IRoom;
  floorList: IFloor[] = [];
  bedroomTypeList: IBedroomType[] = [];

  constructor(
    private floorService: FloorService,
    private bedroomTypeService: BedroomTypeService,
    private roomService: RoomService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initform();
    this.getFloorSimpleList();
    this.getRoom();
    this.onGetBedroomType();
  }

  getFloorSimpleList() {
    this.floorService.findFloorSimpleList().subscribe((response: any) => {
      console.log(response);
      this.floorList = response;
    });
  }

  initform() {
    this.searchForm = new FormGroup({
      libelle: new FormControl(""),
      storeyId: new FormControl(""),
      type: new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl("id,desc"),
    });
  }

  onSearchValueChange(): void {
    this.getRoom();
  }

  public getRoom() {
    this.showloading = true;
    this.subs.add(
      this.roomService.findAll(this.searchForm.value).subscribe(
        (response: PageList) => {
          console.log(response);
          this.showloading = false;
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items;
          this.lastPage = response.lastPage;
          this.selectedSize = response.size;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
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

  onGetBedroomType() {
    this.subs.add(
      this.bedroomTypeService.findBedroomTypeSimpleList().subscribe(
        (res: any) => {
          console.log(res);
          this.showloading = false;
          this.bedroomTypeList = res;
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

  onIsActiveChange() {
    this.getRoom();
  }

  onPageChange(event) {
    this.searchForm.get("page").setValue(event - 1);
    this.getRoom();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: "lg" });
  }

  openUpdateForm(updateFormContent, item?) {
    this.room = item;
    console.log(this.room);
    this.modalService.open(updateFormContent, { size: "lg" });
  }

  addRoom() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Chambre ajoutée avec succès"
    );
    this.getRoom();
  }

  updateRoom() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Chambre modifiée avec succès"
    );
    this.getRoom();
  }

  deleteRoom(confirmationDialog, building) {
    this.roomItem = building;
    console.log(this.roomItem);

    this.modalService.open(confirmationDialog, { size: "sm" });
  }

  confirmDeleteRoom() {
    this.subs.add(
      this.roomService.deleteRoom(this.roomItem.id).subscribe(
        (res: IFloor) => {
          this.modalService.dismissAll();
          this.notificationService.notify(
            NotificationType.SUCCESS,
            "Chambre supprimée avec succès"
          );
          this.getRoom();
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

  rowSelected(room: IRoom, index: number) {
    this.currentIndex = index;
    this.room = room;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
