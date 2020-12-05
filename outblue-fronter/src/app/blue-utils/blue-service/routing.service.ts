import { User } from './../blue-object/User';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { RoutingUrl } from '../blue-routing/routing-url';
import { PermitService } from './permit.service';
import { UserService } from './user.service';
import { Config } from '../blue-enum/word/config';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  username: string;

  constructor(private router: Router, private location: Location, private permitService: PermitService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.manageUrl(event.url);
    });
  }

  manageUrl(url: string): void {
    this.permitService.setAllFramePermitTo(!this.location.path().includes(RoutingUrl.LOGIN_PAGE));
  }

  /* */
  goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  goToLastPage(): void {
    let module = RoutingUrl.TASKLIST_MODULE;
    // TODO
    if (localStorage.getItem(Config.LOCAL_STORAGE_LASTMODULE)) {
      module = localStorage.getItem(Config.LOCAL_STORAGE_LASTMODULE);
    }

    this.router.navigate([localStorage.getItem(Config.LOCAL_STORAGE_USERNAME) + '/', module]);
    localStorage.setItem(Config.LOCAL_STORAGE_LASTMODULE, module);
    // this.goTo(RoutingUrl.TASKLIST_MODULE);
  }
}
