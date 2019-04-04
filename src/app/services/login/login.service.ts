import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "https://cloud-homework-3-backend.appspot.com/users/login";

  constructor(private httpClient: HttpClient) { }



  checkForHash(hashed, username) {

    let hashObj = {
      "username": username,
      "password": hashed
    }

    console.log(JSON.stringify(hashObj));

    let headers = new HttpHeaders();
    
    headers.append('Content-Type', 'application/json');
    headers.append('backend-api-key', "Tc9kpo1pAl1zzi1cfTknQ0aiW2LTckTMdeGAORSasl3cEzQvMe"); 

    return this.httpClient.post(this.baseURL, JSON.stringify(hashObj), {
      observe: 'response',
      headers: headers
    });
  }
}
