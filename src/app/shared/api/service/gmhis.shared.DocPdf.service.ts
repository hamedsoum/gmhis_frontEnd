import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { User } from "src/app/_models";
import { UserService } from "src/app/_services";

@Injectable({providedIn: 'root'})
export class GMHISSharedDocPdfService  {

    constructor(private userService: UserService){}

    public docHeader(titleValue:string, titleX:number): jsPDF {
        let user = this.userService.getUserFromLocalCache();

        var doc = new jsPDF();
        doc.setFillColor(230, 230, 230);
        doc.addImage(user.facility.logo, "JPEG", 20, 10, 30, 30);
        doc.setFont("arial", "bold");
        doc.setFontSize(21);
        doc.rect(20, 50, 172, 15)
        doc.text(titleValue, titleX, 60);
        return doc;
    }
}