import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { AnalysisRequestService } from 'src/app/_services/analysis-request.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-analysis-request',
  templateUrl: './analysis-request.component.html'})
export class AnalysisRequestComponent implements OnInit {

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
   * collection of analysisRequests
   */
  public analysisRequests: object;

  public analysisRequest: object;

  analysis = [];

  /**
   * Define entries options
   */
  entries = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 }
  ]

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

   states= [
     {id: "N", value: "Demandes non traitées"},
     {id: "Y", value: "Demandes traitées"},
   ]


 /**
 * pdf src for ngx-extended-pdf-viewer
 */
  docSrc: any;

  constructor(
    private router: Router,
    private AnalysisRequestService: AnalysisRequestService,
    private alertService : AlertService) { }

  ngOnInit() {
    this.initForm();
    this.getAnalysisRequests();
  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      patientExternalId: new FormControl(''),
      cellPhone: new FormControl(''),
      cnamNumber: new FormControl(''),
      idCardNumber: new FormControl(''),
      state: new FormControl('N')
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get request list
   */
  getAnalysisRequests() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.AnalysisRequestService.findAllPage(data).subscribe(
      res => {
        if (res) {
          console.log(res['content'])
          this.loading = false;
          this.hasNoData=false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.analysisRequests = res['content']; 
          this.page = res['pageNumber'] + 1;
        };
      },
      error =>{
            this.analysisRequests = [];
            this.loading=false;
            this.hasNoData=true;
            this.EmptyMessage=error;
      });
   
  }

   /**
   * search function
   */
  search() {
    this.loading = true;
    this.page =this.page > 0 ? this.page - 1: 0;
    this.getAnalysisRequests();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getAnalysisRequests();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getAnalysisRequests();
  }

  setSelectedItem(item) {
    this.analysisRequest = item;
    this.analysis = JSON.parse(item.analysis);
  }

  save() {
    this.alertService.clear();
    this.AnalysisRequestService.setPerformed(this.analysisRequest['id']).subscribe(res => {
       if(res) {
         this.router.navigate(['/laboratory/analysis-request']);
         this.alertService.success("Demamnde d'analyses validée avec succèss")
       }
       this.page = this.page - 1;
       this.getAnalysisRequests();
    });
  }
  

}
