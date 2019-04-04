import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/models/user';
import { UsersService } from './../../services/users/users.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseDialogComponent } from './../course-dialog/course-dialog.component';
import { PopupService } from 'src/app/services/popup/popup.service';
import { PostsService } from 'src/app/services/posts/posts.service';
import { IPost } from './../../models/post';



@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  public users: IUser[] = [];
  fileNameDialogRef: MatDialogRef<CourseDialogComponent>;

  constructor(
    private usersService: UsersService,
    private popupService: PopupService,
    private postsService: PostsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.usersService.get_users().subscribe(
      (res: IUser[]) => {
        this.users = res;
      }
    )
  }

  openDialog(userId) {
    this.postsService.getPostsByUserId(userId).subscribe(
      (res: IPost[]) => {
        this.popupService.sendData(res);
        console.log(res);
      }
    )
    this.fileNameDialogRef = this.dialog.open(CourseDialogComponent, {

    });
  }

}
