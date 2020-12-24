import { ProjectNamePreference } from 'src/app/blue-utils/blue-object/preference/ProjectNamePreference';
import { BehaviorSubject, Observable } from 'rxjs';
import { Preference } from './../blue-object/preference/Preference';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../blue-enum/url';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  fakePreference: Preference = {
    language: '',
    sidebar: {
      extended: false,
    },
    projects: {
      name: {
        switch: {
          type: 'EXTENDED',
          toUpperCase: true,
          showFather: true,
          fatherSeparator: null,
          fatherType: 'NORMAL',
          fatherToUpperCase: true
        },
        context: {
          type: 'PERSONALIZED',
          toUpperCase: true,
          showFather: true,
          fatherSeparator: null,
          fatherType: 'NORMAL',
          fatherToUpperCase: false
        },
        table: {
          type: 'NORMAL',
          toUpperCase: false,
          showFather: false,
          fatherSeparator: null,
          fatherType: null,
          fatherToUpperCase: false
        },
        chip: {
          type: 'NORMAL',
          toUpperCase: true,
          showFather: true,
          fatherSeparator: null,
          fatherType: 'REDUCED',
          fatherToUpperCase: true
        },
      },
      switch: {
        allSuper: false,
        allSub: false
      }
    }
  };

  fake2 = new Preference();

  preference: BehaviorSubject<Preference> = new BehaviorSubject<Preference>(new Preference());

  constructor(private http: HttpClient) {
    this.preference.next(this.fakePreference);
  }

  getPreference(): Observable<Preference> {
    return this.preference.asObservable();
  }

  loadPreference(): Promise<void> {
    this.preference.next(this.fakePreference);
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
  savePreference(): Promise<void> {
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
