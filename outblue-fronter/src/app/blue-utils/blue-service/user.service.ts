import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Url } from '../blue-enum/url';
import { User } from '../blue-object/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  checkIfUserExistsByMailOrName(mailOrName: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.USERS_EXISTS_REST + mailOrName).subscribe(
        (user: User) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
