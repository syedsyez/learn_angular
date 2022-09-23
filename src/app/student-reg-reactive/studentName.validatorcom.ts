import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class StudentNameValidator{

    static nameShouldnotContainSpace(control: AbstractControl<any, any>): ValidationErrors | null{
        let value:string = control.value;
       console.log("**name space validator invoked");
        if(value.indexOf(' ')>0){
            return {nameContainsSpace:true};
        }
       
       
        return null;
    }

    static duplicateCheck(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{ 
            if(control.value == "zuber")
            resolve({nameShouldbeUnique:true});
            else{
            resolve(null);
            }},3000);
           

        });

        
   }

}