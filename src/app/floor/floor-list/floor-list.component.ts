import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IFloor } from "src/app/_models/floor.model";
import { SubSink } from "subsink";
import { FloorService } from "../floor.service";
import { NotificationService } from "src/app/_services/notification.service";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { PageList } from "src/app/_models/page-list.model";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { IBuilding } from "src/app/_models/building.model";
import { BuildingService } from "src/app/building/building.service";

@Component({
  selector: "app-floor-list",
  templateUrl: "./floor-list.component.html",
  styleUrls: ["./floor-list.component.scss"],
})
export class FloorListComponent implements OnInit {
  private subs = new SubSink();

  public searchForm: FormGroup;

  public floor: IFloor;

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
  floorItem: IFloor;
  buildingList: IBuilding[] = [];

  constructor(
    private floorService: FloorService,
    private buildingService: BuildingService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initform();
    this.getSimpleList();
    this.getFloors();
    this.onGetBuilding();
  }

  getSimpleList() {
    this.floorService.findFloorSimpleList().subscribe((response: any) => {
      console.log(response);
    });
  }

  initform() {
    this.searchForm = new FormGroup({
      libelle: new FormControl(""),
      buildingId: new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl("id,desc"),
    });
  }

  onSearchValueChange(): void {
    this.getFloors();
  }

  public getFloors() {
    this.showloading = true;
    this.subs.add(
      this.floorService.findAll(this.searchForm.value).subscribe(
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

  onIsActiveChange() {
    this.getFloors();
  }

  onPageChange(event) {
    this.searchForm.get("page").setValue(event - 1);
    this.getFloors();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: "lg" });
  }

  openUpdateForm(updateFormContent, item?) {
    this.floor = item;
    console.log(this.floor);
    this.modalService.open(updateFormContent, { size: "lg" });
  }

  addFloor() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Etage ajoutée avec succès"
    );
    this.getFloors();
  }

  updateFloor() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Etage modifiée avec succès"
    );
    this.getFloors();
  }

  deleteFloor(confirmationDialog, building) {
    this.floorItem = building;
    console.log(this.floorItem);

    this.modalService.open(confirmationDialog, { size: "sm" });
  }

  confirmDeleteFloor() {
    this.subs.add(
      this.floorService.deleteFloor(this.floorItem.id).subscribe(
        (res: IFloor) => {
          this.modalService.dismissAll();
          this.notificationService.notify(
            NotificationType.SUCCESS,
            "Etage supprimée avec succès"
          );
          this.getFloors();
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

  rowSelected(floor: IFloor, index: number) {
    this.currentIndex = index;
    this.floor = floor;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
