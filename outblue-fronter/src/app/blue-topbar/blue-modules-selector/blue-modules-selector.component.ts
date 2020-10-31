import { LanguageLabels, LanguageService } from './../../blue-language.service';
import { Component } from '@angular/core';

export class Selector {
  code: string;
  title: string;
  icon: string;
}

const TOPBAR_SELECTORS: Selector[] = [
  { code: 'tasks', title: LanguageLabels.SELECTOR_TASKS, icon: 'check-circle' },
  { code: 'wallet', title: LanguageLabels.SELECTOR_WALLET, icon: 'wallet' },
  { code: 'people', title: LanguageLabels.SELECTOR_PEOPLE, icon: 'users' },
  { code: 'projects', title: LanguageLabels.SELECTOR_PROJECTS, icon: 'stream' }
];

@Component({
  selector: 'app-blue-modules-selector',
  templateUrl: './blue-modules-selector.component.html',
  styleUrls: ['./blue-modules-selector.component.css']
})
export class ModulesSelectorComponent {

  topbarSelectors = TOPBAR_SELECTORS;

  constructor(private languageService: LanguageService) {
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
