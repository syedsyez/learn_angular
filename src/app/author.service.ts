import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors:string[]=[];
  constructor() { }

  getAuthorList(){
   this.authors=['author3','author4','author5'];
   return this.authors;
  }

}
