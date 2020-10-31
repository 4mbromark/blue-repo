import { LanguageService } from 'src/app/blue-language.service';
import { LanguageLabels } from './../../blue-language.service';
import { Component } from '@angular/core';

export class MenuButton {
  type: 'main' | 'line';
  icon?: string;
  title?: string;
  action?: any;
}

const MENU_BUTTONS: MenuButton[] = [
  { type: 'main', icon: 'user', title: LanguageLabels.MENU_ACCOUNT },
  { type: 'main', icon: 'envelope', title: LanguageLabels.MENU_NOTIFICATIONS },
  { type: 'line' },
  { type: 'main', icon: 'language', title: LanguageLabels.MENU_LANGUAGE },
  { type: 'main', icon: 'database', title: LanguageLabels.MENU_SPACE },
  { type: 'main', icon: 'palette', title: LanguageLabels.MENU_PREFERENCES },
  { type: 'line' },
  { type: 'main', icon: 'book-open', title: LanguageLabels.MENU_GUIDE },
  { type: 'main', icon: 'receipt', title: LanguageLabels.MENU_LICENCE },
  { type: 'main', icon: 'cog', title: LanguageLabels.MENU_SETTINGS },
  { type: 'main', icon: 'info-circle', title: LanguageLabels.MENU_INFO },
  { type: 'line' },
  { type: 'main', icon: 'asterisk', title: LanguageLabels.MENU_YENA },
  { type: 'main', icon: 'times', title: LanguageLabels.MENU_LOGOUT }
];

@Component({
  selector: 'app-blue-user-actions',
  templateUrl: './blue-user-actions.component.html',
  styleUrls: ['./blue-user-actions.component.css']
})
export class UserActionsComponent {

  menuButtons = MENU_BUTTONS;

  constructor(private languageService: LanguageService) {
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  doSomething() {

  }

}
