import { ICommentWithId } from './../../models/commentWithId';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Component, OnInit, Input } from '@angular/core';
import { IComment } from 'src/app/models/comment';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comments: IComment[];
  @Input() post: IPost;
  public showDeleteButton: boolean = false;

  constructor(private postsService: PostsService) {
    if (sessionStorage.getItem("username") == sessionStorage.getItem("username_requested"))  {
      this.showDeleteButton = true;
    }
  }

  ngOnInit() {
  }

  public logCom(comment: IComment) {
    console.log(comment)
  }

  public deleteComment(comment: ICommentWithId) {
    let index = this.comments.indexOf(comment);
    this.comments.splice(index, 1);
    this.postsService.deleteCommentById(this.post.id, comment.id).subscribe(res => {
      console.log(res);
    })
  }

}
