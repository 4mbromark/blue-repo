import { Config } from './../blue-enum/word/config';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
// tslint:disable: max-line-length
import { LanguageMatch } from '../blue-object/language/LanguageMatch';
import { Name } from '../blue-enum/word/name';

export class LanguageMatchList {
  public static MATCHS: LanguageMatch[] = [
    { label: LanguageLabel.NULL, italian: 'errore di traduzione', english: 'translation error' },

    { label: LanguageLabel.TITLE_STANDARD, italian: Name.HIGH_FIVE_OUTBLUE, english: Name.HIGH_FIVE_OUTBLUE },
    { label: LanguageLabel.TITLE_CUSTOMIZED, italian: Name.OUTBLUE + ' di ' + Config.NAME, english: Config.NAME + '\'s ' + Name.OUTBLUE },

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

    { label: LanguageLabel.REGISTRATION_NAME, italian: 'Nome', english: 'Name' },
    { label: LanguageLabel.REGISTRATION_SURNAME, italian: 'Cognome', english: 'Surname' },
    { label: LanguageLabel.REGISTRATION_MAIL, italian: 'Indirizzo email', english: 'Email address' },
    { label: LanguageLabel.REGISTRATION_USERNAME, italian: 'Username', english: 'Username' },
    { label: LanguageLabel.REGISTRATION_PASSWORD, italian: 'Password', english: 'Password' },
    { label: LanguageLabel.REGISTRATION_PASSWORDCONFIRM, italian: 'Conferma password', english: 'Confirm password' },

    // LICENCE
    { label: LanguageLabel.NO_LICENCE, italian: 'Nessuna licenza inserita', english: 'No license provided'},
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

    // PROJECTS
    { label: LanguageLabel.PROJECT_SETSWITCH, italian: 'Seleziona Progetto', english: 'Select Project'},
    { label: LanguageLabel.PROJECT_SETSWITCH_TOOLTIP, italian: 'Imposta il progetto nel selettore principale', english: 'Set the Project in the main switch'},
    { label: LanguageLabel.PROJECT_LEADERPROJECT, italian: 'Capoprogetto', english: 'Leaderproject'},
    { label: LanguageLabel.PROJECT_CURRENTSELECTED, italian: 'Attualmente selezionato', english: 'Currently selected'},

    // TABLES
    { label: LanguageLabel.TABLE_NOPROJECTS, italian: 'Non ci sono ancora Progetti  :(', english: 'There are no Projects yet  :('},
    { label: LanguageLabel.TABLE_NOTASKS, italian: 'Nessuna attività per il Progetto selezionato', english: 'There are no tasks for the selected Project'},

    { label: LanguageLabel.ROW_CHANGEICON, italian: 'Cambia icona', english: 'Change icon'},
    { label: LanguageLabel.ROW_CHANGECOLOR, italian: 'Cambia colore', english: 'Change color'},
    { label: LanguageLabel.ROW_CHANGEPRIORITY, italian: 'Cambia priorità', english: 'Change priority'},

    // USER MENU
    { label: LanguageLabel.MENU_ACCOUNT, italian: 'Account', english: 'Account' },
    { label: LanguageLabel.MENU_MESSAGING, italian: 'Notifiche', english: 'Notifications' },
    { label: LanguageLabel.MENU_MESSAGING_EXTENDED, italian: 'Centro Notifiche e Comunicazioni', english: 'Notifications Center' },
    { label: LanguageLabel.MENU_LANGUAGE, italian: 'Lingua', english: 'Language' },
    { label: LanguageLabel.MENU_SPACE, italian: 'Spazio', english: 'Space' },
    { label: LanguageLabel.MENU_PREFERENCES, italian: 'Preferenze', english: 'Preferences' },
    { label: LanguageLabel.MENU_SERVICES, italian: 'Servizi', english: 'Services' },
    { label: LanguageLabel.MENU_GUIDE, italian: 'Guida', english: 'Manual' },
    { label: LanguageLabel.MENU_LICENCE, italian: 'Licenza', english: 'License' },
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

    { label: LanguageLabel.LANGUAGE_UPDATE, italian: 'Aggiorna lingua', english: 'Update language' },

    // WINDOW of PREFERENCE
    { label: LanguageLabel.PREFERENCE_PROJECTS, italian: 'Progetti', english: 'Projects' },

    // SIDEBAR OF TASKS
    { label: LanguageLabel.SIDEBAR_MAIN_SHORT, italian: 'Amministrazione', english: 'Administration' },
    { label: LanguageLabel.SIDEBAR_MAIN_COMPLETE, italian: 'Amministrazione di ' + Name.OUTBLUE, english: Name.OUTBLUE + ' Administration' },
    { label: LanguageLabel.SIDEBAR_PROJECTS_SHORT, italian: 'Progetti', english: 'Projects' },
    { label: LanguageLabel.SIDEBAR_PROJECTS_COMPLETE, italian: 'Registro dei Progetti', english: 'Projects Register' },
    { label: LanguageLabel.SIDEBAR_TASKS_SHORT, italian: 'Attività', english: 'Tasklist' },
    { label: LanguageLabel.SIDEBAR_TASKS_COMPLETE, italian: 'Elenco delle Attività', english: 'List of Tasks' },
    { label: LanguageLabel.SIDEBAR_VERSIONS_SHORT, italian: 'Versioni', english: 'Versions' },
    { label: LanguageLabel.SIDEBAR_VERSIONS_COMPLETE, italian: 'Gestione delle Versioni', english: 'Version Management' },

    { label: LanguageLabel.SIDEBAR_EXTEND, italian: 'Estendi / Riduci', english: 'Extend / Reduce' },

    // SWITCH
    { label: LanguageLabel.SWITCH_NOPROJECTS, italian: 'Nessun Progetto', english: 'No projects' },
    { label: LanguageLabel.SWITCH_ALLPROJECTS, italian: 'Tutti i Progetti', english: 'All Projects' },

    // CONTEXT MENU of PROJECTBAR
    { label: LanguageLabel.CONTEXT_OPENPANEL, italian: 'Apri pannello', english: 'Open panel' },
    { label: LanguageLabel.CONTEXT_OPENPANEL_TOOLTIP, italian: 'Apri il pannello del Progetto ' + Config.PROJECT, english: 'Open the panel of Project ' + Config.PROJECT },
    { label: LanguageLabel.CONTEXT_CLOSEPANEL, italian: 'Chiudi pannello', english: 'Close panel' },
    { label: LanguageLabel.CONTEXT_CLOSEPANEL_TOOLTIP, italian: 'Chiudi il pannello del Progetto', english: 'Close the Project panel' },
    { label: LanguageLabel.CONTEXT_ADMINISTRATION, italian: 'Amministrazione', english: 'Administration' },
    { label: LanguageLabel.CONTEXT_ADMINISTRATION_TOOLTIP, italian: 'Amministrazione di ' + Name.OUTBLUE, english: Name.OUTBLUE + ' administration' },
    { label: LanguageLabel.CONTEXT_PROJECTLIST, italian: 'Progetti', english: 'Projects' },
    { label: LanguageLabel.CONTEXT_PROJECTLIST_TOOLTIP, italian: 'Registro dei Progetti', english: 'Projects register' },
    { label: LanguageLabel.CONTEXT_COPYNAME, italian: 'Copia nome', english: 'Copy name' },
    { label: LanguageLabel.CONTEXT_COPYNAME_TOOLTIP, italian: 'Copia il nome del Progetto negli appunti', english: 'Copy the Project name to the clipboard' },
    { label: LanguageLabel.CONTEXT_ALLPROJECTS, italian: 'Tutti i Progetti', english: 'All Projects' },
    { label: LanguageLabel.CONTEXT_ALLPROJECTS_TOOLTIP, italian: 'Mostra tutti i Progetti', english: 'Show all Projects' },
    { label: LanguageLabel.CONTEXT_LEADERPROJECTS, italian: 'Capoprogetti', english: 'Leaderprojects' },
    { label: LanguageLabel.CONTEXT_LEADERPROJECTS_TOOLTIP, italian: 'Visualizza tutti i Capoprogetti', english: 'View all Leaderprojects' },
    { label: LanguageLabel.CONTEXT_SUPERPROJECTS, italian: 'Superprogetti', english: 'Superprojects' },
    { label: LanguageLabel.CONTEXT_SUPERPROJECTS_TOOLTIP, italian: 'Visualizza i Superprogetti di ' + Config.PROJECT, english: 'View Superprojects of ' + Config.PROJECT },
    { label: LanguageLabel.CONTEXT_MIDDLEPROJECTS, italian: 'Progetti equivalenti', english: 'Equivalent projects' },
    { label: LanguageLabel.CONTEXT_MIDDLEPROJECTS_TOOLTIP, italian: 'Visualizza i Progetti equivalenti a ' + Config.PROJECT, english: 'View equivalent Projects to ' + Config.PROJECT },
    { label: LanguageLabel.CONTEXT_SUBPROJECTS, italian: 'Sottoprogetti', english: 'Subprojects' },
    { label: LanguageLabel.CONTEXT_SUBPROJECTS_TOOLTIP, italian: 'Visualizza i Sottoprogetti di ' + Config.PROJECT, english: 'View Subprojects of ' + Config.PROJECT },
    { label: LanguageLabel.CONTEXT_RECENTS, italian: 'Progetti recenti', english: 'Recent Projects' },
    { label: LanguageLabel.CONTEXT_RECENTS_TOOLTIP, italian: 'Visualizza i Progetti aperti di recente', english: 'View recently opened Projects' },
    { label: LanguageLabel.CONTEXT_SETTINGS, italian: 'Impostazioni', english: 'Settings' },
    { label: LanguageLabel.CONTEXT_SETTINGS_TOOLTIP, italian: 'Impostazioni del Progetto ' + Config.PROJECT, english: 'Settings of Project ' + Config.PROJECT },
    { label: LanguageLabel.CONTEXT_NEWPROJECT, italian: 'Nuovo Progetto', english: 'New Project' },
    { label: LanguageLabel.CONTEXT_NEWPROJECT_TOOLTIP, italian: 'Crea un nuovo Progetto', english: 'Create a new Project' },
    { label: LanguageLabel.CONTEXT_MANAGEPROJECTS, italian: 'Gestisci Progetti', english: 'Manage Projects' },
    { label: LanguageLabel.CONTEXT_MANAGEPROJECTS_TOOLTIP, italian: 'Gestisci tutti i Proegtti', english: 'Manage all Projects' },

    { label: LanguageLabel.CONTEXT_GOTOPROJECT_TOOLTIP, italian: 'Passa al Progetto ' + Config.PROJECT, english: 'Go to Project ' + Config.PROJECT },

    // PROJECT STATUS
    { label: LanguageLabel.PROJECT_CREATED, italian: 'Creato', english: 'Created' },
    { label: LanguageLabel.PROJECT_CREATED_DESCRIPTION, italian: 'Progetto creato correttamente', english: 'Project successfully created' },
    { label: LanguageLabel.PROJECT_APPROVAL, italian: 'In approvazione', english: 'In approval' },
    { label: LanguageLabel.PROJECT_APPROVAL_DESCRIPTION, italian: 'Progetto in attesa dell\'approvazione dei revisori', english: 'Project is waiting for revisers approval' },
    { label: LanguageLabel.PROJECT_ACCEPTED, italian: 'Accettato', english: 'Accepted' },
    { label: LanguageLabel.PROJECT_ACCEPTED_DESCRIPTION, italian: 'Progetto accettato dai revisori', english: 'Project accepted by revisers' },
    { label: LanguageLabel.PROJECT_REFUSED, italian: 'Rifiutato', english: 'Rifiutato' },
    { label: LanguageLabel.PROJECT_REFUSED_DESCRIPTION, italian: 'Progetto rifiutato dai revisori', english: 'Project refused by revisers' },
    { label: LanguageLabel.PROJECT_READY, italian: 'Pronto', english: 'Ready' },
    { label: LanguageLabel.PROJECT_READY_DESCRIPTION, italian: 'Progetto pronto a partire', english: 'Project is ready to start' },
    { label: LanguageLabel.PROJECT_ACTIVE, italian: 'Attivo', english: 'Active' },
    { label: LanguageLabel.PROJECT_ACTIVE_DESCRIPTION, italian: 'Progetto attivo', english: 'Project active' },
    { label: LanguageLabel.PROJECT_WAITING, italian: 'In attesa', english: 'Waiting' },
    { label: LanguageLabel.PROJECT_WAITING_DESCRIPTION, italian: 'Progetto in attesa di un altro Progetto', english: 'Project is waiting another Project' },
    { label: LanguageLabel.PROJECT_SUSPENDED, italian: 'Sospeso', english: 'Suspended' },
    { label: LanguageLabel.PROJECT_SUSPENDED_DESCRIPTION, italian: 'Progetto sospeso', english: 'Project suspended' },
    { label: LanguageLabel.PROJECT_DELETED, italian: 'Eliminato', english: 'Deleted' },
    { label: LanguageLabel.PROJECT_DELETED_DESCRIPTION, italian: 'Progetto elimianto', english: 'Project deleted' },
    { label: LanguageLabel.PROJECT_TRANSFERRED, italian: 'Trasferito', english: 'Transferred' },
    { label: LanguageLabel.PROJECT_TRANSFERRED_DESCRIPTION, italian: 'Progetto trasferito in un altro Progetto', english: 'Project transferred in another Project' },
    { label: LanguageLabel.PROJECT_COMPLETED, italian: 'Completato', english: 'Completed' },
    { label: LanguageLabel.PROJECT_COMPLETED_DESCRIPTION, italian: 'Progetto completato', english: 'Project completed' },

    { label: LanguageLabel.WINDOW_ADMINISTRATION, italian: 'Pannello amministrativo di ' + Name.OUTBLUE, english: Name.OUTBLUE + ' administration panel' },
    { label: LanguageLabel.WINDOW_PROJECTS, italian: 'Registro dei Progetti di ' + Config.NAME, english: Config.NAME + '\'s Projects register' },
  ];
}
