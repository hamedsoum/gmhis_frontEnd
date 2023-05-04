import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City } from 'src/app/_models/city.model';
import { CityService } from 'src/app/_services/city.service';
import { CountryService } from "./../../../_services/country.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  /**
    * search formGroup
    */
  public form: FormGroup;

  /**
   * entries formGroup
   */
  public entryForm: FormGroup;

  /**
   * init first page
   */
  public page = 0;

  /**
   * number of item par page default 10
   */
  public perPage = 10;

  /**
   * total items
   */
  public totalItem: number;

  /**
   * number of page
   */
  public pages: number;

  /**
   * handle the spinner
   */
  public loading = true;

  /**
   * the selected item a action
   */
  public selectedItem: number;

  /**
   * object model
   */
  city: City;

  /**
   * collection of object
   */
  cities: City[];


  /**
   * Define entries options
   */
  entries = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 }
  ];

  /**
   * define countries options
   */
  countries: object;

  /**
   *  order direction
   */
  order = 'desc';

  /**
   * order column default id
   */
  sort = 'id';

  /**
   * description of the order direction
   */
  orderDescription = 'decroissant';

  /**
 * define if request result has datas or no
 */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  @Input()
  title: string;

  constructor(
    private cityService: CityService,
    private countryService: CountryService

  ) { }

  ngOnInit() {

    this.initForm();
    this.countryService.getIdAndName().subscribe(res => { this.countries = res; });

  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      country: new FormControl(null)
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get list
   */
  getCities() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.cityService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.cities = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.cities = [];
        this.loading = false;
        this.hasNoData = true;
        this.totalItem = 0;
        this.EmptyMessage = error;
      })
}

/**
 * search function
 */
search() {
  this.loading = true;
  this.page = this.page > 0 ? this.page - 1 : 0;
  this.getCities();
}

/**
 * sort function
 * @param SortColumn 
 */
onSort(SortColumn) {
  this.loading = true;
  if (this.order == 'desc') {
    this.order = 'asc';
    this.orderDescription = 'decroissant';
  } else {
    this.orderDescription = 'croissant';
    this.order = 'desc';
  }
  this.orderDescription;
  this.sort = SortColumn;
  this.loading = true
  this.page = this.page - 1;
  this.getCities();
}

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
  this.loading = true;
  this.page = pageNum - 1;
  this.getCities();
}

/**
 * function to handle the selected number of entries to show
 */
OnEntryChange() {
  this.loading = true;
  this.perPage = this.entryForm.get('entries').value;
  this.page = this.page - 1;
  this.getCities();
} 


/**
 * get cities by country
 */
OnCountryChange() {
  this.loading = true;
  this.getCities();
} 
}
