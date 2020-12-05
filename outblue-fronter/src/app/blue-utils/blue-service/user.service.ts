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
    private languageService: LanguageService
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

  getUserByMailOrName(mailOrName: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.USERS_EXISTS_REST + mailOrName).subscribe(
        (user: User) => {
          this.user.next(user);
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
      this.http.post(Url.USERS_LOGIN_REST + this.user.value.id, { pwd: pwd }, { responseType: 'text' }).subscribe(
        (token: string) => {
          this.authService.authenticate(token);
          this.storeUser();
          this.routingService.goToLastPage();
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
    this.routingService.goTo(RoutingUrl.LOGIN_PAGE);
    this.setDefaultTitle();
    this.unstoreUser();
  }

  storeUser(): void  {
    localStorage.setItem(Config.LOCAL_STORAGE_USER, JSON.stringify(this.user.value));
    localStorage.setItem(Config.LOCAL_STORAGE_USERNAME, this.user.value.username);
  }

  unstoreUser(): void {
    localStorage.setItem(Config.LOCAL_STORAGE_USER, '');
    localStorage.setItem(Config.LOCAL_STORAGE_USERNAME, '');
  }

  getUserFromStore(): void {
    if (localStorage.getItem(Config.LOCAL_STORAGE_USER)) {
      this.user.next(JSON.parse(localStorage.getItem(Config.LOCAL_STORAGE_USER)));
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
