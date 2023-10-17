import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActService } from "src/app/act/act/service/act.service";
import { GMHISNameAndID } from "src/app/shared/models/name-and-id";
import { GmhisUtils } from "../../../shared/base/utils";
import { GMHISQuotationItemPartial } from "../../api/domain/gmhis.quotation.item";

@Component({selector: 'gmhis-form-array', templateUrl: './gmhis-quotation-item-form-array.component.html'})
export class GMHISQuotationItemFormComponent implements OnInit {
    @Input() styleClass?: string;

    @Output() formArrayValueChangeEvent = new EventEmitter<GMHISQuotationItemPartial[]>();

    @Input() formArray: FormArray;

    fieldGroup : FormGroup;

    acts: GMHISNameAndID[];

    constructor(private actService: ActService) {}

    ngOnInit(): void {
        this.initialize();
        this.addItem();
    }

    public addItem(): void {
        this.formArray.push(this.fieldGroup);
        this.emitQuotationItemsValue();
    }

    public removeItem(itemIndex: number): void {
        this.formArray.removeAt(itemIndex);
        this.emitQuotationItemsValue();
    }

    private findActs() {
        this.actService.getListOfActiveAct().subscribe((response: GMHISNameAndID[]) => {this.acts = response;})
      }

      private emitQuotationItemsValue(): void {
          let quotationItemsValue = this.formArray.getRawValue() as GMHISQuotationItemPartial[];
        this.formArrayValueChangeEvent.emit(quotationItemsValue)
      }

      private initialize(): void {
        this.buildFieldGroup();
        this.findActs();
    }

    private buildFieldGroup(): void {
        this.fieldGroup = new FormGroup( {
            actId: new FormControl(null, Validators.required),
            actCode: new FormControl(null, Validators.required),
            actNumber: new FormControl(null, Validators.required),
            quantity: new FormControl(null, Validators.required),
            unitPrice: new FormControl(null, Validators.required),
            totalAmount: new FormControl(null, Validators.required),
            moderatorTicket: new FormControl(null),
            cmuAmount: new FormControl(null),
            cmuPercent: new FormControl(null),
            insurancePercent: new FormControl(null),
            PracticianID: new FormControl(null)

        })
    }

}