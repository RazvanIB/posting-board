import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { PostsService } from '../../services/posts/posts.service';
import { IPost } from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private posts : IPost[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPostsByUserId(2).subscribe(
      (res: IPost[]) => {
        console.log(res);
        this.posts = res;
      }
    )
  }

  public deletePost(id): void {
    this.posts.forEach(element => {
      if(element.id == id) {
        this.posts.splice(this.posts.indexOf(element), 1);
      }
    });
  }

}
