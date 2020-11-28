import { Config } from './../blue-enum/word/config';
import { LanguageLabels } from 'src/app/blue-utils/blue-language/language-labels';
// tslint:disable: max-line-length
import { LanguageMatch } from '../blue-object/language/LanguageMatch';
import { Name } from '../blue-enum/word/name';

export class LanguageMatchList {
  public static MATCHS: LanguageMatch[] = [
    { label: LanguageLabels.NULL, italian: 'errore di traduzione', english: 'translation error' },

    // LOGIN PAGE
    { label: LanguageLabels.WELCOME_MESSAGE_STANDARD, italian: 'Accedi a <b>' + Name.OUTBLUE + '</b>', english: 'Sign in to <b>' + Name.OUTBLUE + '</b>' },
    { label: LanguageLabels.WELCOME_MESSAGE_ALICE, italian: 'Che bello rivederti, <b>' + Name.ALICE + '</b>!', english: 'Happy to see you again, <b>' + Name.ALICE + '</b>!' },
    { label: LanguageLabels.WELCOME_MESSAGE_SIMPLE_M, italian: 'Bentornato, <b>' + Config.USERNAME + '</b>!', english: 'Welcome back, <b>' + Config.USERNAME + '</b>!' },
    { label: LanguageLabels.WELCOME_MESSAGE_SIMPLE_F, italian: 'Bentornata, <b>' + Config.USERNAME + '</b>!', english: 'Welcome back, <b>' + Config.USERNAME + '</b>!' },

    // LICENCE
    { label: LanguageLabels.LICENCE_LIMITED_TRIAL, italian: 'Licenza di prova gratuita a durata limitata', english: 'Free limited-term trial license'},
    { label: LanguageLabels.LICENCE_EXTENDED_TRIAL, italian: 'Licenza di prova gratuita a durata estesa', english: 'Free extended-term trial license'},
    { label: LanguageLabels.LICENCE_LIMITED_BETA, italian: 'Licenza per beta tester gratuita a durata limitata', english: 'Free limited-term beta tester license'},
    { label: LanguageLabels.LICENCE_EXTENDED_BETA, italian: 'Licenza per beta tester gratuita a durata estesa', english: 'Free extended-term beta tester license'},
    { label: LanguageLabels.LICENCE_UNLIMITED_BETA, italian: 'Licenza per beta tester gratuita a durata indeterminata', english: 'Free indefinite-term beta tester license'},
    { label: LanguageLabels.LICENCE_MONTHLY_RENEWAL, italian: 'Licenza completa a rinnovo mensile', english: 'Monthly-renewal full license'},
    { label: LanguageLabels.LICENCE_ANNUAL_RENEWAL, italian: 'Licenza completa a rinnovo annuale', english: 'Annual-renewal full license'},
    { label: LanguageLabels.LICENCE_PROMOTIONAL_RENEWAL, italian: 'Licenza completa a rinnovo personalizzato', english: 'Customized-renewal full license'},
    { label: LanguageLabels.LICENCE_LIFETIME, italian: 'Licenza completa a vita', english: 'Lifetime full license'},
    { label: LanguageLabels.LICENCE_LIFETIME_PROMOTIONAL, italian: 'Licenza completa a vita personalizzata', english: 'Customized lifetime full license'},
    { label: LanguageLabels.LICENCE_LIFETIME_FREE, italian: 'Licenza completa a vita gratuita', english: 'Free lifetime full license'},

    // LICENCE BAR
    { label: LanguageLabels.LICENCE_CONTRACT, italian: 'Contratto', english: 'Contract'},
    { label: LanguageLabels.LICENCE_CONTRACT_TOOLTIP, italian: 'Scarica il contratto di utilizzo', english: 'Download the usage agreement'},
    { label: LanguageLabels.LICENCE_INFO_TOOLTIP, italian: 'Maggiori informazioni sulla licenza in uso', english: 'More informations about the current license'},

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
    { label: LanguageLabels.MENU_YENA, italian: 'Apri ' + Name.YENA, english: 'Open ' + Name.YENA },
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

    // SIDEBAR OF TASKS
    { label: LanguageLabels.SIDEBAR_MAIN_SHORT, italian: 'Amministrazione', english: 'Administration' },
    { label: LanguageLabels.SIDEBAR_MAIN_COMPLETE, italian: 'Amministrazione di ' + Name.OUTBLUE, english: Name.OUTBLUE + ' Administration' },
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
