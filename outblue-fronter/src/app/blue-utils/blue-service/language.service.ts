import { LanguageTag } from './../blue-language/language-tag';
import { Injectable } from '@angular/core';
import { LanguageMatchList } from '../blue-language/language-match-list';
import { LanguageMatch } from '../blue-object/language/LanguageMatch';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  matchs = LanguageMatchList.MATCHS;
  language: string;

  constructor() {
    this.setLanguageByBrowserLanguage();
  }

  getByLanguage(label: string): string {
    const lab: LanguageMatch = this.getByLabel(label);
    return this.language === LanguageTag.ENGLISH ? lab.english : lab.italian;
  }

  getByLabel(label: string): LanguageMatch {
    for (const match of this.matchs) {
      if (match.label === label) {
        return match;
      }
    }
    return this.matchs[0];
  }

  getSelectedLanguage(): string {
    return this.language;
  }

  setLanguage(language: string): void {
    this.language = language;
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


