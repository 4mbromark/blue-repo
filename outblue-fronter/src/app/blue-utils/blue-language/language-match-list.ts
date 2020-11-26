// tslint:disable: max-line-length
import { LanguageMatch } from '../blue-object/language/LanguageMatch';
import { LanguageLabels } from './language-labels';

export class LanguageMatchList {
  public static MATCHS: LanguageMatch[] = [
    { label: LanguageLabels.NULL, italian: 'errore di traduzione', english: 'translation error' },

    // TOPBAR
    { label: LanguageLabels.SEARCH_BUTTON, italian: 'Ricerca Globale', english: 'Global Search' },

    // USER MENU
    { label: LanguageLabels.MENU_ACCOUNT, italian: 'Account', english: 'Account' },
    { label: LanguageLabels.MENU_MESSAGING, italian: 'Notifiche', english: 'Notifications' },
    { label: LanguageLabels.MENU_MESSAGING_EXTENDED, italian: 'Centro Notifiche e Comunicazioni', english: 'Notifications Center' },
    { label: LanguageLabels.MENU_LANGUAGE, italian: 'Lingua', english: 'Language' },
    { label: LanguageLabels.MENU_SPACE, italian: 'Spazio', english: 'Space' },
    { label: LanguageLabels.MENU_PREFERENCES, italian: 'Preferenze', english: 'Preferences' },
    { label: LanguageLabels.MENU_SERVICES, italian: 'Servizi', english: 'Services' },
    { label: LanguageLabels.MENU_GUIDE, italian: 'Guida', english: 'Manual' },
    { label: LanguageLabels.MENU_LICENCE, italian: 'Licenza', english: 'Licence' },
    { label: LanguageLabels.MENU_SETTINGS, italian: 'Opzioni', english: 'Settings' },
    { label: LanguageLabels.MENU_INFO, italian: 'Informazioni', english: 'Informations' },
    { label: LanguageLabels.MENU_STORE, italian: 'Negozio', english: 'Store' },
    { label: LanguageLabels.MENU_YENA, italian: 'Apri Yena', english: 'Open Yena' },
    { label: LanguageLabels.MENU_LOGOUT, italian: 'Esci', english: 'Logout' },

    // WINDOW of MESSAGING
    { label: LanguageLabels.MESSAGING_NOTIFICATIONS, italian: 'Notifiche', english: 'Notifications' },
    { label: LanguageLabels.MESSAGING_COMMUNICATIONS, italian: 'Comunicazioni', english: 'Communications' },
    { label: LanguageLabels.MESSAGING_ASSISTANCE, italian: 'Assistenza', english: 'Assistance' },
    { label: LanguageLabels.MESSAGING_CHAT, italian: 'Messaggi', english: 'Messages' },
    { label: LanguageLabels.MESSAGING_CASUAL, italian: 'Messaggistica Casuale', english: 'Casual Messages' },

    // WINDOW of LANGUAGE
    { label: LanguageLabels.LANGUAGE_ITALIAN, italian: 'Italiano', english: 'Italian' },
    { label: LanguageLabels.LANGUAGE_ENGLISH, italian: 'Inglese', english: 'English' },

    // WINDOW of PREFERENCE
    { label: LanguageLabels.PREFERENCE_PROJECTS, italian: 'Progetti', english: 'Projects' },

    // MODULE SELECTOR
    { label: LanguageLabels.SELECTOR_TASKS, italian: 'Attività', english: 'Tasks' },
    { label: LanguageLabels.SELECTOR_WALLET, italian: 'Portafoglio', english: 'Wallet' },
    { label: LanguageLabels.SELECTOR_PEOPLE, italian: 'Persone', english: 'People' },
    { label: LanguageLabels.SELECTOR_PROJECTS, italian: 'Sottoprogetti', english: 'Subprojects' },

    // SIDEBAR OF TASKS
    { label: LanguageLabels.SIDEBAR_MAIN_SHORT, italian: 'Amministrazione', english: 'Administration' },
    { label: LanguageLabels.SIDEBAR_MAIN_COMPLETE, italian: 'Amministrazione di Outblue', english: 'Outblue Administration' },
    { label: LanguageLabels.SIDEBAR_PROJECTS_SHORT, italian: 'Progetti', english: 'Projects' },
    { label: LanguageLabels.SIDEBAR_PROJECTS_COMPLETE, italian: 'Registro dei progetti', english: 'Projects Register' },
    { label: LanguageLabels.SIDEBAR_TASKS_SHORT, italian: 'Attività', english: 'Tasklist' },
    { label: LanguageLabels.SIDEBAR_TASKS_COMPLETE, italian: 'Elenco delle Attività', english: 'List of Tasks' },
    { label: LanguageLabels.SIDEBAR_VERSIONS_SHORT, italian: 'Versioni', english: 'Versions' },
    { label: LanguageLabels.SIDEBAR_VERSIONS_COMPLETE, italian: 'Gestione delle Versioni', english: 'Version Management' },

    { label: LanguageLabels.SIDEBAR_EXTEND, italian: 'Estendi / Riduci', english: 'Extend / Reduce' },

    // CONTEXT MENU of PROJECTBAR
    { label: LanguageLabels.CONTEXT_OPENPANEL, italian: 'Apri pannello', english: 'Open panel' },
    { label: LanguageLabels.CONTEXT_OPENPANEL_TOOLTIP, italian: 'Apri il pannello del progetto ', english: 'Open the panel of Project ' },
    { label: LanguageLabels.CONTEXT_CLOSEPANEL, italian: 'Chiudi pannello', english: 'Close panel' },
    { label: LanguageLabels.CONTEXT_CLOSEPANEL_TOOLTIP, italian: 'Chiudi il pannello del Progetto', english: 'Close the Project panel' },
    { label: LanguageLabels.CONTEXT_COPYNAME, italian: 'Copia nome', english: 'Copy name' },
    { label: LanguageLabels.CONTEXT_COPYNAME_TOOLTIP, italian: 'Copia il nome del progetto negli appunti', english: 'Copy the Project name to the clipboard' },
    { label: LanguageLabels.CONTEXT_SUPERPROJECTS, italian: 'Superprogetti', english: 'Superprojects' },
    { label: LanguageLabels.CONTEXT_SUPERPROJECTS_TOOLTIP, italian: 'Visualizza i Superprogetti di ', english: 'View Superprojects of ' },
    { label: LanguageLabels.CONTEXT_SUBPROJECTS, italian: 'Sottoprogetti', english: 'Subprojects' },
    { label: LanguageLabels.CONTEXT_SUBPROJECTS_TOOLTIP, italian: 'Visualizza i Sottoprogetti di ', english: 'View Subprojects of ' },
    { label: LanguageLabels.CONTEXT_RECENTS, italian: 'Progetti recenti', english: 'Recent Projects' },
    { label: LanguageLabels.CONTEXT_RECENTS_TOOLTIP, italian: 'Visualizza i progetti aperti di recente', english: 'View recently opened Projects' },
    { label: LanguageLabels.CONTEXT_SETTINGS, italian: 'Impostazioni', english: 'Settings' },
    { label: LanguageLabels.CONTEXT_SETTINGS_TOOLTIP, italian: 'Impostazioni del Progetto ', english: 'Settings of Project ' },
    { label: LanguageLabels.CONTEXT_NEWPROJECT, italian: 'Nuovo progetto', english: 'New Project' },
    { label: LanguageLabels.CONTEXT_NEWPROJECT_TOOLTIP, italian: 'Crea un nuovo Progetto', english: 'Create a new Project' },
    { label: LanguageLabels.CONTEXT_MANAGEPROJECTS, italian: 'Gestisci Progetti', english: 'Manage Projects' },
    { label: LanguageLabels.CONTEXT_MANAGEPROJECTS_TOOLTIP, italian: 'Gestisci tutti i Proegtti', english: 'Manage all Projects' },

    { label: LanguageLabels.CONTEXT_GOTOPROJECT_TOOLTIP, italian: 'Passa al Progetto ', english: 'Go to Project ' },
  ];
}
