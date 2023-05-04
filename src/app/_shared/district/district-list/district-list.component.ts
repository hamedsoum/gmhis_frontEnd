import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DistrictService } from 'src/app/_services/district.service';
import { RegionService } from 'src/app/_services/region.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {

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
   district: Object;
 
   /**
    * collection of object
    */
   districts: Object[];
 
 
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
    * define regions options
    */
   regions: object;
 
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
     private districtService: DistrictService,
     private regionService: RegionService
 
   ) { }
 
   ngOnInit() {
 
     this.initForm();
     this.regionService.getIdAndName().subscribe(res => { this.regions = res; });
 
   }
 
 
   /**
    *  init form 
    */
   initForm() {
     this.form = new FormGroup({
       name: new FormControl(''),
       region: new FormControl(null)
     })
 
     this.entryForm = new FormGroup({
       entries: new FormControl(10),
     })
   }
 
   /**
    * get list
    */
   getDistricts() {
     let data = this.form.value
     data.entries = this.entryForm.get('entries').value;
     data.page = this.page;
     data.order = this.order;
     data.sort = this.sort;
 
     this.districtService.findAllByPage(data).subscribe(
       res => {
         if (res) {
           this.loading = false;
           this.hasNoData = false;
           this.totalItem = res['totalElements'];
           this.pages = res['totalPages'];
           this.districts = res['content'];
           this.page = res['pageNumber'] + 1;
         };
       },
       error => {
         this.districts = [];
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
   this.getDistricts();
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
   this.getDistricts();
 }
 
   /**
    * set the current page
    * @param pageNum 
    */
   public onPageChange(pageNum: number): void {
   this.loading = true;
   this.page = pageNum - 1;
   this.getDistricts();
 }
 
 /**
  * function to handle the selected number of entries to show
  */
 OnEntryChange() {
   this.loading = true;
   this.perPage = this.entryForm.get('entries').value;
   this.page = this.page - 1;
   this.getDistricts();
 } 
 
 
 /**
  * get districts by country
  */
 OnCountryChange() {
   this.loading = true;
   this.getDistricts();
 } 

}
