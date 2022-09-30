import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../common/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[]=[];
  url='https://jsonplaceholder.typicode.com/posts';
  constructor(private service:PostsService) { 
  }

  sendPost(input:HTMLInputElement){
   let post={title:input.value};
  // this.posts.splice(0,0,post);
  this.posts.unshift(post);
   
   input.value="";
   console.log(post);
    this.service.create(post)
    .subscribe(response=>{
      console.log(response);
    },
    error =>{
      alert('Something went wrong with network');
    }
    );

  }

  ngOnInit(): void {
    console.log("Post Init is called");
    this.service.getAll()
    .subscribe(response=>{
      this.posts = (<[]>response);
      console.log(this.posts);
    });
  }

  updatePost(post:any){
    let id = post.id;
    
    this.service.update(id,post)
    .subscribe(response=>{
      console.log(response);
    });
  }
  deletePost(post:any){
    let id = post.id;
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(id)
    .subscribe(response =>{
      console.log(response);
      
    });
  }

}
