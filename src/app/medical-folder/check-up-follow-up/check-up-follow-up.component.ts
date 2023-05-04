import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import { CheckUpService } from 'src/app/_services/check-up.service';
import { PatientCheckUpService } from 'src/app/_services/patient-check-up.service';

@Component({
  selector: 'app-check-up-follow-up',
  templateUrl: './check-up-follow-up.component.html',
  styleUrls: ['./check-up-follow-up.component.css']
})
export class CheckUpFollowUpComponent implements OnInit {

  checkUpForm: FormGroup;

  @Input()
  patientId: number;

  @Input()
  admissionId: number;

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
   * selected items
   */
  selectectedItems = [];

  /**
  * displays if success
  */
  message: string;

  /**
   * displays if error
   * 
   */
  error: string;

  /**
   * define checkups options
   */
  checkUps: object;

  /**
   * check-Uup object
   */
  checkUp: object;

  /**
   * patient all check-ups
   */
  patientCheckUps: Object;


  /**
   * pdf src for ngx-extended-pdf-viewer
   */
  docSrc: any;

  patient: object;

  constructor(
    private checkUpService: CheckUpService,
    private patientCheckUpService: PatientCheckUpService
  ) { }

  ngOnInit(): void {

    this.initForm()
    this.checkUpService.getIdAndName().subscribe(res => { this.checkUps = res; });
    this.getCheckUps();
  }

  /**
   * 
   */
  initForm() {

    this.checkUpForm = new FormGroup({
      checkUp: new FormControl(null)
    });
  }

  /**
  * set the current page
  * @param pageNum 
  */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = this.page - 1;
    this.getCheckUps();
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
   */
  atModalshow() {
    this.message = null;
    this.error = null;
  }

  /**
   * 
   */
  onCheckUpChange() {
    let checkUpId = this.checkUpForm.get("checkUp").value;
    this.checkUpService.findById(checkUpId).subscribe(res => {
      this.checkUp = res;
    })
  }

  /**
   * get all patient check ups by page
   */
  getCheckUps() {
    let data = {
      patientId: this.patientId,
      page: this.page,
    }

    this.patientCheckUpService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.patientCheckUps = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.patientCheckUps = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })

  }

  /**
   * 
   */
  saveCheckUpRequest() {
    let data = {
      "admission": this.admissionId,
      "docId": this.checkUp['id'],
      "custom_text": null,
      "id": 0
    }

    this.patientCheckUpService.save(data).subscribe(res => {
      if (res) {
        this.message = "bilan creé avec succès!";
        this.page = this.page - 1;
        this.getCheckUps();
      }
    })
  }

  generateCheckUpPdf(checkUp) {
 
    const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
  
    this.patient = checkUp['patient'];
    
      let doc = this.checkUpService.generatePdf(checkUp, patientTag);
      this.docSrc = doc.output('datauristring');
  }

  reset() {}
}
