import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/_services/city.service';
import { CountryService } from 'src/app/_services/country.service';
import { DistrictService } from 'src/app/_services/district.service';
import { LocalityService } from 'src/app/_services/locality.service';

@Component({
  selector: 'app-locality-list',
  templateUrl: './locality-list.component.html',
  styleUrls: ['./locality-list.component.css']
})
export class LocalityListComponent implements OnInit {

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
   locality: Object;
 
   /**
    * collection of object
    */
   localities: Object;
 
 
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
    * define districts options
    */
   districts: object;

    /**
    * define cities options
    */
   cities: object;

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
     private localityService: LocalityService,
     private districtService: DistrictService,
     private countryService: CountryService,
     private cityService: CityService
 
   ) { }
 
   ngOnInit() {
     this.initForm();
     this.districtService.getIdAndName().subscribe(res => { this.districts = res; });
     this.cityService.getIdAndName().subscribe(res => { this.cities = res; });
     this.countryService.getIdAndName().subscribe(res => { this.countries = res; });
 
   }
 
   /**
    *  init form 
    */
   initForm() {
     this.form = new FormGroup({
       name: new FormControl(''),
       district: new FormControl(null),
       country: new FormControl(null),
       city: new FormControl(null)
     })
 
     this.entryForm = new FormGroup({
       entries: new FormControl(10),
     })
   }
 
   /**
    * get list
    */
   getLocalities() {
     let data = this.form.value
     data.entries = this.entryForm.get('entries').value;
     data.page = this.page;
     data.order = this.order;
     data.sort = this.sort;
 
     this.localityService.findAllPage(data).subscribe(
       res => {
         if (res) {
           this.loading = false;
           this.hasNoData = false;
           this.totalItem = res['totalElements'];
           this.pages = res['totalPages'];
           this.localities = res['content'];
           this.page = res['pageNumber'] + 1;
         };
       },
       error => {
         this.localities = [];
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
   this.getLocalities();
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
   this.getLocalities();
 }
 
   /**
    * set the current page
    * @param pageNum 
    */
   public onPageChange(pageNum: number): void {
   this.loading = true;
   this.page = pageNum - 1;
   this.getLocalities();
 }
 
 /**
  * function to handle the selected number of entries to show
  */
 OnEntryChange() {
   this.loading = true;
   this.perPage = this.entryForm.get('entries').value;
   this.page = this.page - 1;
   this.getLocalities();
 } 
 
 
 /**
  * get localities by district
  */
 OnDistrictChange() {
   this.loading = true;
   this.getLocalities();
 } 

  /**
  * get cities by country
  */
 OnCountryChange() {
  let country = this.form.get('country').value;
  this.cityService.findByCountry(country).subscribe(res => { this.cities = res; });
 
} 

 /**
  * get localities by city
  */
 OnCityChange() {
  this.loading = true;
  this.getLocalities();
}

}
