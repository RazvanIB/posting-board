import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  
  selectedFile: File = null;
  public currentUserData: any;
  public avatarPhoto: any;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  uploadProfilePhoto() {
    if(this.selectedFile === null) {
      alert("Please upload a picture first!");
    } else {
      const formData: FormData = new FormData();
      formData.append('avatar', this.selectedFile, this.selectedFile.name);

      this.userService.patchProfilePicture(formData).subscribe(res => {
        console.log(res);
      })
    }
  }


  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.userService.getCurrentUserInfo().subscribe(res => {
      this.currentUserData = res.body['user'];
      this.avatarPhoto = this.currentUserData.avatar;
    })
  }
  
  

}
