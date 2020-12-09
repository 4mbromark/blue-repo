import { Url } from './../../blue-enum/url';
import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Config } from '../../blue-enum/word/config';
import { Project } from '../../blue-object/record/Project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private jwt: JwtHelperService,
    private http: HttpClient,
    private storage: StorageService
  ) { }

  isAuthenticated(): boolean {
    const token = this.storage.get(Config.LOCAL_STORAGE_TOKEN);
    // return new Promise((resolve, reject) => {
    if (token) {
      //    this.verify(token).then(() => {
      //      resolve(!this.jwt.isTokenExpired(token));
      //    });
      //  } else {
      //    reject(false);
      // }
      // });
      return !this.jwt.isTokenExpired(token);
    }

    return false;
  }

  verify(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(Url.USERS_VERIFY_REST, { token: token }, { responseType: 'text' }).subscribe(
        (auth: any) => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  authenticate(token: string): void {
    this.storage.set(Config.LOCAL_STORAGE_TOKEN, token);
  }

  invalidate(): void {
    this.storage.remove(Config.LOCAL_STORAGE_TOKEN);
  }
}
