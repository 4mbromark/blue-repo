import { RoutingUrl } from 'src/app/blue-utils/blue-routing/routing-url';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';
import { SessionPreference } from './../blue-object/preference/SessionPreference';
import { Injectable } from '@angular/core';
import { PreferenceService } from './preference.service';
import { Preferences } from '../blue-object/preference/Preferences';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private localPreference: SessionPreference;

  constructor(
    private routingService: RoutingService,
    private preferenceService: PreferenceService
  ) {
    this.preferenceService.getPreference().subscribe((preferences: Preferences) => {
      this.localPreference = preferences.session;
    });
  }

  public loadLastSession(): void {
    this.routingService.goToModule(this.localPreference.module);
  }

  public getLastProject(): number {
    return this.localPreference.project;
  }

  public updateLastModule(module: RoutingUrl): void {
    const session = this.localPreference;
    if (session.module !== module) {
      session.module = module;
      this.updateSessionPreference(session);
    }
  }

  public updateLastProject(project: number): void {
    const session = this.localPreference;
    if (session.project !== project) {
      session.project = project;
      this.updateSessionPreference(session);
    }
  }

  private updateSessionPreference(session: SessionPreference): void {
    this.preferenceService.updateSessionPreference(session);
  }
}
