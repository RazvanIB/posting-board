import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public headers: any = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('backend-api-key', localStorage.getItem('apiKey'));

  public tokenHeaders: any = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('backend-api-key', localStorage.getItem('apiKey'))
    .set('token', sessionStorage.getItem('token'));

  public tokenFormDataHeaders: any = new HttpHeaders()
    // .set('Content-Type', 'multipart/form-data')
    .set('backend-api-key', localStorage.getItem('apiKey'))
    .set('token', sessionStorage.getItem('token'));

  constructor(private httpClient: HttpClient) { }

  checkForHash(hashed, username) {

    let hashObj = {
      "username": username,
      "password": hashed
    }

    sessionStorage.setItem('username', username);
    localStorage.setItem('apiKey', "Tc9kpo1pAl1zzi1cfTknQ0aiW2LTckTMdeGAORSasl3cEzQvMe");
    localStorage.setItem('baseURL', "https://cloud-homework-3-backend.appspot.com");

    return this.httpClient.post(localStorage.getItem('baseURL') + "/users/login", JSON.stringify(hashObj), {
      observe: 'response',
      headers: this.headers
    });
  }

  registerNewUser(user: any) {
    return this.httpClient.post(localStorage.getItem('baseURL') + '/users/register', JSON.stringify(user), {
      observe: 'response',
      headers: this.headers
    }) 
  }
}
