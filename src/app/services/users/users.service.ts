import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private httpClient : HttpClient, private loginService: LoginService) {}

  get_users() {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users', {
      observe: 'response',
      headers: this.loginService.headers
    });
  }

  getPostsByUsername(username: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users/' + `${username}` + '/posts', {
      headers: this.loginService.headers
    });
  }

  getCurrentUserInfo() {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users/' + sessionStorage.getItem('username'), {
      observe: 'response',
      headers: this.loginService.tokenHeaders
    });
  }

  patchProfilePicture(formData: FormData) {
    return this.httpClient.patch(localStorage.getItem('baseURL') + '/users/' + sessionStorage.getItem('username'), formData, {
      observe: 'response',
      headers: this.loginService.tokenFormDataHeaders
    });
  }
}
