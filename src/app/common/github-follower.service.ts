import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './dataservice.component';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowerService extends DataService{

  constructor(http:HttpClient) { 
    super('https://api.github.com/users/syedsyez/followers',http);
  }
}
