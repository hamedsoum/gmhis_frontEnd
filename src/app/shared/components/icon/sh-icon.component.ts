import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { GmhisUtils } from "../../base/utils";
import { SHColor, SHColorStr, SHSize, SHSizeStr } from "../../models/sh-core";

@Component({
    selector: 'sh-icon',
    template: `
        <i class=" {{ value }} {{styleClass}}" [ngClass]="{'sh-disabled': disabled === true, 'sh-clickable': clickable === true}" (click)="handleClick($event)")>

        </i>
    `
})
export class SHIconComponent implements OnInit {
    @Input() styleClass?: string;

    @Input() disabled: boolean;

    @Input() value: string;

    @Input() size: SHSize | SHSizeStr;

    @Input() color: SHColor | SHColorStr;

    @Input() clickable?: boolean;

    @Output() clickEvent: EventEmitter<Event> = new EventEmitter<Event>();

    ngOnInit(): void {
        GmhisUtils.notNull(this.value, 'value');
    }

    public handleClick(event: Event): void {
        if(this.disabled === true) {
            event.stopImmediatePropagation();
            return;
        }
        this.clickEvent.emit(event);
    }

}