import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { EncrDecrService } from 'src/app/services/EncrDecr/encr-decr.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  public hide: boolean;
  public username: string;
  public password: string;
  public confirmPassword: string;
  public email: string;


  signup() {
    if(this.password !== this.confirmPassword) {
      alert("Password mismatch. Try again!");
    } else {
      let userToCreate = {
        username: this.username,
        password: this.encrDecrService.set(this.password),
        mail: this.email
      }

      console.log(userToCreate);
      this.loginService.registerNewUser(userToCreate).subscribe(res => {
        console.log(res);
      })
    }
  }

  constructor(private encrDecrService: EncrDecrService, 
    private loginService: LoginService,
    private navbarService: NavbarService) { 
      this.navbarService.hide();
    }

  ngOnInit() {
    this.hide = true;
  }

}
