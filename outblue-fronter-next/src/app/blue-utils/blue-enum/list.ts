import { NewTaskFormComponent } from './../../blue-frame/blue-form/new-task-form/new-task-form.component';
import { NewProjectFormComponent } from './../../blue-frame/blue-form/new-project-form/new-project-form.component';
import { RoutingUrl } from './../blue-routing/routing-url';
import { LanguageTag } from '../blue-language/language-tag';
// tslint:disable: max-line-length
import { LanguageLabel } from '../blue-language/language-labels';
import { LanguageButton } from '../blue-object/button/LanguageButton';
import { SidebarButton } from '../blue-object/button/SidebarButton';
import { Tag } from './word/tag';
import { Button } from '../blue-object/button/Button';

export class List {
  public static SIDEBAR_BUTTONS: SidebarButton[] = [
    { type: 'main', icon: 'shield-alt', title: LanguageLabel.SIDEBAR_ADMIN_SHORT, tooltip: LanguageLabel.SIDEBAR_ADMIN_COMPLETE, routerlink: RoutingUrl.ADMIN_MODULE },
    { type: 'main', icon: 'bolt', title: LanguageLabel.SIDEBAR_PROJECTS_SHORT, tooltip: LanguageLabel.SIDEBAR_PROJECTS_COMPLETE, routerlink: RoutingUrl.PROJECTS_MODULE },
    { type: 'main', icon: 'check', title: LanguageLabel.SIDEBAR_TASKS_SHORT, tooltip: LanguageLabel.SIDEBAR_TASKS_COMPLETE, routerlink: RoutingUrl.TASKLIST_MODULE }
  ];

  public static SIDEBAR_TOOLS: SidebarButton[] = [
    { type: 'main', icon: 'plus', title: LanguageLabel.SIDEBAR_NEW_SHORT, tooltip: LanguageLabel.SIDEBAR_NEW_COMPLETE,
      alt: {icon: 'times', title: LanguageLabel.SIDEBAR_NEW_UNDO_SHORT, tooltip: LanguageLabel.SIDEBAR_NEW_UNDO_COMPLETE},
      show: [
        { type: 'main', icon: 'bolt', title: LanguageLabel.SIDEBAR_NEW_PROJECT_SHORT, tooltip: LanguageLabel.SIDEBAR_NEW_PROJECT_COMPLETE,
          form: { component: NewProjectFormComponent, icon: 'bolt', title: LanguageLabel.FORM_NEWPROJECT }, tag: Tag.SIDEBAR_NEW_PROJECT },
        { type: 'main', icon: 'check', title: LanguageLabel.SIDEBAR_NEW_TASK_SHORT, tooltip: LanguageLabel.SIDEBAR_NEW_TASK_COMPLETE,
          form: { component: NewTaskFormComponent, icon: 'check', title: LanguageLabel.FORM_NEWTASK }, tag: Tag.SIDEBAR_NEW_TASK },
      ], tag: Tag.SIDEBAR_NEW },
    { type: 'line' },
    { type: 'main', icon: 'search', title: LanguageLabel.SIDEBAR_SEARCH_SHORT, tooltip: LanguageLabel.SIDEBAR_SEARCH_COMPLETE, tag: Tag.SIDEBAR_SEARCH },
    { type: 'main', icon: 'filter', title: LanguageLabel.SIDEBAR_FILTER_SHORT, tooltip: LanguageLabel.SIDEBAR_FILTER_COMPLETE, tag: Tag.SIDEBAR_FILTER },
    { type: 'line' },
    { type: 'main', icon: 'sync-alt', title: LanguageLabel.SIDEBAR_RELOAD_SHORT, tooltip: LanguageLabel.SIDEBAR_RELOAD_COMPLETE, tag: Tag.SIDEBAR_RELOAD },
    { type: 'line' },
    { type: 'main', icon: 'angle-double-right', title: LanguageLabel.SIDEBAR_EXTEND_SHORT, tooltip: LanguageLabel.SIDEBAR_EXTEND_COMPLETE,
      alt: {icon: 'angle-double-left', title: LanguageLabel.SIDEBAR_REDUCE_SHORT, tooltip: LanguageLabel.SIDEBAR_REDUCE_COMPLETE}, tag: Tag.SIDEBAR_TOGGLE },
  ];

