import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Child, ChildData, WelcomeData } from './reddit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  url:string= "https://www.reddit.com"
  subUrl:string ="r/aww/"
  constructor(private http:HttpClient) { }

  getPosts():Observable<WelcomeData>{
    return this.http.get<WelcomeData>(this.url + this.subUrl + ".json");
  }

  returnPost(permalink:string){
    return this.http.get<ChildData>(this.url + permalink)
  }
}
