export interface GMHISPagination {
    currentPage?: number;
    empty?: boolean;
    firstPage?: boolean;
    lastPage?: boolean;
    totalItems?: number;
    totalPages?: number;
    selectedSize?: number;
    currentIndex?: number;
    items?: any[];
 }

 export interface GMHISName {
     firstName?: string;
     lastName?: string;
 }