import { Injectable } from '@angular/core';

import { IPost } from 'src/app/models/post';
import { PostsService } from './../posts/posts.service';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  userPosts: IPost[] = [];

  constructor(private postsService: PostsService) { }

  public setUserPosts(userId: number) {
    this.postsService.getPostsByUserId(userId).subscribe(
      (res: IPost[]) => {
        this.userPosts = res;
      }
    )

    console.log(this.userPosts)
  }

  public getUserPosts(): any {
    const postsObservable = new Observable(observer => {
        observer.next(this.userPosts);
    });
    
    return postsObservable;
  }
}
