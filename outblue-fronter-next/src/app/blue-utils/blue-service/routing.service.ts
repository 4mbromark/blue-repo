import { RoutingUrl } from 'src/app/blue-utils/blue-routing/routing-url';
import { Preferences } from './../blue-object/preference/Preferences';
import { PreferenceService } from './preference.service';
import { StorageService } from './storage.service';
import { User } from './../blue-object/User';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { PermitService } from './permit.service';
import { Config } from '../blue-enum/word/config';
import { SessionPreference } from '../blue-object/preference/SessionPreference';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  username: string;

  localPreference: SessionPreference;

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
    const permits = this.location.path().includes(this.storage.get(Config.LOCAL_STORAGE_USERNAME));
    this.permitService.setTopbarPermit(permits);
    this.permitService.setSidebarPermit(permits);
  }

  /* */
  goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  navigate(url: string[]): void {
    url.unshift(this.storage.get(Config.LOCAL_STORAGE_USERNAME));
    this.router.navigate(url, { relativeTo: this.route });
  }
  navigateBack(): void {
    this.router.navigate(['../']);
  }

  goToModule(module: RoutingUrl): void {
    const username = this.storage.get(Config.LOCAL_STORAGE_USERNAME) || '';
    this.router.navigate([username + '/', module]);
  }

  getUrl(): string {
    return this.location.path();
  }

  reload(): void {
    window.location.reload();
  }
}
