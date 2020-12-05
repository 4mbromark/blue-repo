import { RoutingUrl } from '../../blue-routing/routing-url';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { RoutingService } from '../routing.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private routingService: RoutingService) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.routingService.goTo(RoutingUrl.LOGIN_PAGE);
      return false;
    }
    return true;
  }

}
