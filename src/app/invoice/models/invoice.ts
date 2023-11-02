export enum patientType {
    UNINSURED = 'c', // Patient Comptant
    INSURED = 'A' // Patient Assuré
}

export interface InvoiceCreateData {
      admission: number,
      billType?: string,
      convention?:number,
      discountInCfa?: string,
      discountInPercentage?: string,
      insured?: number,
      patientType?: string,
      acts: any[],
      insuredList?: any[],
      patientPart?: number,
      partTakenCareOf?: number
}

export interface InvoiceCost {
    totalInvoice : number,
    partPecByCNAM : number,
    partPecByOthherInsurance : number,
    partientPart : number
}