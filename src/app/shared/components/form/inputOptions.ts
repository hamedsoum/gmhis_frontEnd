import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface InputOtions {
    type: 'text' | 'password' | 'number' | 'tel' | 'email',
    styleClass?: string;
    placeHolder?: string;
    label: string;
    control: FormControl | FormGroup | FormArray,
}