import { Injectable } from '@angular/core';

import { IPost } from 'src/app/models/post';
import { PostsService } from './../posts/posts.service';

import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  userPosts: IPost[] = [];
  private subject = new Subject<any>();

  constructor(private postsService: PostsService) { }

  getDataAsObservable() : Observable<any> {
    return this.subject.asObservable();
  }
  
  sendData(data) {
    this.subject.next(data);
  }

}
