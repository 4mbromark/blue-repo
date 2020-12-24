import { StorageService } from './storage.service';
import { PreferenceService } from './preference.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from './../blue-enum/word/config';
import { LanguageTag } from './../blue-language/language-tag';
import { Injectable } from '@angular/core';
import { LanguageMatchList } from '../blue-language/language-match-list';
import { LanguageMatch } from '../blue-object/language/LanguageMatch';
import { Preference } from '../blue-object/preference/Preference';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  matchs = LanguageMatchList.MATCHS;

  language: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private prefereceService: PreferenceService,
    private storage: StorageService
  ) {
    if (this.storage.get(Config.LOCAL_STORAGE_LANGUAGE)) {
      this.setLanguageByStorageLanguage();
    } else {
      this.prefereceService.getPreference().subscribe((preference: Preference) => {
        if (preference.language) {
          this.setLanguage(preference.language);
        } else {
          this.setLanguageByBrowserLanguage();
        }
      });
    }
  }

  getByLanguage(label: string, force?: string): string {
    const lab: LanguageMatch = this.getByLabel(label);
    let language = this.language.value;
    if (force) {
      language = force;
    }
    switch (language) {
      case LanguageTag.ENGLISH: {
        return lab.english;
      }
      case LanguageTag.ITALIAN: {
        return lab.italian;
      }
    }
  }

  getByLabel(label: string): LanguageMatch {
    const text = this.matchs.find(match => match.label === label);
    if (text) {
      return text;
    }
    /*for (const match of this.matchs) {
      if (match.label === label) {
        return match;
      }
    }*/
    return this.matchs[0];
  }

  getLanguage(): Observable<string> {
    return this.language.asObservable();
  }

  setLanguage(language: string): void {
    this.language.next(language);
    this.storage.set(Config.LOCAL_STORAGE_LANGUAGE, language);
  }
  setLanguageByStorageLanguage(): void {
    this.language.next(this.storage.get(Config.LOCAL_STORAGE_LANGUAGE));
  }
  setLanguageByBrowserLanguage(): void {
    const bl = navigator.language.toLowerCase();
    if (bl.includes('it')) {
      this.setLanguage(LanguageTag.ITALIAN);
      return;
    }
    this.setLanguage(LanguageTag.ENGLISH);
  }
}


