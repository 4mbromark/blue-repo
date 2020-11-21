import { ContextButton } from './../blue-object/button/ContextButton';
import { WindowLeftButton } from '../blue-object/button/WindowLeftButton';
import { LanguageTag } from '../blue-language/language-tag';
// tslint:disable: max-line-length
import { LanguageLabels } from '../blue-language/language-labels';
import { LanguageButton } from '../blue-object/button/LanguageButton';
import { MessagingButton } from '../blue-object/button/MessagingButton';
import { SelectorButton } from '../blue-object/button/SelectorButton';
import { SidebarButton } from '../blue-object/button/SidebarButton';
import { Tag } from './tag';

export class List {
  public static TOPBAR_SELECTORS: SelectorButton[] = [
    /*{ code: 'tasks', title: LanguageLabels.SELECTOR_TASKS, icon: 'check-circle' },
    { code: 'wallet', title: LanguageLabels.SELECTOR_WALLET, icon: 'wallet' },
    { code: 'people', title: LanguageLabels.SELECTOR_PEOPLE, icon: 'users' },
    { code: 'projects', title: LanguageLabels.SELECTOR_PROJECTS, icon: 'stream' }*/
  ];

  public static SIDEBAR_BUTTONS: SidebarButton[] = [
    { type: 'main', icon: 'tasks', title: LanguageLabels.SIDEBAR_ALL_SHORT, name: LanguageLabels.SIDEBAR_ALL_COMPLETE },
    { type: 'main', icon: 'calendar', title: LanguageLabels.SIDEBAR_CALENDAR_SHORT, name: LanguageLabels.SIDEBAR_CALENDAR_COMPLETE },
  ];

  public static MESSAGING_BUTTONS: MessagingButton[] = [
    { type: 'main', icon: 'bell', title: LanguageLabels.MESSAGING_NOTIFICATIONS },
    { type: 'main', icon: 'bullhorn', title: LanguageLabels.MESSAGING_COMMUNICATIONS, tag: Tag.MESSAGING_COMMUNICATIONS },
    { type: 'main', icon: 'user-shield', title: LanguageLabels.MESSAGING_ASSISTANCE },
    { type: 'main', icon: 'comments', title: LanguageLabels.MESSAGING_CHAT },
    { type: 'main', icon: 'dice', title: LanguageLabels.MESSAGING_CASUAL },
  ];

  public static LANGUAGE_BUTTONS: LanguageButton[] = [
    { type: 'main', title: LanguageLabels.LANGUAGE_ITALIAN, language: LanguageTag.ITALIAN, code: 'IT'},
    { type: 'main', title: LanguageLabels.LANGUAGE_ENGLISH, language: LanguageTag.ENGLISH, code: 'EN'},
  ];

  public static PREFERENCE_BUTTONS: WindowLeftButton[] = [
    { type: 'main', icon: 'bolt', title: LanguageLabels.PREFERENCE_PROJECTS, tag: Tag.PREFERENCE_PROJECTS },
  ];

  public static PROJECTBAR_CONTEXT_BUTTONS: ContextButton[] = [
    { type: 'main', icon: 'mouse-pointer', title: LanguageLabels.CONTEXT_OPENPANEL, tooltip: LanguageLabels.CONTEXT_OPENPANEL_TOOLTIP,
      alt: { icon: 'times', title: LanguageLabels.CONTEXT_CLOSEPANEL, tooltip: LanguageLabels.CONTEXT_CLOSEPANEL_TOOLTIP}, tag: Tag.CONTEXT_TOGGLE },
    { type: 'line' },
    { type: 'main', icon: 'copy', title: LanguageLabels.CONTEXT_COPYNAME, tooltip: LanguageLabels.CONTEXT_COPYNAME_TOOLTIP },
    { type: 'line' },
    { type: 'main', icon: 'arrow-up', title: LanguageLabels.CONTEXT_SUPERPROJECTS, tooltip: LanguageLabels.CONTEXT_SUPERPROJECTS_TOOLTIP, tag: Tag.CONTEXT_TOGGLEPANEL },
    { type: 'main', icon: 'arrow-down', title: LanguageLabels.CONTEXT_SUBPROJECTS, tooltip: LanguageLabels.CONTEXT_SUBPROJECTS_TOOLTIP, tag: Tag.CONTEXT_TOGGLEPANEL },
    { type: 'main', icon: 'history', title: LanguageLabels.CONTEXT_RECENTS, tooltip: LanguageLabels.CONTEXT_RECENTS_TOOLTIP, tag: Tag.CONTEXT_TOGGLEPANEL_NOCOUNT },
    { type: 'line' },
    { type: 'main', icon: 'cog', title: LanguageLabels.CONTEXT_SETTINGS, tooltip: LanguageLabels.CONTEXT_SETTINGS_TOOLTIP },
    { type: 'main', icon: 'plus', title: LanguageLabels.CONTEXT_NEWPROJECT, tooltip: LanguageLabels.CONTEXT_NEWPROJECT_TOOLTIP },
    { type: 'main', icon: 'bolt', title: LanguageLabels.CONTEXT_MANAGEPROJECTS, tooltip: LanguageLabels.CONTEXT_MANAGEPROJECTS_TOOLTIP },
  ];

}
