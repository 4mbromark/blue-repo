import { LanguageTag } from './language-tag';
import { Injectable } from '@angular/core';
import { LanguageMatch } from '../blue-object/language/LanguageMatch';
import { LanguageMatchList } from './language-match-list';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  matchs = LanguageMatchList.MATCHS;
  language = LanguageTag.ITALIAN;

  constructor() { }

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
}


