// tslint:disable: max-line-length
import { Tag } from '../../../blue-utils/blue-enum/word/tag';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { MenuButton } from 'src/app/blue-utils/blue-object/button/MenuButton';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LanguageComponent } from '../../blue-window/language/language.component';
import { MessagingComponent } from '../../blue-window/messaging/messaging.component';
import { PreferenceComponent } from '../../blue-window/preference/preference.component';

const MENU_BUTTONS: MenuButton[] = [
  { type: 'main', icon: 'user', title: LanguageLabel.MENU_ACCOUNT },
  { type: 'main', icon: 'envelope', title: LanguageLabel.MENU_MESSAGING, action: {type: 'dialog', component: MessagingComponent}, alt: { icon: 'mail-bulk', title: LanguageLabel.MENU_MESSAGING_EXTENDED}, tag: Tag.MESSAGING },
  { type: 'line' },
  { type: 'main', icon: 'language', title: LanguageLabel.MENU_LANGUAGE, action: {type: 'dialog', component: LanguageComponent, width: '30%', height: '40%'} },
  /*{ type: 'main', icon: 'database', title: LanguageLabel.MENU_SPACE },*/
  { type: 'main', icon: 'palette', title: LanguageLabel.MENU_PREFERENCES, action: {type: 'dialog', component: PreferenceComponent} },
  { type: 'main', icon: 'paper-plane', title: LanguageLabel.MENU_SERVICES },
  { type: 'line' },
  { type: 'main', icon: 'book-open', title: LanguageLabel.MENU_GUIDE },
  { type: 'main', icon: 'receipt', title: LanguageLabel.MENU_LICENCE },
  { type: 'main', icon: 'cog', title: LanguageLabel.MENU_SETTINGS },
  { type: 'main', icon: 'info-circle', title: LanguageLabel.MENU_INFO },
  { type: 'line' },
  { type: 'main', icon: 'shopping-cart', title: LanguageLabel.MENU_STORE },
  /* { type: 'main', icon: 'asterisk', title: LanguageLabel.MENU_YENA }, */
  { type: 'main', icon: 'times', title: LanguageLabel.MENU_LOGOUT }
];

@Component({
  selector: 'app-user-actions',
  templateUrl: './blue-user-actions.component.html',
  styleUrls: ['./blue-user-actions.component.css']
})
export class UserActionsComponent {

  menuButtons = MENU_BUTTONS;

  constructor(private languageService: LanguageService, private dialog: MatDialog) {
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  openMessagingDialog(): void {
    this.menuButtons.forEach(button => {
      if (button.tag === Tag.MESSAGING) {
        this.openWindow(button);
      }
    });
  }

  openWindow(button: MenuButton): void {
    this.dialog.open(button.action.component, {
      width: button.action.width ? button.action.width : '50%',
      height: button.action.height ? button.action.height : '80%',
      data: {
        icon: button.alt ? button.alt.icon : button.icon,
        title: button.alt ? this.gbl(button.alt.title) : this.gbl(button.title)
      }
    });
  }

}
