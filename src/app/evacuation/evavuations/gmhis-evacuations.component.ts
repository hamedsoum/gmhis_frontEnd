import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SIZE } from "../api/constant/evacuation.constant";
import { GMHISEvacuationPartial } from "../api/domain/evacuation.domain";

 export interface Pagination {
    currentPage: number;
    empty: boolean;
    firstPage: boolean;
    lastPage: boolean;
    totalItems: number;
    totalPages: number;
    selectedSize: number;
    currentIndex: number;
    items: any[];
 }

@Component({ selector: 'gmhis-evacuations', templateUrl: './gmhis-evacuations.component.html'})
export class GMHISEvacuationsComponent implements OnInit {

    @Input() styleClass?: string;

    @Input() evacuation?: GMHISEvacuationPartial;
    @Input() admissionId?: string;

    subscription : Subscription = new Subscription();
    
    paginaton: Pagination;

    sizes = SIZE;

    loading: boolean;


    ngOnInit(): void {} 


}