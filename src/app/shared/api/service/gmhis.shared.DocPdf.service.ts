import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { root } from "rxjs/internal-compatibility";

@Injectable({providedIn: 'root'})
export class GMHISSharedDocPdfService  {

    docHeader(): jsPDF {
        const doc = new jsPDF();
        
        return doc;
    }
}