import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  http: any;
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'https://api.github.com/users'
  }

  getAllUsers(since) {
    return this.http.get(this.baseUrl + "?since=" + since)
      .map(res => res);
  }

  getUser(login) {
    return this.http.get(this.baseUrl + "/" + login)
      .map(res => res);
  }

}
