import { PageList } from "src/app/_models/page-list.model";
import { GMHISPagination } from "../models/gmhis-domain";

export class GmhisUtils {

    private constructor(){}

     public static notNull(arg: any, varName:string):void {
        console.log(arg);
        if(arg == null || arg == undefined) {
            throw new Error(`${varName} must not be null`);
        }
    }

    public static pageListMap(pagination: GMHISPagination, arg: PageList): void {
        pagination.currentPage = arg.currentPage + 1;
        pagination.empty = arg.empty;
        pagination.firstPage = arg.firstPage;
        pagination.items = arg.items;                                            
        pagination.lastPage = arg.lastPage;
        pagination.selectedSize = arg.size;
        pagination.totalItems = arg.totalItems;
        pagination.totalPages = arg.totalPages;
    }
}