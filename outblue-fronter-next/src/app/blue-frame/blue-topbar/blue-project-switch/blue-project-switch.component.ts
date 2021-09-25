import { MatDialog } from '@angular/material/dialog';
import { NewProjectFormComponent } from './../../blue-form/new-project-form/new-project-form.component';
import { ProjectService } from './../../../blue-utils/blue-service/project.service';
import { User } from './../../../blue-utils/blue-object/User';
// tslint:disable: max-line-length
import { ContextButton } from './../../../blue-utils/blue-object/button/ContextButton';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { List } from './../../../blue-utils/blue-enum/list';
import { Component, ViewChild, OnInit, ɵRender3ComponentFactory } from '@angular/core';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { MatExpansionPanel } from '@angular/material/expansion';
import { UserService } from 'src/app/blue-utils/blue-service/user.service';
import { Project } from 'src/app/blue-utils/blue-object/record/Project';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-project-switch',
  templateUrl: './blue-project-switch.component.html',
  styleUrls: ['./blue-project-switch.component.css']
})
export class ProjectSwitchComponent implements OnInit {
  @ViewChild('projectBar') projectBar: MatExpansionPanel;

  tags = Tag;
  labels = LanguageLabel;

  contextButton = List.PROJECTBAR_CONTEXT_BUTTONS;

  user: User;

  project: Project;
  projects: Project[];
  leaderProjects: Project[];
  superProjects: Project[];
  subProjects: Project[];
  middleProjects: Project[];
  recentProjects: Project[];

  opened = false;
  disabled = false;
  loaded = false;

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private clipboard: Clipboard,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
    this.projectService.getProject().subscribe((project: Project) => {
      this.project = project;
      this.setDisabled();
    });
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.leaderProjects = this.projects.filter(project =>
        !project.subprojectOf
      );
      this.setDisabled();
      // TODO
      let recent = this.projects.filter(project =>
        true
      );
      recent = recent.sort((p1, p2) => {
        if (p1.updateDate > p2.updateDate) {
          return -1;
        }
        return 1;
      });
      recent.splice(5);
      this.recentProjects = recent;
    });
    this.projectService.getSuperProjects().subscribe((superProjects: Project[]) => {
      this.superProjects = superProjects;
    });
    this.projectService.getSubProjects().subscribe((subProjects: Project[]) => {
      this.subProjects = subProjects;
    });
    this.projectService.getMiddleProjects().subscribe((middleProjects: Project[]) => {
      this.middleProjects = middleProjects;
    });
    this.projectService.getLoaded().subscribe((loaded: boolean) => {
      this.loaded = loaded;
      this.setDisabled();
    });
  }

  setProject(project: Project, projectList?: MatExpansionPanel) {
    this.projectService.setProject(project);
    if (this.projectBar) {
      this.projectBar.close();
    }
    if (projectList) {
      projectList.close();
    }
  }

  getContextTitle(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? button.alt.title : button.title;
  }
  getContextIcon(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? button.alt.icon : button.icon;
  }
  getContextTooltip(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? button.alt.tooltip : button.tooltip;
  }
  getContextAction(button: ContextButton, event: any, projectList: MatExpansionPanel) {
    switch (button.tag) {
      case Tag.CONTEXT_TOGGLE: {
        this.projectBar.toggle();
        break;
      }
      case Tag.CONTEXT_ADMINISTRATION: {
        this.openAdministrationWindow();
        break;
      }
      case Tag.CONTEXT_PROJECTS: {
        this.openProjectsWindow();
        break;
      }
      case Tag.CONTEXT_CLIPBOARD: {
        this.clipboard.copy(this.getSwitchProjectName());
        break;
      }
      case Tag.CONTEXT_LEADERPROJECTS:
      case Tag.CONTEXT_SUPERPROJECTS:
      case Tag.CONTEXT_SUBPROJECTS:
      case Tag.CONTEXT_MIDDLEPROJECTS:
      case Tag.CONTEXT_RECENTPROJECTS: {
        projectList.toggle();
        event.stopPropagation();
        break;
      }
      case Tag.CONTEXT_ALLPROJECTS: {
        this.setProject(null);
        break;
      }
      case Tag.CONTEXT_NEWPROJECT: {
        this.openProjectForm();
        break;
      }
    }
  }
  getContextProjectTooltip(project: ContextButton) {
    return LanguageLabel.CONTEXT_GOTOPROJECT_TOOLTIP;
  }
  getContextDisabled(button: ContextButton) {
    switch (button.tag) {
      case Tag.CONTEXT_TOGGLE:
      case Tag.CONTEXT_CLIPBOARD:
      case Tag.CONTEXT_ALLPROJECTS: {
        return this.disabled;
      }
      case Tag.CONTEXT_LEADERPROJECTS:
      case Tag.CONTEXT_RECENTPROJECTS: {
        return this.recentProjects.length === 0 || this.disabled && this.project;
      }
      case Tag.CONTEXT_SUPERPROJECTS: {
        return this.superProjects.length === 0 || this.disabled;
      }
      case Tag.CONTEXT_SUBPROJECTS: {
        return this.subProjects.length === 0 || this.disabled;
      }
      case Tag.CONTEXT_MIDDLEPROJECTS: {
        return this.middleProjects.length === 0 || this.disabled;
      }
    }
  }
  getContextCount(button: ContextButton) {
    switch (button.tag) {
      /*case Tag.CONTEXT_LEADERPROJECTS: {
        return this.superProjects.length;
      }*/
      case Tag.CONTEXT_SUPERPROJECTS: {
        return this.superProjects.length;
      }
      case Tag.CONTEXT_SUBPROJECTS: {
        return this.subProjects.length;
      }
      case Tag.CONTEXT_MIDDLEPROJECTS: {
        return this.middleProjects.length;
      }
    }
  }
  getContextList(button: ContextButton) {
    switch (button.tag) {
      case Tag.CONTEXT_LEADERPROJECTS: {
        return this.leaderProjects;
      }
      case Tag.CONTEXT_SUPERPROJECTS: {
        return this.superProjects;
      }
      case Tag.CONTEXT_SUBPROJECTS: {
        return this.subProjects;
      }
      case Tag.CONTEXT_MIDDLEPROJECTS: {
        return this.middleProjects;
      }
      default: {
        return this.recentProjects;
      }
    }
  }

  private setDisabled(): void {
    const disabled = !this.project || this.projects.length === 0 || !this.loaded;
    if (this.projectBar) {
      this.projectBar.close();
      this.projectBar.disabled = disabled;
    }
    this.disabled = disabled;
  }

  openAdministrationWindow() {
    this.projectBar.close();
    // this.routingService.navigateWindow(RoutingUrl.ADMINISTRATION_WINDOW);
  }

  openProjectsWindow() {
    this.projectBar.close();
    // this.routingService.navigateWindow(RoutingUrl.PROJECTS_WINDOW);
  }

  private openProjectForm() {
    this.dialog.open(NewProjectFormComponent, {
      width: '30%',
      // height: '60%',
      data: {
        icon: 'bolt',
        title: LanguageLabel.FORM_NEWPROJECT
      }
    });
  }

  getSwitchProjectName() {
    if (this.projects.length === 0) {
      return LanguageLabel.SWITCH_NOPROJECTS;
    }
    switch (this.project) {
      case null: {
        return LanguageLabel.SWITCH_ALLPROJECTS;
      }
      default: {
        return this.projectService.getProjectName(this.project, Tag.SWITCH);
      }
    }
  }
  getContextProjectName(project: Project) {
    return this.projectService.getProjectName(project, Tag.CONTEXT);
  }
}
