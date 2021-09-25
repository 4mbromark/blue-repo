import { Config } from './../blue-enum/word/config';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
// tslint:disable: max-line-length
import { LanguageMatch } from '../blue-object/language/LanguageMatch';
import { Name } from '../blue-enum/word/name';

export class LanguageMatchList {
  public static MATCHS: LanguageMatch[] = [
    { label: LanguageLabel.TITLE_STANDARD, italian: '', english: Name.HIGH_FIVE_OUTBLUE },
    { label: LanguageLabel.TITLE_CUSTOMIZED, italian: '', english: Config.NAME + '\'s ' + Name.OUTBLUE },

    // LOGIN PAGE
    { label: LanguageLabel.WELCOME_MESSAGE_STANDARD, italian: '', english: 'Sign in to <b>' + Name.OUTBLUE + '</b>' },
    { label: LanguageLabel.WELCOME_MESSAGE_ALICE, italian: '', english: 'Happy to see you again, <b>' + Name.ALICE + '</b>!' },

    { label: LanguageLabel.LOGIN_TOOLTIP, italian: '', english: 'Sign in' },
    { label: LanguageLabel.LOGIN_USERNAME, italian: '', english: 'Username / email' },
    { label: LanguageLabel.LOGIN_PASSWORD, italian: '', english: 'Password' },
    { label: LanguageLabel.LOGIN_PASSWORD_SHOW, italian: '', english: 'Show password' },
    { label: LanguageLabel.LOGIN_PASSWORD_HIDE, italian: '', english: 'Hide password' },
    { label: LanguageLabel.LOGIN_ERROR, italian: '', english: 'Unable to sign in' },
    { label: LanguageLabel.REGISTRATION, italian: '', english: 'Sign up' },
    { label: LanguageLabel.REGISTRATION_TOOLTIP, italian: '', english: 'Register to ' + Name.OUTBLUE },

    { label: LanguageLabel.REGISTRATION_TITLE, italian: '', english: Name.OUTBLUE + ' registration' },

    { label: LanguageLabel.REGISTRATION_NAME, italian: '', english: 'Name' },
    { label: LanguageLabel.REGISTRATION_SURNAME, italian: '', english: 'Surname' },
    { label: LanguageLabel.REGISTRATION_MAIL, italian: '', english: 'Email address' },
    { label: LanguageLabel.REGISTRATION_USERNAME, italian: '', english: 'Username' },
    { label: LanguageLabel.REGISTRATION_PASSWORD, italian: '', english: 'Password' },
    { label: LanguageLabel.REGISTRATION_PASSWORDCONFIRM, italian: '', english: 'Confirm password' },

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

    { label: LanguageLabel.HEADER_PROJECT, italian: 'Progetto', english: 'Project'},
    { label: LanguageLabel.HEADER_TASK, italian: 'Attività', english: 'Task'},
    { label: LanguageLabel.HEADER_STATUS, italian: 'Stato', english: 'Status'},
    { label: LanguageLabel.HEADER_PRIORITY, italian: 'Priorità', english: 'Priority'},
    { label: LanguageLabel.HEADER_SUPERPROJECT, italian: 'Superprogetto', english: 'Superproject'},
    { label: LanguageLabel.HEADER_STARTDATE, italian: 'Data Inizio', english: 'Start Date'},
    { label: LanguageLabel.HEADER_ENDDATE, italian: 'Data Fine', english: 'End Date'},
    { label: LanguageLabel.HEADER_INSERTDATE, italian: 'Data Inserimento', english: 'Insert Date'},

    { label: LanguageLabel.ROW_CHANGECOLOR, italian: 'Cambia colore', english: 'Change color'},
    { label: LanguageLabel.ROW_CHANGEPRIORITY, italian: 'Cambia priorità', english: 'Change priority'},

    // USER MENU
    { label: LanguageLabel.MENU_ACCOUNT, italian: 'Account', english: 'Account' },
    { label: LanguageLabel.MENU_MESSAGING, italian: 'Notifiche', english: 'Notifications' },
    { label: LanguageLabel.MENU_MESSAGING_EXTENDED, italian: 'Centro Notifiche e Comunicazioni', english: 'Notifications Center' },
    { label: LanguageLabel.MENU_LANGUAGE, italian: 'Lingua', english: 'Language' },
    { label: LanguageLabel.MENU_PREFERENCES, italian: 'Preferenze', english: 'Preferences' },
    { label: LanguageLabel.MENU_SERVICES, italian: 'Servizi', english: 'Services' },
    { label: LanguageLabel.MENU_GUIDE, italian: 'Guida', english: 'Manual' },
    { label: LanguageLabel.MENU_LICENCE, italian: 'Licenza', english: 'License' },
    { label: LanguageLabel.MENU_SETTINGS, italian: 'Opzioni', english: 'Settings' },
    { label: LanguageLabel.MENU_INFO, italian: 'Informazioni', english: 'Informations' },
    { label: LanguageLabel.MENU_LOGOUT, italian: 'Esci', english: 'Logout' },

    // WINDOW of MESSAGING
    { label: LanguageLabel.MESSAGING_NOTIFICATIONS, italian: 'Notifiche', english: 'Notifications' },
    { label: LanguageLabel.MESSAGING_COMMUNICATIONS, italian: 'Comunicazioni', english: 'Communications' },
    { label: LanguageLabel.MESSAGING_ASSISTANCE, italian: 'Assistenza', english: 'Assistance' },

    // WINDOW of LANGUAGE
    { label: LanguageLabel.LANGUAGE_ITALIAN, italian: 'Italiano', english: 'Italian' },
    { label: LanguageLabel.LANGUAGE_ENGLISH, italian: 'Inglese', english: 'English' },

    { label: LanguageLabel.LANGUAGE_UPDATE, italian: 'Aggiorna lingua', english: 'Update language' },

    // SIDEBAR
    { label: LanguageLabel.SIDEBAR_ADMIN_SHORT, italian: 'Gestione', english: 'Admin' },
    { label: LanguageLabel.SIDEBAR_ADMIN_COMPLETE, italian: 'Amministrazione del Progetto', english: 'Project administration' },
    { label: LanguageLabel.SIDEBAR_PROJECTS_SHORT, italian: 'Progetti', english: 'Projects' },
    { label: LanguageLabel.SIDEBAR_PROJECTS_COMPLETE, italian: 'Progetti e sottoprogetti', english: 'Projects and subprojects' },
    { label: LanguageLabel.SIDEBAR_TASKS_SHORT, italian: 'Attività', english: 'Tasklist' },
    { label: LanguageLabel.SIDEBAR_TASKS_COMPLETE, italian: 'Elenco delle attività', english: 'List of tasks' },

    { label: LanguageLabel.SIDEBAR_EXTEND_SHORT, italian: 'Estendi', english: 'Extend' },
    { label: LanguageLabel.SIDEBAR_EXTEND_COMPLETE, italian: 'Estendi la barra di navigazione', english: 'Extend the navigation bar' },
    { label: LanguageLabel.SIDEBAR_REDUCE_SHORT, italian: 'Riduci', english: 'Reduce' },
    { label: LanguageLabel.SIDEBAR_REDUCE_COMPLETE, italian: 'Riduci la barra di navigazione', english: 'Reduce the navigation bar' },
    { label: LanguageLabel.SIDEBAR_SEARCH_SHORT, italian: 'Cerca', english: 'Search' },
    { label: LanguageLabel.SIDEBAR_SEARCH_COMPLETE, italian: 'Esegui una ricerca', english: 'Perform a search' },
    { label: LanguageLabel.SIDEBAR_FILTER_SHORT, italian: 'Filtra', english: 'Filter' },
    { label: LanguageLabel.SIDEBAR_FILTER_COMPLETE, italian: 'Applica dei filtri', english: 'Apply filters' },
    { label: LanguageLabel.SIDEBAR_RELOAD_SHORT, italian: 'Ricarica', english: 'Reload' },
    { label: LanguageLabel.SIDEBAR_RELOAD_COMPLETE, italian: 'Ricarica i dati', english: 'Reload data' },

    // SWITCH
    { label: LanguageLabel.SWITCH_NOPROJECTS, italian: '', english: 'No projects' },
    { label: LanguageLabel.SWITCH_ALLPROJECTS, italian: '', english: 'All Projects' },

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

    { label: LanguageLabel.WINDOW_ADMINISTRATION, italian: '', english: Name.OUTBLUE + ' administration panel' },
    { label: LanguageLabel.WINDOW_PROJECTS, italian: '', english: Config.NAME + '\'s Projects register' },

    // PRIORITIES
    { label: LanguageLabel.PRIORITY_HIGHER, italian: '', english: 'Higher' },
    { label: LanguageLabel.PRIORITY_HIGH, italian: '', english: 'High' },
    { label: LanguageLabel.PRIORITY_MEDIUM, italian: '', english: 'Medium' },
    { label: LanguageLabel.PRIORITY_LOW, italian: '', english: 'Low' },
    { label: LanguageLabel.PRIORITY_LOWER, italian: '', english: 'Lower' },
  ];
}
