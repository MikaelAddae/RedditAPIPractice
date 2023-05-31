import { Component } from '@angular/core';
import { RedditApiService } from './reddit-api.service';
import { Child, ChildData, WelcomeData } from './reddit';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedditLab';
  redditPage:Child []=[];
  pagePosts:ChildData [] = [];
  selectedPost: ChildData = {} as ChildData;

  
  
  

  constructor(private post:RedditApiService){  

  }

  

  getAllPosts(){
    this.post.getPosts().subscribe( (result)=>{
      
      this.redditPage = result.children;

        
      });
    }

    showAllPosts(){

      this.redditPage.forEach (item => {
        
        this.pagePosts.push(item.data);
        
      });
    }

  

  getSinglePost(permalink:string){
    this.post.returnPost(permalink).subscribe( (result) =>{
      this.selectedPost = result;
    })
  }

}



