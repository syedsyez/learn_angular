import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input()
  likeCount:number=0;

  @Input()
  isActive?:boolean;

  likeButtonClick(){
   this.likeCount +=this.isActive?-1:1;
   this.isActive=!this.isActive;
  
  }


  constructor() { }

  ngOnInit(): void {
  }

}
