import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { PostsService } from '../../services/posts/posts.service';
import { IPost } from '../../models/post';
import { ILanguage } from 'src/app/models/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts : IPost[] = [];
  public showPosts: boolean;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    sessionStorage.setItem("username_requested", sessionStorage.getItem("username"));

    this.postsService.get_posts().subscribe(
      (res: IPost[]) => {
        if(res) {
          this.posts = res['posts'];
          this.showPosts = true;
        }  else {
          this.showPosts = false;
        }
      }
    )
  }

}
