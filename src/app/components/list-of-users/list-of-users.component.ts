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
  public stockAvatar: string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  fileNameDialogRef: MatDialogRef<CourseDialogComponent>;

  constructor(
    private usersService: UsersService,
    private popupService: PopupService,
    private postsService: PostsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.usersService.get_users().subscribe(
      (res) => {
        this.users = res.body["users"];
        this.users.forEach(user => {
          if(user.avatar.length === 0) {
            user.avatar = this.stockAvatar;
          }

          if(user.username === sessionStorage.getItem('username')) {
            this.users.splice(this.users.indexOf(user), 1);
          }
        })
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
