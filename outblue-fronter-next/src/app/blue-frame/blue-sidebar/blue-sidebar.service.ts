import { SessionService } from './../../blue-utils/blue-service/session.service';
import { RoutingUrl } from 'src/app/blue-utils/blue-routing/routing-url';
import { SidebarPreference } from './../../blue-utils/blue-object/preference/SidebarPreference';
import { PreferenceService } from './../../blue-utils/blue-service/preference.service';
import { Preferences } from '../../blue-utils/blue-object/preference/Preferences';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  localPreference: BehaviorSubject<SidebarPreference> = new BehaviorSubject<SidebarPreference>(new SidebarPreference());

  constructor(
    private sessionService: SessionService,
    private preferenceService: PreferenceService
  ) {
    this.preferenceService.getPreference().subscribe((preferences: Preferences) => {
      this.localPreference.next(preferences.sidebar);
    });
  }

  public getSidebarPreference(): Observable<SidebarPreference> {
    return this.localPreference.asObservable();
  }

  public setLeftbarOpened(opened?: boolean): void {
    const sidebar = this.localPreference.value;
    let o = sidebar.opened;
    o = opened === undefined ? !o : opened;
    sidebar.opened = o;
    this.updateSidebarPreference(sidebar);
  }

  public setLeftbarExtended(extended?: boolean): void {
    const sidebar = this.localPreference.value;
    let e = sidebar.extended;
    e = extended === undefined ? !e : extended;
    sidebar.extended = e;
    this.updateSidebarPreference(sidebar);
  }

  public updateLastModule(module: RoutingUrl): void {
    this.sessionService.updateLastModule(module);
  }

  private updateSidebarPreference(sidebar: SidebarPreference): void {
    this.preferenceService.updateSidebarPreference(sidebar);
  }
}
