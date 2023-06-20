export interface IInvoice {
    
}

export enum PATIENTTYPE {
    UNINSURED = 'c', // Patient Comptant
    INSURED = 'A' // Patient Assuré
}

export interface IInvoiceDto {
     id: number,
      admission: number,
      billType: string,
      convention:number,
      discountInCfa: string,
      discountInPercentage: string,
      insured: number,
      patientType: string,
      acts: any[],
      insuredList : any[],
      patientPart : number,
      partTakenCareOf : number
}

export interface InvoiceCost {
    totalInvoice : number,
    partPecByCNAM : number,
    partPecByOthherInsurance : number,
    partientPart : number
}