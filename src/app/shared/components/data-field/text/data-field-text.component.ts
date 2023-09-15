import { Component, Input, OnInit } from "@angular/core";
import { GmhisUtils } from "src/app/shared/base/utils";

@Component({selector: 'data-field-text', templateUrl: './data-field-text.component.html', styleUrls: ['./data-field-text.component.scss']})
export class DataFieldText implements OnInit {
    @Input() styleClass?: string;

    @Input() labelStyleClass?: string;
    @Input() label?: string;

    @Input() valueStyleClass?: string
    @Input() value: string;

    @Input() icon?: string;
    @Input() iconStyle?: string;

    @Input() showBorder? : boolean;

    ngOnInit(): void {
        GmhisUtils.notNull(this.value, 'value');
    }
    
}