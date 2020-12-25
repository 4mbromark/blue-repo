import { LicenceTag } from '../blue-licence/licence-tag';
import { Config } from './../blue-enum/word/config';

export class LanguageLabel {
  public static NULL = 'null';

  public static TITLE_STANDARD = 'title-standard';
  public static TITLE_CUSTOMIZED = 'title-customized';

  // LOGIN PAGE
  public static WELCOME_MESSAGE_STANDARD = 'welcome-message-standard';
  public static WELCOME_MESSAGE_ALICE = 'welcome-message-' + Config.ALICE;
  public static WELCOME_MESSAGE_SIMPLE_M = 'welcome-message-simple-' + Config.MALE;
  public static WELCOME_MESSAGE_SIMPLE_F = 'welcome-message-simple-' + Config.FEMALE;

  public static LOGIN_TOOLTIP = 'login' + Config.TOOLTIP;
  public static LOGIN_USERNAME = 'login-username';
  public static LOGIN_PASSWORD = 'login-password';
  public static LOGIN_PASSWORD_SHOW = 'login-password-show';
  public static LOGIN_PASSWORD_HIDE = 'login-password-hide';
  public static LOGIN_ERROR = 'login-error';
  public static REGISTRATION = 'registration';
  public static REGISTRATION_TOOLTIP = 'registration' + Config.TOOLTIP;

  public static REGISTRATION_TITLE = 'registration-title';

  public static REGISTRATION_NAME = 'registration-name';
  public static REGISTRATION_SURNAME = 'registration-surname';
  public static REGISTRATION_MAIL = 'registration-mail';
  public static REGISTRATION_USERNAME = 'registration-username';
  public static REGISTRATION_PASSWORD = 'registration-password';
  public static REGISTRATION_PASSWORDCONFIRM = 'registration-passwordconfirm';

  // LICENCE
  public static NO_LICENCE = LicenceTag.NO_LICENCE;
  public static NO_LICENCE_DESCRIPTION = LicenceTag.NO_LICENCE + Config.DESCRIPTION;

  public static LICENCE_LIMITED_TRIAL = LicenceTag.LICENCE_LIMITED_TRIAL;
  public static LICENCE_LIMITED_TRIAL_DESCRIPTION = LicenceTag.LICENCE_LIMITED_TRIAL + Config.DESCRIPTION;
  public static LICENCE_EXTENDED_TRIAL = LicenceTag.LICENCE_EXTENDED_TRIAL;
  public static LICENCE_EXTENDED_TRIAL_DESCRIPTION = LicenceTag.LICENCE_EXTENDED_TRIAL + Config.DESCRIPTION;
  public static LICENCE_LIMITED_BETA = LicenceTag.LICENCE_LIMITED_BETA;
  public static LICENCE_LIMITED_BETA_DESCRIPTION = LicenceTag.LICENCE_LIMITED_BETA + Config.DESCRIPTION;
  public static LICENCE_EXTENDED_BETA = LicenceTag.LICENCE_EXTENDED_BETA;
  public static LICENCE_EXTENDED_BETA_DESCRIPTION = LicenceTag.LICENCE_EXTENDED_BETA + Config.DESCRIPTION;
  public static LICENCE_UNLIMITED_BETA = LicenceTag.LICENCE_UNLIMITED_BETA;
  public static LICENCE_UNLIMITED_BETA_DESCRIPTION = LicenceTag.LICENCE_UNLIMITED_BETA + Config.DESCRIPTION;
  public static LICENCE_MONTHLY_RENEWAL = LicenceTag.LICENCE_MONTHLY_RENEWAL;
  public static LICENCE_MONTHLY_RENEWAL_DESCRIPTION = LicenceTag.LICENCE_MONTHLY_RENEWAL + Config.DESCRIPTION;
  public static LICENCE_ANNUAL_RENEWAL = LicenceTag.LICENCE_ANNUAL_RENEWAL;
  public static LICENCE_ANNUAL_RENEWAL_DESCRIPTION = LicenceTag.LICENCE_ANNUAL_RENEWAL + Config.DESCRIPTION;
  public static LICENCE_PROMOTIONAL_RENEWAL = LicenceTag.LICENCE_PROMOTIONAL_RENEWAL;
  public static LICENCE_PROMOTIONAL_RENEWAL_DESCRIPTION = LicenceTag.LICENCE_PROMOTIONAL_RENEWAL + Config.DESCRIPTION;
  public static LICENCE_LIFETIME = LicenceTag.LICENCE_LIFETIME;
  public static LICENCE_LIFETIME_DESCRIPTION = LicenceTag.LICENCE_LIFETIME + Config.DESCRIPTION;
  public static LICENCE_LIFETIME_PROMOTIONAL = LicenceTag.LICENCE_LIFETIME_PROMOTIONAL;
  public static LICENCE_LIFETIME_PROMOTIONAL_DESCRIPTION = LicenceTag.LICENCE_LIFETIME_PROMOTIONAL + Config.DESCRIPTION;
  public static LICENCE_LIFETIME_FREE = LicenceTag.LICENCE_LIFETIME_FREE;
  public static LICENCE_LIFETIME_FREE_DESCRIPTION = LicenceTag.LICENCE_LIFETIME_FREE + Config.DESCRIPTION;

