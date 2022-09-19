import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-regform',
  templateUrl: './student-regform.component.html',
  styleUrls: ['./student-regform.component.css']
})
export class StudentRegformComponent implements OnInit {

  log(x:any){
    console.log(x);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
