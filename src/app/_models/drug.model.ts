export interface Drug {
        id: number;
        name: string;
        active: string;
        alertQuantity: number,
        conditioningUnit: number,
        dcns: any[],
        defaultDosage: string,
        generic: string,
        laboratory: number,
        location: string,
        pharmaceuticClass: number,
        pharmacologicalForm: number,
        ppv: number,
        princeps: string,
        quantityInStock: number,
        sellingPrice: number,
        therapeuticClass: number
}