  // LICENCE BAR
  public static LICENCE_CONTRACT = 'licence-contract';
  public static LICENCE_CONTRACT_TOOLTIP = 'licence-contract' + Config.TOOLTIP;
  public static LICENCE_INFO_TOOLTIP = 'licence-info' + Config.TOOLTIP;
  public static LICENCE_NEWTRIAL = 'licence-new-trial';
  public static LICENCE_NEWTRIAL_TOOLTIP = 'licence-new-trial' + Config.TOOLTIP;

  public static LICENCE_STATUS_NONE = 'licence-status-none';
  public static LICENCE_STATUS_WAITING = 'licence-status-waiting';
  public static LICENCE_STATUS_ACTIVE = 'licence-status-active';
  public static LICENCE_STATUS_EXPIRING = 'licence-status-expiring';
  public static LICENCE_STATUS_EXPIRED = 'licence-status-expired';

  public static LICENCE_STATUS_TOOLTIP = 'licence-status' + Config.TOOLTIP;

  // PROJECTS
  public static PROJECT_SETSWITCH = 'project-setproject';
  public static PROJECT_SETSWITCH_TOOLTIP = 'project-setproject' + Config.TOOLTIP;
  public static PROJECT_LEADERPROJECT = 'project-leaderproject';
  public static PROJECT_CURRENTSELECTED = 'project-currentselected';

  // TABLES
  public static TABLE_NOPROJECTS = 'table-noprojects';
  public static TABLE_NOTASKS = 'table-notasks';
  public static TABLE_NOVERSIONS = 'table-noversions';

  public static ROW_CHANGEICON = 'row-changeicon';
  public static ROW_CHANGECOLOR = 'row-changecolor';
  public static ROW_CHANGEPRIORITY = 'row-changepriority';

  // USER MENU
  public static MENU_ACCOUNT = 'menu-account';
  public static MENU_MESSAGING = 'menu-messaging';
  public static MENU_MESSAGING_EXTENDED = 'menu-messaging-extended';
  public static MENU_LANGUAGE = 'menu-language';
  public static MENU_SPACE = 'menu-space';
  public static MENU_PREFERENCES = 'menu-preferences';
  public static MENU_SERVICES = 'menu-services';
  public static MENU_GUIDE = 'menu-guide';
  public static MENU_LICENCE = 'menu-licence';
  public static MENU_SETTINGS = 'menu-settings';
  public static MENU_INFO = 'menu-info';
  public static MENU_STORE = 'menu-store';
  public static MENU_YENA = 'menu-' + Config.YENA;
  public static MENU_LOGOUT = 'menu-logout';

  // WINDOW of MESSAGING
  public static MESSAGING_NOTIFICATIONS = 'notifications-notifications';
  public static MESSAGING_COMMUNICATIONS = 'notifications-communications';
  public static MESSAGING_ASSISTANCE = 'notifications-assistance';
  public static MESSAGING_CHAT = 'notifications-chat';
  public static MESSAGING_CASUAL = 'notifications-casual';

  // WINDOW of LANGUAGE
  public static LANGUAGE_ITALIAN = 'italian';
  public static LANGUAGE_ENGLISH = 'english';

  public static LANGUAGE_UPDATE = 'language-update';

  // WINDOW of PREFERENCE
  public static PREFERENCE_PROJECTS = 'preference-projects';

  // SIDEBAR
  public static SIDEBAR_ADMIN_SHORT = 'sidebar-admin-short';
  public static SIDEBAR_ADMIN_COMPLETE = 'sidebar-admin-complete';
  public static SIDEBAR_PROJECTS_SHORT = 'sidebar-projects-short';
  public static SIDEBAR_PROJECTS_COMPLETE = 'sidebar-projects-complete';
  public static SIDEBAR_TASKS_SHORT = 'sidebar-tasks-short';
  public static SIDEBAR_TASKS_COMPLETE = 'sidebar-tasks-complete';
  public static SIDEBAR_VERSIONS_SHORT = 'sidebar-versions-short';
  public static SIDEBAR_VERSIONS_COMPLETE = 'sidebar-versions-complete';

  public static SIDEBAR_EXTEND_SHORT = 'sidebar-extend-short';
  public static SIDEBAR_EXTEND_COMPLETE = 'sidebar-extend-complete';
  public static SIDEBAR_REDUCE_SHORT = 'sidebar-reduce-short';
  public static SIDEBAR_REDUCE_COMPLETE = 'sidebar-reduce-complete';
  public static SIDEBAR_SEARCH_SHORT = 'sidebar-search-short';
  public static SIDEBAR_SEARCH_COMPLETE = 'sidebar-search-complete';
  public static SIDEBAR_FILTER_SHORT = 'sidebar-filter-short';
  public static SIDEBAR_FILTER_COMPLETE = 'sidebar-filter-complete';
  public static SIDEBAR_RELOAD_SHORT = 'sidebar-reload-short';
  public static SIDEBAR_RELOAD_COMPLETE = 'sidebar-reload-complete';

