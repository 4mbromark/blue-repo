import { Config } from './../../blue-enum/word/config';
import { User } from './../../blue-object/User';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '../storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  public isAuthenticated(): Promise<User> {
    const token = this.storage.get(Config.LOCAL_STORAGE_TOKEN);
    return new Promise((resolve, reject) => {
      if (!token) {
        reject();
        return;
      }
      this.http.post(Url.USER_VERIFY, { tk: token }, { responseType: 'json' }).subscribe(
        (user: User) => {
          resolve(user);
        },
        (error: HttpErrorResponse) => {
          this.invalidate();
          reject(error);
        }
      );
    });
  }

  public authenticate(token: string): void {
    this.storage.set(Config.LOCAL_STORAGE_TOKEN, token);
  }

  public invalidate(): void {
    this.storage.remove(Config.LOCAL_STORAGE_TOKEN);
  }
}
