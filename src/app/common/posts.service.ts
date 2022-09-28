import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './dataservice.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService{
   
  constructor(http:HttpClient) { 
    super("https://jsonplaceholder.typicode.com/posts",http);
  }

}
