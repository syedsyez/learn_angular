import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthorService } from '../author.service';
import { User } from '../User.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors:string[]=[];
  title = " List of Authors";
  toggle = false;
  @Input('name')
  user=new User();
  @Input('nameAttr')
  nameAttribute?:String;
  @Output()
  change:EventEmitter<any>=new EventEmitter();
 
  nameText:string="initial value";  
  constructor(service:AuthorService) { 
    this.authors=service.getAuthorList();
  }

  changeOnClick(){
    this.toggle = !this.toggle;
    this.change.emit(this.toggle);
  }

  ngOnInit(): void {
  }

}
