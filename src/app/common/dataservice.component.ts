import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class DataService {
  
  constructor(private url:string,private http:HttpClient) { }

   getAll(){
    return this.http.get(this.url);
   }

   create(resource:any){
    return this.http.post(this.url,resource);
   }

   update(id:any ,resource:any){
    return this.http.put(this.url+"/"+resource.id,resource);
   }

   delete(id:any){
    return this.http.delete(this.url+"/"+id);
   }

}
