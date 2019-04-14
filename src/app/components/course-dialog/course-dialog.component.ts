import { PopupService } from './../../services/popup/popup.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts/posts.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  userPostsToShow : IPost[] = [];
  subscription: Subscription;

  constructor(private popupService: PopupService, private postsService : PostsService) {
    this.subscription = this.popupService.getDataAsObservable().subscribe(response => {
        this.userPostsToShow = Object.keys(response).map(function(index) {
          let items = response[index];
          return items;
        })
    })     
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
