import { Component, Input, OnInit } from "@angular/core";

@Component({selector: 'data-field-textarea', templateUrl: './data-field-textarea.component.html'})
export class SHDatafieldTextaeraComponent implements OnInit {
    @Input() styleClass?: string;

    @Input() labelStyleClass?: string;
    @Input() label?: string;

    @Input() valueStyleClass: string
    @Input() value: string;

    @Input() icon?: string;
    @Input() iconStyle?: string;

    ngOnInit(): void {
        if (this.value == null) throw new Error("value cannot be null");
    }
    
}