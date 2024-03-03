import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { threadId } from "worker_threads";
import { GmhisHospitalizationService } from "../api/service/gmhis.hospitalization.service";

type GHMISProtocole = { id: string; description: string; }

@Component({selector:'gmhis-protocole', templateUrl:'./gmhis.protocoles.component.html'})
export class GMHISProtocolesComponent implements OnInit {

    @Input() styleClass;

    @Input() data: GHMISProtocole[];

    @Input() hospitalizationID: string;

    @Input() showAllProtocole: boolean;

    @Input() showAddProtocole: boolean = false;

    fieldsGroup = new FormGroup({});

    formSubmitted: boolean;

    protocoleDescription: string;

    showEditor: boolean = false;
    showServiceEditor: boolean = false;

    quillConfiguration = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          ['link'],
          ['clean'],
        ],
      }

    loading: boolean;

    subscription = new Subscription();

    protocoleID: string;
   protocoleServices: any[] = [];

    constructor(private hospitalizationService: GmhisHospitalizationService,private modalService: NgbModal){}

    ngOnInit(): void {        
        GmhisUtils.notNull(this.data, 'data');
        this.buildFields();
    }
    
    public onAddProtocole(): void {
        if(GmhisUtils.isNull(this.protocoleDescription)) return;
        this.loading = true;
        this.subscription.add(
            this.hospitalizationService.createProtocole(this.hospitalizationID, this.protocoleDescription).subscribe(
                (response: void) => {
                    this.showEditor = false;
                    this.onShowProtocol();
                }, 
                (error: HttpErrorResponse) => {

                }
            )
        )
    }

    public onShowProtocol(): void {
        this.subscription.add(
          this.hospitalizationService.findProtocoles(this.hospitalizationID).subscribe(
            (response: {id: string, description: string}[]) => {
              this.data = response;
              this.protocoleDescription = '';
              this.loading = false;
            },
            (error: HttpErrorResponse) => {
              console.log(error);
              
            }
          )
        )
      }

    public onAddProtocoleService(): void {
      this.formSubmitted = true;
      if(!this.fieldsGroup.valid) return;
      this.subscription.add(
        this.hospitalizationService.createProtocoleService(this.protocoleID, this.fieldsGroup.value).subscribe(
          (response: any) => {
            console.log(response);
            this.showServiceEditor = false;
            this.loading = false;
            this.fieldsGroup.reset()
          },
          (error: HttpErrorResponse) => {
            console.log(error);
            
          }
        )
      )
    }

    public isDescription(): boolean {
        return GmhisUtils.isNull(this.protocoleDescription) ;
    }

    public onShowProtocoleServiceForm(protocoleID: string): void {
      console.log(protocoleID);
      
      this.protocoleID = protocoleID;
      this.showServiceEditor = !this.showServiceEditor;      
    }

    public onShowProtocoleServices(servicesRef,protocoleId: string) {
      this.hospitalizationService.findProtocoleServices(protocoleId).subscribe(
        (response: any) => {
          console.log(response);
          this.protocoleServices = response;
          this.modalService.open(servicesRef, { size: 'lg' });
        }
      )
    }

    private buildFields(): void {
      this.fieldsGroup = new FormGroup({
        detail: new FormControl('', Validators.required),
        serviceDate: new FormControl('', Validators.required)
      })
    }

    get detail() { return this.fieldsGroup.get('detail'); }
    get serviceDate() { return this.fieldsGroup.get('serviceDate'); }
}