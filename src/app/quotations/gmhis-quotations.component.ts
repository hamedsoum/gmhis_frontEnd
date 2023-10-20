import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { GmhisUtils } from "../shared/base/utils";
import { PAGINATION_DEFAULT_SIZE, PAGINATION_SIZE } from "../shared/constant";
import { GMHISPagination } from "../shared/models/gmhis-domain";
import { PageList } from "../_models/page-list.model";
import { NotificationService } from "../_services";
import { NotificationType } from "../_utilities/notification-type-enum";
import { GMHISQuotationPartial } from "./api/domain/gmhis.quotation";
import { GMHISQuotationItemPartial } from "./api/domain/gmhis.quotation.item";
import { GMHISQuotationPdfService } from "./api/service/gmhis-quotation-pdf.service";
import { GMHISQuotationService } from "./api/service/gmhis.quotation.service";

@Component({ selector: 'gmhis-quotations', templateUrl: './gmhis-quotations.component.html', providers: [GMHISQuotationPdfService]})
export class GMHISQuotationsComponent implements OnInit {
    readonly TITLE = 'Facture Proformat';
    readonly NEW_QUOTATION = 'Nouvelle Facture';

    subscription: Subscription = new Subscription()

    searchFieldsForm: FormGroup;

    quotationSelected : GMHISQuotationPartial;

    pagination: GMHISPagination = {};

    sizes = PAGINATION_SIZE;

    loading: boolean;

    docSrc: string;

    currentIndex: number;

    quotationsItems: GMHISQuotationItemPartial[];

    constructor(
        private router: Router,
        private quotationService: GMHISQuotationService,
        private notificationService: NotificationService,
        private modalService: NgbModal,
        private quotationPdfService: GMHISQuotationPdfService
    ) { }

    ngOnInit(): void {
        this.buildFields();
        this.search()
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onCreate(): void {
        this.router.navigateByUrl('/gmhis-quotations/create')
    }

    public onPrint(quotationDocRef): void {    
        this.findquotationItems(this.quotationSelected,quotationDocRef)        
    }

    public onQuotationSelected(quotation: GMHISQuotationPartial): void {
        this.quotationSelected = quotation;
    }

    public onPageChange(event) {
        this.searchFieldsForm.get('page').setValue(event - 1);
        this.search();
    }

    public onSearchValueChange(): void {
        this.search();
    }

    public onOpenCreateForm(quotationFormRef):void {
        this.modalService.open(quotationFormRef, { size: 'md' });
    }

    public onOpenUpdateForm(quotationFormRef, quotation?: GMHISQuotationPartial):void {
        this.quotationSelected = quotation;
        this.modalService.open(quotationFormRef, { size: 'md' });
    }

    public handleQuotationSaveEvent(): void{
        this.modalService.dismissAll();
        this.notificationService.notify(NotificationType.SUCCESS,'Facture Proformat Crée');
        this.search();
    }

    public handleQuotationUpdateEvent():void {
        this.modalService.dismissAll();
        this.notificationService.notify(NotificationType.SUCCESS,'Facture Proformat Modifiée');
        this.search();
    }

    
    private buildFields(): void {
        this.searchFieldsForm = new FormGroup({
        page: new FormControl(0),
        size: new FormControl(PAGINATION_DEFAULT_SIZE),
        sort: new FormControl('id,desc'),
        })
    }

    private search(): void {
        this.loading = true;
        this.subscription.add(
        this.quotationService.search(this.searchFieldsForm.value)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe(
            (response: PageList) => {
                GmhisUtils.pageListMap(this.pagination, response); 
                console.log(this.pagination.items)        
            },
            (errorResponse: HttpErrorResponse) => {   
                console.error(errorResponse.error.message);      
            }
        )
        )
    }

    private findquotationItems(quotation: GMHISQuotationPartial, quotationDocRef) {
        this.quotationService.findQuotationItemsByquotationID(quotation.id).subscribe((response: GMHISQuotationItemPartial[]) => { 
            this.quotationsItems = response;
            console.log(this.quotationsItems);
            
            let doc = this.quotationPdfService.buildPdf(this.quotationSelected, this.quotationsItems);
            this.modalService.open(quotationDocRef, { size: 'xl' });
            this.docSrc = doc.output('datauristring'); 
        })
    }

}