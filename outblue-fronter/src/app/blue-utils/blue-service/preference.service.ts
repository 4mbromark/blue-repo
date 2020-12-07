import { BehaviorSubject, Observable } from 'rxjs';
import { Preference } from './../blue-object/preference/Preference';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../blue-enum/url';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  preference: BehaviorSubject<Preference> = new BehaviorSubject<Preference>(new Preference());

  constructor(private http: HttpClient) { }

  getPreference(): Observable<Preference> {
    return this.preference.asObservable();
  }

  loadPreference(): Promise<Preference> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.PREFERENCE_LOAD_REST).subscribe(
        (preference: Preference) => {
          this.preference.next(preference);
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  savePreference(): Promise<Preference> {
    return new Promise((resolve, reject) => {
      this.http.post(Url.PREFERENCE_SAVE_REST, this.preference.value).subscribe(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
