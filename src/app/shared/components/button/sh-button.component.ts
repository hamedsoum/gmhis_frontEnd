import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

enum buttonType {
    TEXT = 'text',
    button = 'button'
}
type buttonTypeStr = 'text | button';

enum size {
    SMALL = 'small',
    MEDIUM = 'medium',
    INTERMEDIATE = 'intermediate',
    LARGE = 'large',
}
type sizeStr = 'small | medium | intermediate | large';

@Component({selector:'sh-button',templateUrl: './sh-button.component.html', styleUrls: ['./sh-button.component.scss']})
export class SHButtonComponent implements OnInit {
    @Input() styleClass?: string;
    @Input() labelStyleClass?: string;
    @Input() IconStyleClass?: string;

    @Input() disabled?: boolean;

    @Input() label: string;

    @Input() type?: buttonType | buttonTypeStr;

    @Input() size?: size | sizeStr; 

    @Input() showIcon?: boolean;

    @Output() clickEvent: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
        if (this.label == null) throw new Error("label cannot be null");
    }
    
}