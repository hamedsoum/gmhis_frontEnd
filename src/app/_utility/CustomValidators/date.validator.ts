import { AbstractControl } from '@angular/forms';


export function ValidateDate(control: AbstractControl) {
        let value = control.value;
        if (value && typeof value === "string") {
          let match = value.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
          if (!match) {
            return { 'dateFormatInvalid': true };
          } else if (match && match[0] !== value) {
            return { 'dateFormatInvalid': true };
          }
        }
        return null;
}
