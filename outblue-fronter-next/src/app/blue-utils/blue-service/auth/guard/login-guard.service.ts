import { SessionService } from './../../session.service';
import { PreferenceService } from './../../preference.service';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { Injectable } from '@angular/core';
import { RoutingService } from '../../routing.service';
import { AuthenticationService } from '../authentication.service';
import { RoutingUrl } from 'src/app/blue-utils/blue-routing/routing-url';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(
    private authService: AuthenticationService,
    private sessionService: SessionService
  ) { }

  canActivate(): any {
    return new Promise((resolve) => {
      this.authService.isAuthenticated().then(() => {
        this.sessionService.loadLastSession();
        resolve(false);
      }).catch(() => {
        resolve(true);
      });
    });
  }
}
