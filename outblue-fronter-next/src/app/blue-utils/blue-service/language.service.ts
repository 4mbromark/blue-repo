import { StorageService } from './storage.service';
import { PreferenceService } from './preference.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from './../blue-enum/word/config';
import { LanguageTag } from './../blue-language/language-tag';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private prefereceService: PreferenceService,
    private storage: StorageService
  ) {
    /* if (this.storage.get(Config.LOCAL_STORAGE_LANGUAGE)) {
      this.setLanguageByStorageLanguage();
    } else {
      this.prefereceService.getPreference().subscribe((preference: Preference) => {
        if (preference.language) {
          this.setLanguage(preference.language);
        } else {
          this.setLanguageByBrowserLanguage();
        }
      });
    } */
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


