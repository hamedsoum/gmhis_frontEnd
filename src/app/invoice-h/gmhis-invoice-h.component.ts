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
import { GMHISInvoiceHPartial } from "./api/domain/gmhis.quotation";
import { GMHISInvoiceHItemPartial } from "./api/domain/gmhis.quotation.item";
import { GMHISInvoiceHPdfService } from "./api/service/gmhis-invoice-h-pdf.service";
import { GMHISInvoiceHService } from "./api/service/gmhis.invoice-h.service";

@Component({ selector: 'gmhis-invoice-h', templateUrl: './gmhis-invoice-h.component.html', providers: [GMHISInvoiceHPdfService]})
export class GMHISInvoiceHComponent implements OnInit {
    readonly TITLE = 'Factures';
    readonly NEW_QUOTATION = 'Nouvelle Facture';

    subscription: Subscription = new Subscription()

    searchFieldsForm: FormGroup;

    invoiceSelected : GMHISInvoiceHPartial;

    pagination: GMHISPagination = {};

    sizes = PAGINATION_SIZE;

    loading: boolean;

    docSrc: string;

    currentIndex: number;

    invoiceItems: GMHISInvoiceHItemPartial[];

    constructor(
        private router: Router,
        private invoiceHService: GMHISInvoiceHService,
        private notificationService: NotificationService,
        private modalService: NgbModal,
        private quotationPdfService: GMHISInvoiceHPdfService
    ) { }

    ngOnInit(): void {
        this.buildFields();
        this.search()
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onCreate(): void {
        this.router.navigateByUrl('/gmhis-invoice-h/create')
    }

    public onPrint(invoiceDocRef): void {    
        this.findInvoiceItems(this.invoiceSelected,invoiceDocRef)        
    }

    public onInvoiceSelected(invoice: GMHISInvoiceHPartial, index): void {
        this.currentIndex = index;
        this.invoiceSelected = invoice;
    }

    public onPageChange(event) {
        this.searchFieldsForm.get('page').setValue(event - 1);
        this.search();
    }

    public onSearchValueChange(): void {
        this.search();
    }

    public onOpenCreateForm(invoiceFormRef):void {
        this.modalService.open(invoiceFormRef, { size: 'md' });
    }

    public onOpenUpdateForm(invoiceFormRef):void {
        this.invoiceHService.findnvoiceItemsByinvoiceHID(this.invoiceSelected.id).subscribe((response: GMHISInvoiceHItemPartial[]) => { 
            this.invoiceItems = response;            
            this.modalService.open(invoiceFormRef, { size: 'xl' });
        })
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
        this.invoiceHService.search(this.searchFieldsForm.value)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe(
            (response: PageList) => {
                GmhisUtils.pageListMap(this.pagination, response); 
                console.log(this.pagination.items);
                
            },
            (errorResponse: HttpErrorResponse) => {   
                console.error(errorResponse.error.message);      
            }
        )
        )
    }

    private findInvoiceItems(quotation: GMHISInvoiceHPartial, quotationDocRef) {
        this.invoiceHService.findnvoiceItemsByinvoiceHID(quotation.id).subscribe((response: GMHISInvoiceHItemPartial[]) => { 
            this.invoiceItems = response;            
            let doc = this.quotationPdfService.buildPdf(this.invoiceSelected, this.invoiceItems);
            this.modalService.open(quotationDocRef, { size: 'xl' });
            this.docSrc = doc.output('datauristring'); 
        })
    }

}