import { Component, OnInit } from '@angular/core';
import { PasswordRecoveryService } from 'src/app/services/passwordRecovery/password-recovery.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  public username: string;
  public email: string;

  constructor(private passwordRecoveryService: PasswordRecoveryService,
    private navbarService: NavbarService) { 
      this.navbarService.hide();
    }

  ngOnInit() {
  }

  recoverPassword() {
    let recoveryCredentials = {
      "username": this.username,
      "mail": this.email
    }

    this.passwordRecoveryService.postRecoveryRequest(recoveryCredentials).subscribe(res => {
      console.log(res.status);
    })
  }

}
