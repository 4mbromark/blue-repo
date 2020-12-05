import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Config } from '../../blue-enum/word/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private jwt: JwtHelperService) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(Config.LOCAL_STORAGE_TOKEN);
    if (token) {
      return !this.jwt.isTokenExpired(token);
    }
    return false;
  }

  authenticate(token: string): void {
    localStorage.setItem(Config.LOCAL_STORAGE_TOKEN, token);
  }

  invalidate(): void {
    localStorage.setItem(Config.LOCAL_STORAGE_TOKEN, '');
  }
}
