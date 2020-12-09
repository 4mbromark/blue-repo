import { ContextButton } from './../blue-object/button/ContextButton';
import { WindowLeftButton } from '../blue-object/button/WindowLeftButton';
import { LanguageTag } from '../blue-language/language-tag';
// tslint:disable: max-line-length
import { LanguageLabel } from '../blue-language/language-labels';
import { LanguageButton } from '../blue-object/button/LanguageButton';
import { MessagingButton } from '../blue-object/button/MessagingButton';
import { SidebarButton } from '../blue-object/button/SidebarButton';
import { Tag } from './word/tag';

export class List {
  public static SIDEBAR_BUTTONS: SidebarButton[] = [
    /*{ type: 'main', icon: 'book', title: LanguageLabel.SIDEBAR_MAIN_SHORT, tooltip: LanguageLabel.SIDEBAR_MAIN_COMPLETE },
    { type: 'main', icon: 'bolt', title: LanguageLabel.SIDEBAR_PROJECTS_SHORT, tooltip: LanguageLabel.SIDEBAR_PROJECTS_COMPLETE },*/
    { type: 'main', icon: 'check', title: LanguageLabel.SIDEBAR_TASKS_SHORT, tooltip: LanguageLabel.SIDEBAR_TASKS_COMPLETE },
    { type: 'main', icon: 'stream', title: LanguageLabel.SIDEBAR_VERSIONS_SHORT, tooltip: LanguageLabel.SIDEBAR_VERSIONS_COMPLETE },
    /*{ type: 'main', icon: 'calendar', title: LanguageLabel.SIDEBAR_CALENDAR_SHORT, name: LanguageLabel.SIDEBAR_CALENDAR_COMPLETE },*/
  ];

  public static MESSAGING_BUTTONS: MessagingButton[] = [
    { type: 'main', icon: 'bell', title: LanguageLabel.MESSAGING_NOTIFICATIONS },
    { type: 'main', icon: 'bullhorn', title: LanguageLabel.MESSAGING_COMMUNICATIONS, tag: Tag.MESSAGING_COMMUNICATIONS },
    { type: 'main', icon: 'user-shield', title: LanguageLabel.MESSAGING_ASSISTANCE },
    { type: 'main', icon: 'comments', title: LanguageLabel.MESSAGING_CHAT },
    { type: 'main', icon: 'dice', title: LanguageLabel.MESSAGING_CASUAL },
  ];

  public static LANGUAGE_BUTTONS: LanguageButton[] = [
    { type: 'main', title: LanguageLabel.LANGUAGE_ITALIAN, language: LanguageTag.ITALIAN, code: 'IT'},
    { type: 'main', title: LanguageLabel.LANGUAGE_ENGLISH, language: LanguageTag.ENGLISH, code: 'EN'},
  ];

  public static PREFERENCE_BUTTONS: WindowLeftButton[] = [
    { type: 'main', icon: 'bolt', title: LanguageLabel.PREFERENCE_PROJECTS, tag: Tag.PREFERENCE_PROJECTS },
  ];

  public static PROJECTBAR_CONTEXT_BUTTONS: ContextButton[] = [
    { type: 'main', icon: 'mouse-pointer', title: LanguageLabel.CONTEXT_OPENPANEL, tooltip: LanguageLabel.CONTEXT_OPENPANEL_TOOLTIP,
      alt: { icon: 'times', title: LanguageLabel.CONTEXT_CLOSEPANEL, tooltip: LanguageLabel.CONTEXT_CLOSEPANEL_TOOLTIP}, tag: Tag.CONTEXT_TOGGLE },
    { type: 'line' },
    { type: 'main', icon: 'shield-alt', title: LanguageLabel.CONTEXT_ADMINISTRATION, tooltip: LanguageLabel.CONTEXT_ADMINISTRATION_TOOLTIP, tag: Tag.CONTEXT_ADMINISTRATION },
    { type: 'main', icon: 'bolt', title: LanguageLabel.CONTEXT_PROJECTLIST, tooltip: LanguageLabel.CONTEXT_PROJECTLIST_TOOLTIP, tag: Tag.CONTEXT_PROJECTS },
    { type: 'line' },
    { type: 'main', icon: 'copy', title: LanguageLabel.CONTEXT_COPYNAME, tooltip: LanguageLabel.CONTEXT_COPYNAME_TOOLTIP, tag: Tag.CONTEXT_CLIPBOARD },
    { type: 'line' },
    { type: 'main', icon: 'arrow-up', title: LanguageLabel.CONTEXT_SUPERPROJECTS, tooltip: LanguageLabel.CONTEXT_SUPERPROJECTS_TOOLTIP, tag: Tag.CONTEXT_SUPERPROJECTS },
    { type: 'main', icon: 'arrows-alt-h', title: LanguageLabel.CONTEXT_MIDDLEPROJECTS, tooltip: LanguageLabel.CONTEXT_MIDDLEPROJECTS_TOOLTIP, tag: Tag.CONTEXT_MIDDLEPROJECTS },
    { type: 'main', icon: 'arrow-down', title: LanguageLabel.CONTEXT_SUBPROJECTS, tooltip: LanguageLabel.CONTEXT_SUBPROJECTS_TOOLTIP, tag: Tag.CONTEXT_SUBPROJECTS },
    { type: 'main', icon: 'history', title: LanguageLabel.CONTEXT_RECENTS, tooltip: LanguageLabel.CONTEXT_RECENTS_TOOLTIP, tag: Tag.CONTEXT_TOGGLEPANEL_NOCOUNT },
    { type: 'line' },
    /*{ type: 'main', icon: 'cog', title: LanguageLabel.CONTEXT_SETTINGS, tooltip: LanguageLabel.CONTEXT_SETTINGS_TOOLTIP },*/
    { type: 'main', icon: 'plus', title: LanguageLabel.CONTEXT_NEWPROJECT, tooltip: LanguageLabel.CONTEXT_NEWPROJECT_TOOLTIP },
    /*{ type: 'main', icon: 'bolt', title: LanguageLabel.CONTEXT_MANAGEPROJECTS, tooltip: LanguageLabel.CONTEXT_MANAGEPROJECTS_TOOLTIP },*/
  ];

}
