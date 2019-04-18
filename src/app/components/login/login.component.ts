import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { EncrDecrService } from 'src/app/services/EncrDecr/encr-decr.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide: boolean;
  public username: string;
  public password: string;
  public message : string;


  constructor(
    private encrDecrService: EncrDecrService, 
    private loginServce: LoginService,
    private navbarService: NavbarService,
    private router: Router) {
      this.navbarService.hide();
    }

  ngOnInit() {
    this.hide = true;
  }

  public toggleHide() {
    this.hide = !this.hide;
  }

  public savePass(event) {
    event.stopPropagation();
  }

  public login() {
    let hashedCredentials = this.encrDecrService.set(this.password);

    this.loginServce.checkForHash(hashedCredentials, this.username).subscribe(res => {
      if(res.status === 200) {
        sessionStorage.setItem('token', res.body['token']);
        this.router.navigate(["/home"]);
      } else if (res.status === 401 ) {
        console.log(res.status);
        alert("Invalid Credentials");
      } else {
        console.log(res.status);
        alert("Something went wrong. Please try again!");
      }
      
    })
  }
}