  public static MESSAGING_BUTTONS: Button[] = [
    { type: 'main', icon: 'bell', title: LanguageLabel.MESSAGING_NOTIFICATIONS },
    { type: 'main', icon: 'bullhorn', title: LanguageLabel.MESSAGING_COMMUNICATIONS, tag: Tag.MESSAGING_COMMUNICATIONS },
    { type: 'main', icon: 'user-shield', title: LanguageLabel.MESSAGING_ASSISTANCE },
  ];

  public static LANGUAGE_BUTTONS: LanguageButton[] = [
    { type: 'main', title: LanguageLabel.LANGUAGE_ITALIAN, language: LanguageTag.ITALIAN, code: 'IT'},
    { type: 'main', title: LanguageLabel.LANGUAGE_ENGLISH, language: LanguageTag.ENGLISH, code: 'EN'},
  ];

  public static PROJECTBAR_CONTEXT_BUTTONS: Button[] = [
    { type: 'main', icon: 'mouse-pointer', title: LanguageLabel.CONTEXT_OPENPANEL, tooltip: LanguageLabel.CONTEXT_OPENPANEL_TOOLTIP,
      alt: { icon: 'times', title: LanguageLabel.CONTEXT_CLOSEPANEL, tooltip: LanguageLabel.CONTEXT_CLOSEPANEL_TOOLTIP}, tag: Tag.CONTEXT_TOGGLE },
    { type: 'line' },
    { type: 'main', icon: 'shield-alt', title: LanguageLabel.CONTEXT_ADMINISTRATION, tooltip: LanguageLabel.CONTEXT_ADMINISTRATION_TOOLTIP, tag: Tag.CONTEXT_ADMINISTRATION },
    { type: 'main', icon: 'bolt', title: LanguageLabel.CONTEXT_PROJECTLIST, tooltip: LanguageLabel.CONTEXT_PROJECTLIST_TOOLTIP, tag: Tag.CONTEXT_PROJECTS },
    { type: 'line' },
    { type: 'main', icon: 'copy', title: LanguageLabel.CONTEXT_COPYNAME, tooltip: LanguageLabel.CONTEXT_COPYNAME_TOOLTIP, tag: Tag.CONTEXT_CLIPBOARD },
    { type: 'line' },
    { type: 'main', icon: 'certificate', title: LanguageLabel.CONTEXT_LEADERPROJECTS, tooltip: LanguageLabel.CONTEXT_LEADERPROJECTS_TOOLTIP, tag: Tag.CONTEXT_LEADERPROJECTS },
    { type: 'main', icon: 'arrow-up', title: LanguageLabel.CONTEXT_SUPERPROJECTS, tooltip: LanguageLabel.CONTEXT_SUPERPROJECTS_TOOLTIP, tag: Tag.CONTEXT_SUPERPROJECTS },
    /*{ type: 'main', icon: 'arrows-alt-h', title: LanguageLabel.CONTEXT_MIDDLEPROJECTS, tooltip: LanguageLabel.CONTEXT_MIDDLEPROJECTS_TOOLTIP, tag: Tag.CONTEXT_MIDDLEPROJECTS },*/
    { type: 'main', icon: 'arrow-down', title: LanguageLabel.CONTEXT_SUBPROJECTS, tooltip: LanguageLabel.CONTEXT_SUBPROJECTS_TOOLTIP, tag: Tag.CONTEXT_SUBPROJECTS },
    { type: 'main', icon: 'clipboard-list', title: LanguageLabel.CONTEXT_ALLPROJECTS, tooltip: LanguageLabel.CONTEXT_ALLPROJECTS_TOOLTIP, tag: Tag.CONTEXT_ALLPROJECTS },
    { type: 'main', icon: 'history', title: LanguageLabel.CONTEXT_RECENTS, tooltip: LanguageLabel.CONTEXT_RECENTS_TOOLTIP, tag: Tag.CONTEXT_RECENTPROJECTS },
    { type: 'line' },
    /*{ type: 'main', icon: 'cog', title: LanguageLabel.CONTEXT_SETTINGS, tooltip: LanguageLabel.CONTEXT_SETTINGS_TOOLTIP },*/
    { type: 'main', icon: 'plus', title: LanguageLabel.CONTEXT_NEWPROJECT, tooltip: LanguageLabel.CONTEXT_NEWPROJECT_TOOLTIP, tag: Tag.CONTEXT_NEWPROJECT },
    /*{ type: 'main', icon: 'bolt', title: LanguageLabel.CONTEXT_MANAGEPROJECTS, tooltip: LanguageLabel.CONTEXT_MANAGEPROJECTS_TOOLTIP },*/
  ];

}
