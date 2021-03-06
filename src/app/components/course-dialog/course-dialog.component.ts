import { PopupService } from './../../services/popup/popup.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  userPostsToShow : IPost[] = [];

  constructor(private popupService: PopupService) {
    this.popupService.getDataAsObservable().subscribe(response => {
        this.userPostsToShow = response['posts'];
    })     
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
