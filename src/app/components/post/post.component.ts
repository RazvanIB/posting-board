import { Component, OnInit, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { PostsService } from '../../services/posts/posts.service';
import { IPost } from '../../models/post';
import { ILanguage } from 'src/app/models/language';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() posts: IPost[];
  public analyzedPosts: number[] = [];
  
  public translatedPost: any;
  public selected: any;
  public locationLink: string;
  public analysis: any;
  public showAnalysis: boolean = false;
  public showDeleteButton: boolean;
  public current_username: string;

  languages: ILanguage[] = [
    {value: 'RO', viewValue: 'Romanian'},
    {value: 'EN', viewValue: 'English, American'},
    {value: 'FR', viewValue: 'French'},
    {value: 'DE', viewValue: 'German'},
    {value: 'EL', viewValue: 'Greek'},
    {value: 'HU', viewValue: 'Hungarian'},
    {value: 'IT', viewValue: 'Italian'},
    {value: 'JA', viewValue: 'Japanese'},
    {value: 'KO', viewValue: 'Korean'},
    {value: 'PL', viewValue: 'Polish'},
    {value: 'PT', viewValue: 'Portuguese'},
    {value: 'RU', viewValue: 'Russian'},
    {value: 'ES', viewValue: 'Spanish'},
  ]

  constructor(private postsService: PostsService,
    private navbarService: NavbarService) { 
      this.navbarService.show();
    }

  ngOnInit() {

    if(sessionStorage.getItem("username") === sessionStorage.getItem("username_requested")) {
      this.showDeleteButton = true;
    } else {
      this.showDeleteButton = false;
    }

  }

  public translate(postId: number) {
    this.postsService.getPostTranslation(this.selected, postId).subscribe(res => {
      console.log(res);
      this.posts.forEach(post => {
        if(post.id == postId) {
          this.translatedPost = res.body['translated'];
          post.title = this.translatedPost.title;
          post.description = this.translatedPost.description;
        }
      });
    })
  }

  public locate(postId: number) {
    this.postsService.getImageLocation(postId, 14, 300, 300).subscribe(res => {
      this.locationLink = res.body['location'];
      this.posts.forEach(post => {
        if(post.id == postId) {
          post.link = this.locationLink;
        }
      })
    })
  }

  public analyze(postId: number) {
    this.postsService.getPostAnalysis(postId).subscribe(res => {
      this.analysis = res.body['analyzed'];
      this.analyzedPosts.push(postId);

      this.showAnalysis = true;
    })
  }

  public deletePost(id): void {
    this.posts.forEach(element => {
      if(element.id == id) {
        this.postsService.deletePostByPostId(element.id).subscribe(res => {
          if(res.status == 200) {
            this.posts.splice(this.posts.indexOf(element), 1);
          } else {
            console.log(res.status);
          }
        });
      }
    });
  }


}
