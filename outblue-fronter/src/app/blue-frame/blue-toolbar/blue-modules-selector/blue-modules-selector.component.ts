import { Component } from '@angular/core';
import { LanguageService } from 'src/app/blue-utils/blue-language/language.service';
import { List } from 'src/app/blue-utils/blue-enum/list';

@Component({
  selector: 'app-modules-selector',
  templateUrl: './blue-modules-selector.component.html',
  styleUrls: ['./blue-modules-selector.component.css']
})
export class ModulesSelectorComponent {

  topbarSelectors = List.TOPBAR_SELECTORS;

  constructor(private languageService: LanguageService) {
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
