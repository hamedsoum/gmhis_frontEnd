import { HttpParams } from "@angular/common/http";
import { ar } from "date-fns/locale";
import { PageList } from "src/app/_models/page-list.model";
import { GMHISPagination } from "../models/gmhis-domain";

export class GmhisUtils {

    private constructor(){}

     public static notNull(arg: any, varName:string):void {
        if(arg == null || arg == undefined) {
            throw new Error(`${varName} must not be null`);
        }
    }

    public static isNull(arg: any):boolean {
        if(typeof arg == "string" && arg.length == 0) return true;
        return (arg == null || arg == undefined);
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

    public static toHttpParams(args: Map<string,string>): HttpParams {
        let params = new HttpParams();
        args.forEach((value, key) => {
            params.set(key, value)
        });
        return params;
    }
}