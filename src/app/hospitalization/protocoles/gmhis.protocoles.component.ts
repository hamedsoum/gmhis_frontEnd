import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GmhisHospitalizationService } from "../api/service/gmhis.hospitalization.service";

type GHMISProtocole = { id: string; description: string; }

@Component({selector:'gmhis-protocole', templateUrl:'./gmhis.protocoles.component.html'})
export class GMHISProtocolesComponent implements OnInit {

    @Input() styleClass;

    @Input() data: GHMISProtocole[];

    @Input() hospitalizationID: string;

    @Input() showAllProtocole: boolean;

    @Input() showAddProtocole: boolean = false;

    protocoleDescription: string;

    subscription = new Subscription();

    showEditor: boolean = false;

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

    constructor(private hospitalizationService: GmhisHospitalizationService){}

    ngOnInit(): void {        
        GmhisUtils.notNull(this.data, 'data');
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

    public isDescription(): boolean {
        return GmhisUtils.isNull(this.protocoleDescription) ;
    }
}