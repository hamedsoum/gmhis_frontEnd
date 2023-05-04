import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country } from 'src/app/_models/country.model';
import { CountryService } from 'src/app/_services/country.service';
import { deleteRow } from 'src/app/_utility/delete-row';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

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
   * object model
   */
  country: Country;

  /**
   * collection of object
   */
  countries: Country[];


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
  EmptyMessage : String;

  @Input()
  title: string;

  constructor(
    private countryService: CountryService,

  ) { }

  ngOnInit() {

    this.initForm();
    this.getCountries();

  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get list
   */
  getCountries() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;


    this.countryService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.countries = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.countries = [];
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
    this.getCountries();
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
    this.getCountries();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getCountries();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getCountries();
  }
}
