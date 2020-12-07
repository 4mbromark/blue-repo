import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Config } from '../../blue-enum/word/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private jwt: JwtHelperService,
    private storage: StorageService
  ) { }

  isAuthenticated(): boolean {
    const token = this.storage.get(Config.LOCAL_STORAGE_TOKEN);
    if (token) {
      return !this.jwt.isTokenExpired(token);
    }
    return false;
  }

  authenticate(token: string): void {
    this.storage.set(Config.LOCAL_STORAGE_TOKEN, token);
  }

  invalidate(): void {
    this.storage.remove(Config.LOCAL_STORAGE_TOKEN);
  }
}
