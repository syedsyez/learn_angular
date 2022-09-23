import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentNameValidator } from './studentName.validatorcom';

@Component({
  selector: 'student-reg-reactive',
  templateUrl: './student-reg-reactive.component.html',
  styleUrls: ['./student-reg-reactive.component.css']
})
export class StudentRegReactiveComponent implements OnInit {

   form = new FormGroup({
    studentName:new FormControl('',[Validators.required,
    Validators.minLength(5),StudentNameValidator.nameShouldnotContainSpace],
    StudentNameValidator.duplicateCheck),
    email:new FormControl('',[Validators.required,
        Validators.email]),
    phoneNumber:new FormControl('',[Validators.required,
      Validators.pattern("[0-9]{10}")]),
    city: new FormControl(''),
    isGraduate:new FormControl('')
   });

   cities=[{id:1, name:"Bangalore"},
   {id:2, name:"Chennai"},
   {id:3, name:"Hyderabad"},
   {id:4 ,name:"Mysore"}];

   get studentName(){
    return this.form.get('studentName');
   }
   get email(){
    return this.form.get('email');
  }
  get phoneNumber(){
    return this.form.get('phoneNumber');
  }
  get city(){
    return this.form.get('city');
  }

  get isGraduate(){
    return this.form.get('isGraduate');
  }

  log(x:any){
    console.log(x);
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
