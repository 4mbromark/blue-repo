import { StorageService } from './storage.service';
// tslint:disable: object-literal-shorthand
import { LanguageService } from './language.service';
import { LanguageLabel } from './../blue-language/language-labels';
import { RoutingUrl } from './../blue-routing/routing-url';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from './auth/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Url } from '../blue-enum/url';
import { User } from '../blue-object/User';
import { RoutingService } from './routing.service';
import { Config } from '../blue-enum/word/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private title: Title,
    private http: HttpClient,
    private routingService: RoutingService,
    private authService: AuthenticationService,
    private languageService: LanguageService,
    private storage: StorageService
  ) {
    this.getUserFromStore();
    this.setTitle();
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  getUserByMailOrName(mailOrName: string, saveUser?: boolean): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.USERS_EXISTS_REST + mailOrName).subscribe(
        (user: User) => {
          if (saveUser) {
            this.user.next(user);
          }
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  login(pwd: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(Url.USERS_LOGIN_REST + this.user.value.id, { pwd: pwd }, { responseType: 'text' }).subscribe(
        (token: string) => {
          this.authService.authenticate(token);
          this.storeUser();
          this.routingService.reload();
          this.setTitle();
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  logout(): void {
    this.authService.invalidate();
    this.user.next(null);
    this.routingService.reload();
    this.setDefaultTitle();
    this.unstoreUser();
  }

  storeUser(): void  {
    this.storage.setUser(this.user.value);
    this.storage.set(Config.LOCAL_STORAGE_USERNAME, this.user.value.username);
  }
  unstoreUser(): void {
    this.storage.removeUser();
    this.storage.remove(Config.LOCAL_STORAGE_USERNAME);
  }
  getUserFromStore(): void {
    if (this.storage.getUser()) {
      this.user.next(this.storage.getUser());
    }
  }

  setTitle(): void {
    if (this.user.value) {
      this.title.setTitle(this.gbl(LanguageLabel.TITLE_CUSTOMIZED).replace(Config.NAME, this.user.value.name));
    }
  }
  setDefaultTitle(): void {
    this.title.setTitle(this.gbl(LanguageLabel.TITLE_STANDARD));
  }
}
