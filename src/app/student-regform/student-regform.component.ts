import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'student-regform',
  templateUrl: './student-regform.component.html',
  styleUrls: ['./student-regform.component.css']
})
export class StudentRegformComponent implements OnInit {

  cities=[{id:1, name:"Bangalore"},
          {id:2, name:"Chennai"},
          {id:3, name:"Hyderabad"},
          {id:4 ,name:"Mysore"}];

  log(x:any){
    console.log(x);
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit(f:NgForm){
    console.log(f.value);
  }

}
