import { LoginService } from './../login/login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  public postRecoveryRequest(recoveryCredentials) {
    return this.httpClient.post(localStorage.getItem('baseURL') + '/users/recover', recoveryCredentials, {
      observe: 'response',
      headers: this.loginService.headers
    })
  }
}
