import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AnalysisDomainService } from 'src/app/_services/analysis-domain.service';
import { AnalysisRequestService } from 'src/app/_services/analysis-request.service';
import { PatientService } from 'src/app/_services/patient.service';
declare let $: any;

@Component({
  selector: 'app-exam-follow-up',
  templateUrl: './exam-follow-up.component.html',
  styleUrls: ['./exam-follow-up.component.css']
})
export class ExamFollowUpComponent implements OnInit {


  form: FormGroup;

  @Input()
  admissionId: number;

  @Input()
  patientId: number;

  /**
  * init first page
  */
  public page = 0;

  /**
   * number of item par page default 10
   */
  public perPage = 10;


  /**
   *  order direction
   */
  order = 'desc';

  /**
   * order column default id
   */
  sort = 'id';

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
   * define if request result has datas or no
   */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  /**
   * 
   */

  analysisDomains: object;
  /**
   * 
   */
  analysisTypes: object;
  /**
   * 
   */
  selectectedItems = [];

  /**
   * 
   */
  analysisRequest: object;

  /**
   * 
  */
  message: string;
  /**
   * 
   * 
   */
  error: string;

  /**
   * 
   */
  requestLists: object;

  analysis = [];

  patient : object;

  /**
   * pdf src for ngx-extended-pdf-viewer
   */
  docSrc: any;

  constructor(
    private analysisRequestService: AnalysisRequestService,
    private analysisDomainService: AnalysisDomainService,
    private patientService: PatientService
    
  ) { }

  ngOnInit(): void {

    this.patientService.findById(this.patientId).subscribe(res => { this.patient = res;})
    this.initForm()
    this.analysisDomainService.findActive().subscribe(res => { this.analysisDomains = res; });
    this.getAnalysisRequests();
  }

  /**
   * 
   */
  initForm() {

    this.form = new FormGroup({
      admission: new FormControl(this.admissionId),
      analysis: new FormControl(null),
      diagnostic: new FormControl(''),
      id: new FormControl(0),
      observation: new FormControl(''),
      otherAnalysis: new FormControl('')
    })
  }

  /**
   * 
   */
  getAnalysisRequests() {

    let data = {
      "page": this.page,
      'size': this.perPage,
      "sort": 'createdAt',
      "order": 'desc',
      'patientId': this.patientId
    };

    this.analysisRequestService.findAllByPatientAndPage(data).subscribe(
      res => {
        if (res) {

          res['content'].forEach(element => {
            map(element.analysis = JSON.parse(element.analysis).join(", "))
          });
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.requestLists = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.requestLists = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })
  }

  /**
  * set the current page
  * @param pageNum 
  */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = this.page - 1;
    this.getAnalysisRequests();
  }

  /**
   * 
   */
  saveAnalysisRequest() {
    this.atModalshow();
    let data = this.form.value;
    data.analysis = JSON.stringify(this.selectectedItems);

    if (this.form.valid) {
      if (this.selectectedItems.length != 0) {
        this.analysisRequestService.save(data).subscribe(res => {
          this.analysisRequest = res;
          this.form.get('id').setValue(res.id);
          this.message = "Demande d'analyses envoyée";
          this.loading = true;
          this.page = this.page - 1;
          this.getAnalysisRequests();
        })

      } else {
        this.error = 'veillez selectionner des actes!'
      }
    } else {
      this.error = 'Formulaire invalid';
    }

  }

  /**
   * 
   */
  generateExam(request): void { 
    const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
    console.log(patientTag);
    
      let doc = this.analysisRequestService.generatePdf(request, 'Chambre 00', patientTag);
      this.docSrc = doc.output('datauristring');
  }

  /**
   * 
   * @param target 
   * @param item 
   */
  checked(target, item) {
    target.classList.toggle('bg-dark');

    if (this.selectectedItems.includes(item)) {

      let index = this.selectectedItems.indexOf(item);
      this.selectectedItems.splice(index, 1);

    } else {

      this.selectectedItems.push(item);
    }

  }

  /**
   * 
   * @param item 
   */
  selectedItem(item) {

    this.analysisRequestService.findById(item).subscribe(res => {
      this.selectectedItems = JSON.parse(res.analysis);

      for (let index = 0; index < this.selectectedItems.length; index++) {
        document.getElementById(this.selectectedItems[index]).classList.add('bg-dark');
      }

      this.form.patchValue(res);
    });
  }

  /**
   * 
   */
  atModalshow() {
    this.message = null;
    this.error = null;
  }

  /**
   * 
   */
  atModalsClose() {
    let analysisTypes = document.getElementsByClassName('analysisType');

    for (let index = 0; index < analysisTypes.length; index++) {
      document.getElementById(analysisTypes[index].id).classList.remove('bg-dark');
    }
  }
}