  // SWITCH
  public static SWITCH_NOPROJECTS = 'switch-noprojects';
  public static SWITCH_ALLPROJECTS = 'switch-allprojects';

  // CONTEXT MENU of PROJECTBAR
  public static CONTEXT_OPENPANEL = 'context-openpanel';
  public static CONTEXT_OPENPANEL_TOOLTIP = 'context-openpanel' + Config.TOOLTIP;
  public static CONTEXT_CLOSEPANEL = 'context-closepanel';
  public static CONTEXT_CLOSEPANEL_TOOLTIP = 'context-closepanel' + Config.TOOLTIP;
  public static CONTEXT_ADMINISTRATION = 'context-administration';
  public static CONTEXT_ADMINISTRATION_TOOLTIP = 'context-administration' + Config.TOOLTIP;
  public static CONTEXT_PROJECTLIST = 'context-projectlist';
  public static CONTEXT_PROJECTLIST_TOOLTIP = 'context-projectlist' + Config.TOOLTIP;
  public static CONTEXT_COPYNAME = 'context-copyname';
  public static CONTEXT_COPYNAME_TOOLTIP = 'context-copyname' + Config.TOOLTIP;
  public static CONTEXT_ALLPROJECTS = 'context-allprojects';
  public static CONTEXT_ALLPROJECTS_TOOLTIP = 'context-allprojects' + Config.TOOLTIP;
  public static CONTEXT_LEADERPROJECTS = 'context-leaderprojects';
  public static CONTEXT_LEADERPROJECTS_TOOLTIP = 'context-leaderprojects' + Config.TOOLTIP;
  public static CONTEXT_SUPERPROJECTS = 'context-superprojects';
  public static CONTEXT_SUPERPROJECTS_TOOLTIP = 'context-superprojects' + Config.TOOLTIP;
  public static CONTEXT_MIDDLEPROJECTS = 'context-middleprojects';
  public static CONTEXT_MIDDLEPROJECTS_TOOLTIP = 'context-middleprojects' + Config.TOOLTIP;
  public static CONTEXT_SUBPROJECTS = 'context-subprojects';
  public static CONTEXT_SUBPROJECTS_TOOLTIP = 'context-subprojects' + Config.TOOLTIP;
  public static CONTEXT_RECENTS = 'context-recents';
  public static CONTEXT_RECENTS_TOOLTIP = 'context-recents' + Config.TOOLTIP;
  public static CONTEXT_SETTINGS = 'context-settings';
  public static CONTEXT_SETTINGS_TOOLTIP = 'context-settings' + Config.TOOLTIP;
  public static CONTEXT_NEWPROJECT = 'context-newproject';
  public static CONTEXT_NEWPROJECT_TOOLTIP = 'context-newproject' + Config.TOOLTIP;
  public static CONTEXT_MANAGEPROJECTS = 'context-manageprojects';
  public static CONTEXT_MANAGEPROJECTS_TOOLTIP = 'context-manageprojects' + Config.TOOLTIP;

  public static CONTEXT_GOTOPROJECT_TOOLTIP = 'context-gotoproject';

  // PROJECT STATUS
  public static PROJECT_CREATED = 'project-created';
  public static PROJECT_CREATED_DESCRIPTION = 'project-created' + Config.DESCRIPTION;
  public static PROJECT_APPROVAL = 'project-approval';
  public static PROJECT_APPROVAL_DESCRIPTION = 'project-approval' + Config.DESCRIPTION;

  public static PROJECT_ACCEPTED = 'project-accepted';
  public static PROJECT_ACCEPTED_DESCRIPTION = 'project-accepted' + Config.DESCRIPTION;
  public static PROJECT_REFUSED = 'project-refused';
  public static PROJECT_REFUSED_DESCRIPTION = 'project-refused' + Config.DESCRIPTION;

  public static PROJECT_READY = 'project-ready';
  public static PROJECT_READY_DESCRIPTION = 'project-ready' + Config.DESCRIPTION;
  public static PROJECT_ACTIVE = 'project-active';
  public static PROJECT_ACTIVE_DESCRIPTION = 'project-active' + Config.DESCRIPTION;
  public static PROJECT_WAITING = 'project-waiting';
  public static PROJECT_WAITING_DESCRIPTION = 'project-waiting' + Config.DESCRIPTION;
  public static PROJECT_SUSPENDED = 'project-suspended';
  public static PROJECT_SUSPENDED_DESCRIPTION = 'project-suspended' + Config.DESCRIPTION;
  public static PROJECT_DELETED = 'project-deleted';
  public static PROJECT_DELETED_DESCRIPTION = 'project-deleted' + Config.DESCRIPTION;
  public static PROJECT_TRANSFERRED = 'project-transferred';
  public static PROJECT_TRANSFERRED_DESCRIPTION = 'project-transferred' + Config.DESCRIPTION;
  public static PROJECT_COMPLETED = 'project-completed';
  public static PROJECT_COMPLETED_DESCRIPTION = 'project-completed' + Config.DESCRIPTION;

  public static WINDOW_ADMINISTRATION = 'window-administration';
  public static WINDOW_PROJECTS = 'window-projects';
}
