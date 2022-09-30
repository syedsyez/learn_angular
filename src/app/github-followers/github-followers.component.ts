import { Component, OnInit } from '@angular/core';
import { GithubFollowerService } from '../common/github-follower.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
 followers:any[]=[];
  constructor(private service:GithubFollowerService) { }

  ngOnInit(): void {
   this.service.getAll().subscribe(response=>{
    this.followers = (<[]>response);
    console.log(response);
   });
  }

}
