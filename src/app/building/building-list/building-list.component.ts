import { Component, OnInit } from "@angular/core";
import { BuildingService } from "../building.service";
import { NotificationService } from "src/app/_services/notification.service";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { IBuilding } from "src/app/_models/building.model";
import { FormControl, FormGroup } from "@angular/forms";
import { SubSink } from "subsink";
import { PageList } from "src/app/_models/page-list.model";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationType } from "src/app/_utilities/notification-type-enum";

@Component({
  selector: "app-building-list",
  templateUrl: "./building-list.component.html",
  styleUrls: ["./building-list.component.scss"],
})
export class BuildingListComponent implements OnInit {
  private subs = new SubSink();

  public searchForm: FormGroup;

  public building: IBuilding;

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
  buildingItem: IBuilding;

  constructor(
    private buildingService: BuildingService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initform();
    this.getSimpleList();
    this.getBuildings();
  }

  getSimpleList() {
    this.buildingService.findBuildingSimpleList().subscribe((response: any) => {
      console.log(response);
    });
  }

  initform() {
    this.searchForm = new FormGroup({
      libelle: new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl("id,desc"),
    });
  }

  onSearchValueChange(): void {
    this.getBuildings();
  }

  public getBuildings() {
    this.showloading = true;
    this.subs.add(
      this.buildingService.findAll(this.searchForm.value).subscribe(
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
    this.getBuildings();
  }

  onPageChange(event) {
    this.searchForm.get("page").setValue(event - 1);
    this.getBuildings();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: "lg" });
  }

  openUpdateForm(updateFormContent, item?) {
    this.building = item;
    console.log(this.building);
    this.modalService.open(updateFormContent, { size: "lg" });
  }

  addBuilding() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Batiment ajouté avec succès"
    );
    this.getBuildings();
  }

  updateBuilding() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Batiment modifié avec succès"
    );
    this.getBuildings();
  }

  deleteBuilding(confirmationDialog, building) {
    this.buildingItem = building;
    console.log(this.buildingItem);

    this.modalService.open(confirmationDialog, { size: "sm" });
  }

  confirmDeleteBuilding() {
    this.buildingService.deleteBuilding(this.buildingItem.id).subscribe(
      (res: IBuilding) => {
        this.modalService.dismissAll();
        this.notificationService.notify(
          NotificationType.SUCCESS,
          "Batiment supprimé avec succès"
        );
        this.getBuildings();
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

  rowSelected(building: IBuilding, index: number) {
    this.currentIndex = index;
    this.building = building;
  }
}
