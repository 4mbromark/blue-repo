import { StorageService } from './storage.service';
import { User } from './../blue-object/User';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { RoutingUrl } from '../blue-routing/routing-url';
import { PermitService } from './permit.service';
import { Config } from '../blue-enum/word/config';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  username: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private permitService: PermitService,
    private storage: StorageService
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.manageUrl(event.url);
    });
  }

  manageUrl(url: string): void {
    this.permitService.setTopbarPermit(this.location.path().includes(this.storage.get(Config.LOCAL_STORAGE_USERNAME)));
    this.permitService.setSidebarPermit(
      this.location.path().includes(this.storage.get(Config.LOCAL_STORAGE_USERNAME)) &&
      !this.location.path().includes('/w/')
    );
  }

  /* */
  goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  navigate(url: string[]): void {
    url.unshift(this.storage.get(Config.LOCAL_STORAGE_USERNAME));
    this.router.navigate(url, { relativeTo: this.route });
  }
  navigateWindow(url: string): void {
    this.navigate(['w', url]);
  }
  navigateBack(): void {
    this.router.navigate(['../']);
  }

  goToLastPage(): void {
    let module = RoutingUrl.TASKLIST_MODULE;
    // TODO
    if (this.storage.get(Config.LOCAL_STORAGE_LASTMODULE)) {
      module = this.storage.get(Config.LOCAL_STORAGE_LASTMODULE);
    }

    let username = this.storage.get(Config.LOCAL_STORAGE_USERNAME);
    if (!username) {
      username = '';
    }

    this.router.navigate([username + '/', module]);

    this.storage.set(Config.LOCAL_STORAGE_LASTMODULE, module);
    // this.goTo(RoutingUrl.TASKLIST_MODULE);
  }

  getUrl(): string {
    return this.location.path();
  }

  reload(): void {
    window.location.reload();
  }
}
