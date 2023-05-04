import { AbstractControl } from '@angular/forms';

export function ValidateInt(control: AbstractControl) {
        let value = control.value;
        
        if( Number(value) % 1 !== 0) {
            return { 'invalid type number': true };
         }
         
        return null;
}