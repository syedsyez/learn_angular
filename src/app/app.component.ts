import { Component } from '@angular/core';
import { User } from './User.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  user:User={
    name:"John Doe",
    age:25,
    books:['book1','book2'],
    networth:1000000,
    rating:4.55005
  };
  tweet={
    body:"....tweet body",
    likeCount:10,
    isActive:false,
  }

  nameAtt="Software Enginner";

  componentChanged(event:any){
    console.log("component is clicked",event);
  }
}
