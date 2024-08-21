import { FormGroup } from "@angular/forms"

export const confirmPasswordValidator = (controlName:string, controlNameTomatch:string) => {
    return (formGroup : FormGroup) =>{
        let control = formGroup.controls[controlName];
        let controlTomatch = formGroup.controls[controlNameTomatch];

        if(controlTomatch.errors && !controlTomatch.errors['confirmPasswordValidator']){
            return;
        }
        if(control.value !== controlTomatch.value){
            controlTomatch.setErrors({confirmPasswordValidator : true})
        }else{
            controlTomatch.setErrors(null);
        }
    }
}