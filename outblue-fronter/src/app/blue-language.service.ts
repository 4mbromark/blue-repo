import { Injectable } from '@angular/core';

export class LanguageLabel {
  label: string;
  italian: string;
  english: string;
}

export class LanguageLabels {
  public static NULL = 'null';

  public static SEARCH_BUTTON = 'search-button'; // not linked

  // MODULES SELECTOR
  public static SELECTOR_TASKS = 'selector-tasks';
  public static SELECTOR_WALLET = 'selector-wallet';
  public static SELECTOR_PEOPLE = 'selector-people';
  public static SELECTOR_PROJECTS = 'selector-projects';

  // USER MENU
  public static MENU_ACCOUNT = 'menu-account';
  public static MENU_NOTIFICATIONS = 'menu-notifications';
  public static MENU_LANGUAGE = 'menu-language';
  public static MENU_SPACE = 'menu-space';
  public static MENU_PREFERENCES = 'menu-preferences';
  public static MENU_GUIDE = 'menu-guide';
  public static MENU_LICENCE = 'menu-licence';
  public static MENU_SETTINGS = 'menu-settings';
  public static MENU_INFO = 'menu-info';
  public static MENU_YENA = 'menu-yena';
  public static MENU_LOGOUT = 'menu-logout';


  // SIDEBAR of TASKS
  public static SIDEBAR_ALL_SHORT = 'sidebar-all-short';
  public static SIDEBAR_ALL_COMPLETE = 'sidebar-all-complete';
  public static SIDEBAR_CALENDAR_SHORT = 'sidebar-calendar-short';
  public static SIDEBAR_CALENDAR_COMPLETE = 'sidebar-calendar-complete';

  public static SIDEBAR_EXTEND = 'sidebar-extend'; // not linked
}

const LABELS: LanguageLabel[] = [
  { label: LanguageLabels.NULL, italian: 'attendere', english: 'wait' },

  { label: LanguageLabels.SEARCH_BUTTON, italian: 'Ricerca Globale', english: 'Global Search' },

  // MODULE SELECTOR
  { label: LanguageLabels.SELECTOR_TASKS, italian: 'Attività', english: 'Tasks' },
  { label: LanguageLabels.SELECTOR_WALLET, italian: 'Portafoglio', english: 'Wallet' },
  { label: LanguageLabels.SELECTOR_PEOPLE, italian: 'Persone', english: 'People' },
  { label: LanguageLabels.SELECTOR_PROJECTS, italian: 'Sottoprogetti', english: 'Subprojects' },

  // USER MENU
  { label: LanguageLabels.MENU_ACCOUNT, italian: 'Account', english: 'Account' },
  { label: LanguageLabels.MENU_NOTIFICATIONS, italian: 'Notifiche', english: 'Notifications' },
  { label: LanguageLabels.MENU_LANGUAGE, italian: 'Lingua', english: 'Language' },
  { label: LanguageLabels.MENU_SPACE, italian: 'Spazio', english: 'Space' },
  { label: LanguageLabels.MENU_PREFERENCES, italian: 'Preferenze', english: 'Preferences' },
  { label: LanguageLabels.MENU_GUIDE, italian: 'Guida', english: 'Manual' },
  { label: LanguageLabels.MENU_LICENCE, italian: 'Licenza', english: 'Licence' },
  { label: LanguageLabels.MENU_SETTINGS, italian: 'Opzioni', english: 'Settings' },
  { label: LanguageLabels.MENU_INFO, italian: 'Informativa', english: 'Informations' },
  { label: LanguageLabels.MENU_YENA, italian: 'Apri Yena', english: 'Open Yena' },
  { label: LanguageLabels.MENU_LOGOUT, italian: 'Esci', english: 'Logout' },

  // SIDEBAR of TASKS
  { label: LanguageLabels.SIDEBAR_ALL_SHORT, italian: 'Attività', english: 'Tasks' },
  { label: LanguageLabels.SIDEBAR_ALL_COMPLETE, italian: 'Tutte le Attività', english: 'All tasks' },
  { label: LanguageLabels.SIDEBAR_CALENDAR_SHORT, italian: 'Programmate', english: 'Scheduled' },
  { label: LanguageLabels.SIDEBAR_CALENDAR_COMPLETE, italian: 'Attività Programmate', english: 'Scheduled tasks' },

  { label: LanguageLabels.SIDEBAR_EXTEND, italian: 'Estendi / Riduci', english: 'Extend / Reduce' }
];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public static ITALIAN = 'ita';
  public static ENGLISH = 'eng';

  labels = LABELS;
  language = 'eng';

  constructor() {
  }

  getByLanguage(label: string) {
    const lab: LanguageLabel = this.getByLabel(label);
    return this.language === LanguageService.ENGLISH ? lab.english : lab.italian;
  }

  getByLabel(label: string): LanguageLabel {
    for (const lab of this.labels) {
      if (lab.label === label) {
        return lab;
      }
    }
    return this.labels[0];
  }
}
