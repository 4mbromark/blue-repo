import { Preference } from './../../../blue-utils/blue-object/preference/Preference';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  preference: BehaviorSubject<Preference> = new BehaviorSubject<Preference>(new Preference());

  constructor() { }

  getUserPreferences(): Observable<Preference> {
    return this.preference.asObservable();
  }
}
