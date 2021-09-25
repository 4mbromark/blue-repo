import { User } from './../../../blue-object/User';
import { AuthenticationService } from '../authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../../user.service';
import { RoutingService } from '../../routing.service';
import { RoutingUrl } from 'src/app/blue-utils/blue-routing/routing-url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private routingService: RoutingService
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.isAuthenticated().then((user: User) => {
        this.userService.setUser(user);
        resolve(true);
      }).catch(() => {
        this.routingService.goTo(RoutingUrl.LOGIN_PAGE);
        resolve(false);
      });
    });
  }
}
