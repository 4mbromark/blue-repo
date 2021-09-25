import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './storage.service';
// tslint:disable: object-literal-shorthand
import { LanguageService } from './language.service';
import { LanguageLabel } from './../blue-language/language-labels';
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
    private translate: TranslateService,
    private storage: StorageService
  ) {}

  public getUser(): Observable<User> {
    return this.user.asObservable();
  }

  public setUser(user: User): void {
    this.user.next(user);
    this.setTitle();
  }

  public getUserByMailOrName(uid: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.post(Url.USER_EXISTS, { uid: uid }, { responseType: 'json' }).subscribe(
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

  public login(uid: string, pswd: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(Url.USER_AUTHENTICATE, { uid: uid, pswd: pswd }, { responseType: 'json' }).subscribe(
        (user: User) => {
          this.authService.authenticate(user.token);
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

  public logout(): void {
    this.authService.invalidate();
    this.unstoreUser();
    this.routingService.reload();
  }

  private storeUser(): void  {
    this.storage.set(Config.LOCAL_STORAGE_USERNAME, this.user.value.username);
  }
  private unstoreUser(): void {
    this.storage.remove(Config.LOCAL_STORAGE_USERNAME);
  }

  private setTitle(): void {
    this.translate.get(LanguageLabel.TITLE_CUSTOMIZED, {name: this.user.value.name}).subscribe((text: string) => {
      this.title.setTitle(text);
    });
  }
}
