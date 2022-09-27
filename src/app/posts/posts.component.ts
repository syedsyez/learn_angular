import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[]=[];
  url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { 
  }

  sendPost(input:HTMLInputElement){
   let post={title:input.value};
  // this.posts.splice(0,0,post);
  this.posts.unshift(post);
   
   input.value="";
   console.log(post);
    this.http.post(this.url,post)
    .subscribe(response=>{
      console.log(response);
    },
    error =>{
      alert('Something went wrong with network');
    }
    );

  }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(response=>{
      this.posts = (<[]>response);
      console.log(this.posts);
    });
  }

}
