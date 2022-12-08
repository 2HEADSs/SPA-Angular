import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if(!/^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$/.test(value)){
        return {
            email:true
        }
    }
    return null;
}