import { AbstractControl, Validators } from "@angular/forms";
import { of } from "rxjs";

export class emailValidator {
    static email(control:AbstractControl): Validators | null{

        if(!control.value) return null
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(emailPattern.test(control.value)) return null
        return  of ({ invalidEmail: 'Please enter a valid email address' });

    }
}
