import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IBed } from "src/app/_models/bed.model";
import { SubSink } from "subsink";
import { BedService } from "../bed.service";
import { NotificationService } from "src/app/_services/notification.service";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { PageList } from "src/app/_models/page-list.model";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { RoomService } from "src/app/room/room.service";
import { IRoom } from "src/app/_models/room.model";

@Component({
  selector: "app-bed-list",
  templateUrl: "./bed-list.component.html",
  styleUrls: ["./bed-list.component.scss"],
})
export class BedListComponent implements OnInit {
  private subs = new SubSink();

  public searchForm: FormGroup;

  public bed: IBed;

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
  bedItem: IBed;
  roomList: IRoom[] = [];
  stateBed = [
    {
      libelle: "Occupé",
      id: 0,
    },
    {
      libelle: "Libre",
      id: 1,
    },
  ];

  constructor(
    private bedService: BedService,
    private roomService: RoomService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initform();
    this.getSimpleList();
    this.getBedList();
    this.onGetRoomList();
  }

  getSimpleList() {
    this.bedService.findBedSimpleList().subscribe((response: any) => {
      console.log(response);
    });
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

  initform() {
    this.searchForm = new FormGroup({
      libelle: new FormControl(""),
      bedroomId: new FormControl(""),
      state: new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl("id,desc"),
    });
  }

  onSearchValueChange(): void {
    this.getBedList();
  }

  public getBedList() {
    this.showloading = true;
    this.subs.add(
      this.bedService.findAll(this.searchForm.value).subscribe(
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

  onIsActiveChange() {
    this.getBedList();
  }

  onPageChange(event) {
    this.searchForm.get("page").setValue(event - 1);
    this.getBedList();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: "lg" });
  }

  openUpdateForm(updateFormContent, item?) {
    this.bed = item;
    console.log(this.bed);
    this.modalService.open(updateFormContent, { size: "lg" });
  }

  addBed() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Lit ajouté avec succès"
    );
    this.getBedList();
  }

  updateBed() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Lit modifié avec succès"
    );
    this.getBedList();
  }

  deleteBed(confirmationDialog, building) {
    this.bedItem = building;
    console.log(this.bedItem);

    this.modalService.open(confirmationDialog, { size: "sm" });
  }

  confirmDeleteBed() {
    this.bedService.deleteBed(this.bedItem.id).subscribe(
      (res: IBed) => {
        this.modalService.dismissAll();
        this.notificationService.notify(
          NotificationType.SUCCESS,
          "Lit supprimé avec succès"
        );
        this.getBedList();
      },
      (errorResponse: HttpErrorResponse) => {
        this.showloading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        );
      }
    );
  }

  rowSelected(bed: IBed, index: number) {
    this.currentIndex = index;
    this.bed = bed;
  }
}
