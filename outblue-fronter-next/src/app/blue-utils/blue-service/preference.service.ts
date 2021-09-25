import { Project } from './../blue-object/record/Project';
import { TablePreference } from './../blue-object/preference/TablePreference';
import { SessionPreference } from './../blue-object/preference/SessionPreference';
import { RoutingUrl } from './../blue-routing/routing-url';
import { Preferences } from './../blue-object/preference/Preferences';
import { Config } from './../blue-enum/word/config';
import { StorageService } from './storage.service';
import { UserService } from './user.service';
import { SidebarPreference } from './../blue-object/preference/SidebarPreference';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Url } from '../blue-enum/url';
import { Preference } from '../blue-object/preference/Preference';
import { User } from '../blue-object/User';
import { filter } from 'rxjs/operators';
import { isNonNull, toNumber } from '../blue-utils';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  private standard: Preferences = {
    session: {
      module: RoutingUrl.ADMIN_MODULE,
      project: null
    },
    sidebar: {
      opened: true,
      extended: false,
    },
    table: {
      state: {
        projects: [],
        tasks: []
      }
    }
  };

  private local: Preferences = JSON.parse(localStorage.getItem(Config.LOCAL_STORAGE_PREFERENCE)) || null;

  private preferences: BehaviorSubject<Preferences> = new BehaviorSubject<Preferences>(this.local || this.standard);

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private storage: StorageService
  ) {
    this.userService.getUser().pipe(filter(isNonNull)).subscribe((user: User) => {
      const last = this.storage.get(Config.LOCAL_STORAGE_PREFERENCE_USER);
      if (!this.local || this.local && toNumber(last) !== user.id) {
        this.loadPreference();
      }
    });
  }

  public getPreference(): Observable<Preferences> {
    return this.preferences.asObservable();
  }

  public loadPreference(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.PREFERENCE_GET, { responseType: 'json' }).subscribe(
        (preference: Preference) => {
          const preferences = JSON.parse(preference.preferences);
          this.setPreference(preferences);
          this.storePreference(preferences, preference.idUser);
          resolve();
        },
        (error: HttpErrorResponse) => {
          this.setPreference(this.standard);
          reject(error);
        }
      );
    });
  }
  public savePreference(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(Url.PREFERENCE_UPDATE, { preferences: this.preferences.value }, { responseType: 'json' }).subscribe(
        () => {
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  private setPreference(preferences: Preferences): void {
    this.preferences.next(preferences);
  }

  public updateSessionPreference(session: SessionPreference): void {
    const preferences = this.preferences.value;
    preferences.session = session;
    this.updatePreference(preferences);
  }

  public updateSidebarPreference(sidebar: SidebarPreference): void {
    const preferences = this.preferences.value;
    preferences.sidebar = sidebar;
    this.updatePreference(preferences);
  }

  public updateTablePreference(table: TablePreference): void {
    const preferences = this.preferences.value;
    preferences.table = table;
    this.updatePreference(preferences);
  }

  private updatePreference(preferences: Preferences): void {
    this.setPreference(preferences);
    this.savePreference().then(() => {
      this.storePreference(preferences);
    });
  }

  private storePreference(preferences: Preferences, idUser?: number): void {
    this.storage.setObject(Config.LOCAL_STORAGE_PREFERENCE, preferences);
    if (idUser) {
      this.storage.set(Config.LOCAL_STORAGE_PREFERENCE_USER, idUser.toString());
    }
  }
}
