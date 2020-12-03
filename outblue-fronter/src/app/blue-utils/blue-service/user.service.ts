import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Url } from '../blue-enum/url';
import { User } from '../blue-object/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private title: Title, private http: HttpClient) {}

  getUser(): User {
    return this.user;
  }

  getUserByMailOrName(mailOrName: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.USERS_EXISTS_REST + mailOrName).subscribe(
        (user: User) => {
          this.user = user;
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  login(pwd: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.head(Url.USERS_LOGIN_REST + this.user.id + '/' + pwd).subscribe(
        () => {
          resolve();
        },
        () => {
          reject();
        }
      );
    });
  }

  setTitle(): void {
    this.title.setTitle('');
  }
}
