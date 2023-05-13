import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { IBedroomType } from "src/app/_models/bedroom-type.model";
import { NotificationService } from "src/app/_services/notification.service";
import { SubSink } from "subsink";
import { BedroomTypeService } from "../bedroom-type.service";
import { PageList } from "src/app/_models/page-list.model";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationType } from "src/app/_utilities/notification-type-enum";

@Component({
  selector: "app-bedroom-type-list",
  templateUrl: "./bedroom-type-list.component.html",
  styleUrls: ["./bedroom-type-list.component.scss"],
})
export class BedroomTypeListComponent implements OnInit {
  private subs = new SubSink();

  public searchForm: FormGroup;

  public bedroomType: IBedroomType;

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
  bedroomTypeItem: IBedroomType;

  constructor(
    private bedroomTypeService: BedroomTypeService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initform();
    this.getSimpleList();
    this.getBedroomType();
  }

  getSimpleList() {
    this.bedroomTypeService
      .findBedroomTypeSimpleList()
      .subscribe((response: any) => {
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
    this.getBedroomType();
  }

  public getBedroomType() {
    this.showloading = true;
    this.subs.add(
      this.bedroomTypeService.findAll(this.searchForm.value).subscribe(
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
    this.getBedroomType();
  }

  onPageChange(event) {
    this.searchForm.get("page").setValue(event - 1);
    this.getBedroomType();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: "lg" });
  }

  openUpdateForm(updateFormContent, item?) {
    this.bedroomType = item;
    console.log(this.bedroomType);
    this.modalService.open(updateFormContent, { size: "lg" });
  }

  addBedroomType() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Type de chambre ajouté avec succès"
    );
    this.getBedroomType();
  }

  updateBedroomType() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Type de chambre modifié avec succès"
    );
    this.getBedroomType();
  }

  deleteBedroomType(confirmationDialog, building) {
    this.bedroomTypeItem = building;
    console.log(this.bedroomTypeItem);

    this.modalService.open(confirmationDialog, { size: "sm" });
  }

  confirmDeleteBedroomType() {
    this.subs.add(
      this.bedroomTypeService
        .deleteBedroomType(this.bedroomTypeItem.id)
        .subscribe(
          (res: IBedroomType) => {
            this.modalService.dismissAll();
            this.notificationService.notify(
              NotificationType.SUCCESS,
              "Etage supprimée avec succès"
            );
            this.getBedroomType();
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

  rowSelected(bedroomType: IBedroomType, index: number) {
    this.currentIndex = index;
    this.bedroomType = bedroomType;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
