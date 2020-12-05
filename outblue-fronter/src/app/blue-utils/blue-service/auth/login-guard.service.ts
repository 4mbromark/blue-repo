import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RoutingService } from '../routing.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private routingService: RoutingService) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.routingService.goToLastPage();
      return false;
    }
    return true;
  }

}
