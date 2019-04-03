import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/models/user';
import { UsersService } from './../../services/users/users.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseDialogComponent } from './../course-dialog/course-dialog.component';
import { PopupService } from 'src/app/services/popup/popup.service';


@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  private users : IUser[] = [];
  private userId: number;
  fileNameDialogRef: MatDialogRef<CourseDialogComponent>;

  constructor(private usersService: UsersService, private popupService: PopupService, private dialog: MatDialog) { }

  ngOnInit() {
    this.usersService.get_users().subscribe(
      (res: IUser[]) => {
        this.users = res;
      }
    )
  }

  openDialog(userId) {
    this.popupService.setUserPosts(userId)
    this.fileNameDialogRef = this.dialog.open(CourseDialogComponent, {
      
    });
  }

}
