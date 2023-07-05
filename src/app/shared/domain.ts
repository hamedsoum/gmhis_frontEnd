export interface labelValue {
    label: any;
    value: any;
}

export interface Pagination {
    currentPage: number;
    empty: boolean;
    firstPage: boolean;
    lastPage: boolean;
    totalItems: number;
    totalPages: number;
    selectedSize : number;
    items : any[];
}