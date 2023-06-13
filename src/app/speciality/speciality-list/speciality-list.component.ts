import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemValue } from 'src/app/shared/domain';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { SepecialityService as SpecialityService } from '../sepeciality.service';
import { Speciality } from './speciality';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.scss']
})
export class SpecialityListComponent implements OnInit {
  private subs = new SubSink();

  public searchForm: FormGroup;

  public speciality: Speciality;

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

  actives:ItemValue[] = [
    { item: true, value: 'Actif' },
    { item: false, value: 'Inactif' },
  ];

  showloading: boolean = false;
  currentIndex: number;
  constructor(
    private specialityService: SpecialityService,
    private notificationService: NotificationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initform();
    this.retrieveSpeciality();
  }

  initform() {
    this.searchForm = new FormGroup({
      speciality: new FormControl(null),
      name: new FormControl(''),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl('id,desc'),
    });
  }

  onSearchValueChange(): void {
    this.retrieveSpeciality();
  }

  public retrieveSpeciality() {
    this.showloading = true;
    this.subs.add(
      this.specialityService.findAll(this.searchForm.value).subscribe(
        (response: PageList) => {
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

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.retrieveSpeciality();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: 'xl' });
  }

  openUpdateForm(updateFormContent, item?) {
    this.speciality = item;
    this.modalService.open(updateFormContent, { size: 'xl' });
  }

  addSpeciality() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Spécialité ajouté avec succès"
    );
    this.retrieveSpeciality();
  }

  updateSpeciality() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      "Spécialité modifié avec succès"
    );
    this.retrieveSpeciality();
  }

  rowSelected(practicien: Speciality, index: number) {
    this.currentIndex = index;
    this.speciality = practicien;
  }

}
