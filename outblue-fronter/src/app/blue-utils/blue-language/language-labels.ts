import { LicenceTag } from '../blue-licence/licence-tag';
import { Config } from './../blue-enum/word/config';
import { Tag } from './../blue-enum/word/tag';
export class LanguageLabels {
  public static NULL = 'null';

  // LOGIN PAGE
  public static WELCOME_MESSAGE_STANDARD = 'welcome-message-standard';
  public static WELCOME_MESSAGE_ALICE = 'welcome-message-' + Config.ALICE;
  public static WELCOME_MESSAGE_SIMPLE_M = 'welcome-message-simple-' + Config.MALE;
  public static WELCOME_MESSAGE_SIMPLE_F = 'welcome-message-simple-' + Config.FEMALE;

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

  // WINDOW of PREFERENCE
  public static PREFERENCE_PROJECTS = 'preference-projects';

  // SIDEBAR of TASKS
  public static SIDEBAR_MAIN_SHORT = 'sidebar-main-short';
  public static SIDEBAR_MAIN_COMPLETE = 'sidebar-main-complete';
  public static SIDEBAR_PROJECTS_SHORT = 'sidebar-projects-short';
  public static SIDEBAR_PROJECTS_COMPLETE = 'sidebar-projects-complete';
  public static SIDEBAR_TASKS_SHORT = 'sidebar-tasks-short';
  public static SIDEBAR_TASKS_COMPLETE = 'sidebar-tasks-complete';
  public static SIDEBAR_VERSIONS_SHORT = 'sidebar-versions-short';
  public static SIDEBAR_VERSIONS_COMPLETE = 'sidebar-versions-complete';

  public static SIDEBAR_EXTEND = 'sidebar-extend'; // not linked

  // CONTEXT MENU of PROJECTBAR
  public static CONTEXT_OPENPANEL = 'context-openpanel';
  public static CONTEXT_OPENPANEL_TOOLTIP = 'context-openpanel' + Config.TOOLTIP;
  public static CONTEXT_CLOSEPANEL = 'context-closepanel';
  public static CONTEXT_CLOSEPANEL_TOOLTIP = 'context-closepanel' + Config.TOOLTIP;
  public static CONTEXT_COPYNAME = 'context-copyname';
  public static CONTEXT_COPYNAME_TOOLTIP = 'context-copyname' + Config.TOOLTIP;
  public static CONTEXT_SUPERPROJECTS = 'context-superprojects';
  public static CONTEXT_SUPERPROJECTS_TOOLTIP = 'context-superprojects' + Config.TOOLTIP;
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
}