import { Config } from './../blue-enum/word/config';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
// tslint:disable: max-line-length
import { LanguageMatch } from '../blue-object/language/LanguageMatch';
import { Name } from '../blue-enum/word/name';

export class LanguageMatchList {
  public static MATCHS: LanguageMatch[] = [
    { label: LanguageLabel.NULL, italian: 'errore di traduzione', english: 'translation error' },

    // LOGIN PAGE
    { label: LanguageLabel.WELCOME_MESSAGE_STANDARD, italian: 'Accedi a <b>' + Name.OUTBLUE + '</b>', english: 'Sign in to <b>' + Name.OUTBLUE + '</b>' },
    { label: LanguageLabel.WELCOME_MESSAGE_ALICE, italian: 'Che bello rivederti, <b>' + Name.ALICE + '</b>!', english: 'Happy to see you again, <b>' + Name.ALICE + '</b>!' },
    { label: LanguageLabel.WELCOME_MESSAGE_SIMPLE_M, italian: 'Bentornato, <b>' + Config.USERNAME + '</b>!', english: 'Welcome back, <b>' + Config.USERNAME + '</b>!' },
    { label: LanguageLabel.WELCOME_MESSAGE_SIMPLE_F, italian: 'Bentornata, <b>' + Config.USERNAME + '</b>!', english: 'Welcome back, <b>' + Config.USERNAME + '</b>!' },

    { label: LanguageLabel.LOGIN_TOOLTIP, italian: 'Accedi', english: 'Sign in' },
    { label: LanguageLabel.LOGIN_USERNAME, italian: 'Nome utente / email', english: 'Username / email' },
    { label: LanguageLabel.LOGIN_PASSWORD, italian: 'Password', english: 'Password' },
    { label: LanguageLabel.LOGIN_PASSWORD_SHOW, italian: 'Mostra password', english: 'Show password' },
    { label: LanguageLabel.LOGIN_PASSWORD_HIDE, italian: 'Nascondi password', english: 'Hide password' },
    { label: LanguageLabel.LOGIN_ERROR, italian: 'Impossibile effettuare l\'accesso', english: 'Unable to sign in' },
    { label: LanguageLabel.REGISTRATION, italian: 'Registrati', english: 'Sign up' },
    { label: LanguageLabel.REGISTRATION_TOOLTIP, italian: 'Registrati a ' + Name.OUTBLUE, english: 'Register to ' + Name.OUTBLUE },

    { label: LanguageLabel.REGISTRATION_TITLE, italian: 'Registrazione a ' + Name.OUTBLUE, english: Name.OUTBLUE + ' registration' },

    // LICENCE
    { label: LanguageLabel.NO_LICENCE, italian: 'Nessuna licenza inserita', english: 'No licence provided'},
    { label: LanguageLabel.LICENCE_LIMITED_TRIAL, italian: 'Licenza di prova gratuita a durata limitata', english: 'Free limited-term trial license'},
    { label: LanguageLabel.LICENCE_EXTENDED_TRIAL, italian: 'Licenza di prova gratuita a durata estesa', english: 'Free extended-term trial license'},
    { label: LanguageLabel.LICENCE_LIMITED_BETA, italian: 'Licenza per beta tester gratuita a durata limitata', english: 'Free limited-term beta tester license'},
    { label: LanguageLabel.LICENCE_EXTENDED_BETA, italian: 'Licenza per beta tester gratuita a durata estesa', english: 'Free extended-term beta tester license'},
    { label: LanguageLabel.LICENCE_UNLIMITED_BETA, italian: 'Licenza per beta tester gratuita a durata indeterminata', english: 'Free indefinite-term beta tester license'},
    { label: LanguageLabel.LICENCE_MONTHLY_RENEWAL, italian: 'Licenza completa a rinnovo mensile', english: 'Monthly-renewal full license'},
    { label: LanguageLabel.LICENCE_ANNUAL_RENEWAL, italian: 'Licenza completa a rinnovo annuale', english: 'Annual-renewal full license'},
    { label: LanguageLabel.LICENCE_PROMOTIONAL_RENEWAL, italian: 'Licenza completa a rinnovo personalizzato', english: 'Customized-renewal full license'},
    { label: LanguageLabel.LICENCE_LIFETIME, italian: 'Licenza completa a vita', english: 'Lifetime full license'},
    { label: LanguageLabel.LICENCE_LIFETIME_PROMOTIONAL, italian: 'Licenza completa a vita personalizzata', english: 'Customized lifetime full license'},
    { label: LanguageLabel.LICENCE_LIFETIME_FREE, italian: 'Licenza completa a vita gratuita', english: 'Free lifetime full license'},

    // LICENCE BAR
    { label: LanguageLabel.LICENCE_CONTRACT, italian: 'Contratto', english: 'Contract'},
    { label: LanguageLabel.LICENCE_CONTRACT_TOOLTIP, italian: 'Scarica il contratto di utilizzo', english: 'Download the usage agreement'},
    { label: LanguageLabel.LICENCE_INFO_TOOLTIP, italian: 'Maggiori informazioni sulla licenza in uso', english: 'More informations about the current license'},
    { label: LanguageLabel.LICENCE_NEWTRIAL, italian: 'Nuova licenza', english: 'New license'},
    { label: LanguageLabel.LICENCE_NEWTRIAL_TOOLTIP, italian: 'Genera una licenza di prova gratuita', english: 'Generate a free trial license'},

    { label: LanguageLabel.LICENCE_STATUS_NONE, italian: 'Mancante', english: 'Missing'},
    { label: LanguageLabel.LICENCE_STATUS_WAITING, italian: 'In attesa', english: 'Waiting'},
    { label: LanguageLabel.LICENCE_STATUS_ACTIVE, italian: 'Attiva', english: 'Active'},
    { label: LanguageLabel.LICENCE_STATUS_EXPIRING, italian: 'In scadenza', english: 'Expiring'},
    { label: LanguageLabel.LICENCE_STATUS_EXPIRED, italian: 'Scaduta', english: 'Expired'},

    { label: LanguageLabel.LICENCE_STATUS_TOOLTIP, italian: 'Stato licenza: ', english: 'License status: '},

    // USER MENU
    { label: LanguageLabel.MENU_ACCOUNT, italian: 'Account', english: 'Account' },
    { label: LanguageLabel.MENU_MESSAGING, italian: 'Notifiche', english: 'Notifications' },
    { label: LanguageLabel.MENU_MESSAGING_EXTENDED, italian: 'Centro Notifiche e Comunicazioni', english: 'Notifications Center' },
    { label: LanguageLabel.MENU_LANGUAGE, italian: 'Lingua', english: 'Language' },
    { label: LanguageLabel.MENU_SPACE, italian: 'Spazio', english: 'Space' },
    { label: LanguageLabel.MENU_PREFERENCES, italian: 'Preferenze', english: 'Preferences' },
    { label: LanguageLabel.MENU_SERVICES, italian: 'Servizi', english: 'Services' },
    { label: LanguageLabel.MENU_GUIDE, italian: 'Guida', english: 'Manual' },
    { label: LanguageLabel.MENU_LICENCE, italian: 'Licenza', english: 'Licence' },
    { label: LanguageLabel.MENU_SETTINGS, italian: 'Opzioni', english: 'Settings' },
    { label: LanguageLabel.MENU_INFO, italian: 'Informazioni', english: 'Informations' },
    { label: LanguageLabel.MENU_STORE, italian: 'Negozio', english: 'Store' },
    { label: LanguageLabel.MENU_YENA, italian: 'Apri ' + Name.YENA, english: 'Open ' + Name.YENA },
    { label: LanguageLabel.MENU_LOGOUT, italian: 'Esci', english: 'Logout' },

    // WINDOW of MESSAGING
    { label: LanguageLabel.MESSAGING_NOTIFICATIONS, italian: 'Notifiche', english: 'Notifications' },
    { label: LanguageLabel.MESSAGING_COMMUNICATIONS, italian: 'Comunicazioni', english: 'Communications' },
    { label: LanguageLabel.MESSAGING_ASSISTANCE, italian: 'Assistenza', english: 'Assistance' },
    { label: LanguageLabel.MESSAGING_CHAT, italian: 'Messaggi', english: 'Messages' },
    { label: LanguageLabel.MESSAGING_CASUAL, italian: 'Messaggistica Casuale', english: 'Casual Messages' },

    // WINDOW of LANGUAGE
    { label: LanguageLabel.LANGUAGE_ITALIAN, italian: 'Italiano', english: 'Italian' },
    { label: LanguageLabel.LANGUAGE_ENGLISH, italian: 'Inglese', english: 'English' },

    // WINDOW of PREFERENCE
    { label: LanguageLabel.PREFERENCE_PROJECTS, italian: 'Progetti', english: 'Projects' },

    // SIDEBAR OF TASKS
    { label: LanguageLabel.SIDEBAR_MAIN_SHORT, italian: 'Amministrazione', english: 'Administration' },
    { label: LanguageLabel.SIDEBAR_MAIN_COMPLETE, italian: 'Amministrazione di ' + Name.OUTBLUE, english: Name.OUTBLUE + ' Administration' },
    { label: LanguageLabel.SIDEBAR_PROJECTS_SHORT, italian: 'Progetti', english: 'Projects' },
    { label: LanguageLabel.SIDEBAR_PROJECTS_COMPLETE, italian: 'Registro dei progetti', english: 'Projects Register' },
    { label: LanguageLabel.SIDEBAR_TASKS_SHORT, italian: 'Attività', english: 'Tasklist' },
    { label: LanguageLabel.SIDEBAR_TASKS_COMPLETE, italian: 'Elenco delle Attività', english: 'List of Tasks' },
    { label: LanguageLabel.SIDEBAR_VERSIONS_SHORT, italian: 'Versioni', english: 'Versions' },
    { label: LanguageLabel.SIDEBAR_VERSIONS_COMPLETE, italian: 'Gestione delle Versioni', english: 'Version Management' },

    { label: LanguageLabel.SIDEBAR_EXTEND, italian: 'Estendi / Riduci', english: 'Extend / Reduce' },

    // CONTEXT MENU of PROJECTBAR
    { label: LanguageLabel.CONTEXT_OPENPANEL, italian: 'Apri pannello', english: 'Open panel' },
    { label: LanguageLabel.CONTEXT_OPENPANEL_TOOLTIP, italian: 'Apri il pannello del progetto ', english: 'Open the panel of Project ' },
    { label: LanguageLabel.CONTEXT_CLOSEPANEL, italian: 'Chiudi pannello', english: 'Close panel' },
    { label: LanguageLabel.CONTEXT_CLOSEPANEL_TOOLTIP, italian: 'Chiudi il pannello del Progetto', english: 'Close the Project panel' },
    { label: LanguageLabel.CONTEXT_COPYNAME, italian: 'Copia nome', english: 'Copy name' },
    { label: LanguageLabel.CONTEXT_COPYNAME_TOOLTIP, italian: 'Copia il nome del progetto negli appunti', english: 'Copy the Project name to the clipboard' },
    { label: LanguageLabel.CONTEXT_SUPERPROJECTS, italian: 'Superprogetti', english: 'Superprojects' },
    { label: LanguageLabel.CONTEXT_SUPERPROJECTS_TOOLTIP, italian: 'Visualizza i Superprogetti di ', english: 'View Superprojects of ' },
    { label: LanguageLabel.CONTEXT_SUBPROJECTS, italian: 'Sottoprogetti', english: 'Subprojects' },
    { label: LanguageLabel.CONTEXT_SUBPROJECTS_TOOLTIP, italian: 'Visualizza i Sottoprogetti di ', english: 'View Subprojects of ' },
    { label: LanguageLabel.CONTEXT_RECENTS, italian: 'Progetti recenti', english: 'Recent Projects' },
    { label: LanguageLabel.CONTEXT_RECENTS_TOOLTIP, italian: 'Visualizza i progetti aperti di recente', english: 'View recently opened Projects' },
    { label: LanguageLabel.CONTEXT_SETTINGS, italian: 'Impostazioni', english: 'Settings' },
    { label: LanguageLabel.CONTEXT_SETTINGS_TOOLTIP, italian: 'Impostazioni del Progetto ', english: 'Settings of Project ' },
    { label: LanguageLabel.CONTEXT_NEWPROJECT, italian: 'Nuovo progetto', english: 'New Project' },
    { label: LanguageLabel.CONTEXT_NEWPROJECT_TOOLTIP, italian: 'Crea un nuovo Progetto', english: 'Create a new Project' },
    { label: LanguageLabel.CONTEXT_MANAGEPROJECTS, italian: 'Gestisci Progetti', english: 'Manage Projects' },
    { label: LanguageLabel.CONTEXT_MANAGEPROJECTS_TOOLTIP, italian: 'Gestisci tutti i Proegtti', english: 'Manage all Projects' },

    { label: LanguageLabel.CONTEXT_GOTOPROJECT_TOOLTIP, italian: 'Passa al Progetto ', english: 'Go to Project ' },
  ];
}
