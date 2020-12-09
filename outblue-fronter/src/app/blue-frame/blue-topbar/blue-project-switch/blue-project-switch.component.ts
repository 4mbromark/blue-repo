import { RoutingUrl } from './../../../blue-utils/blue-routing/routing-url';
import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';
import { ProjectService } from './../../../blue-utils/blue-service/project.service';
import { User } from './../../../blue-utils/blue-object/User';
import { Name } from './../../../blue-utils/blue-enum/word/name';
import { MatDialog } from '@angular/material/dialog';
// tslint:disable: max-line-length
import { ContextButton } from './../../../blue-utils/blue-object/button/ContextButton';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { List } from './../../../blue-utils/blue-enum/list';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ProjectsComponent } from '../../blue-projects/projects.component';
import { Config } from 'src/app/blue-utils/blue-enum/word/config';
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

  contextButton = List.PROJECTBAR_CONTEXT_BUTTONS;

  user: User;

  project: Project;
  projects: Project[];
  superProjects: Project[];
  subProjects: Project[];
  middleProjects: Project[];

  opened = false;
  loaded = false;

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private clipboard: Clipboard,
    private routingService: RoutingService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
    this.projectService.getProject().subscribe((project: Project) => {
      this.project = project;
      setTimeout(() => {
        this.loaded = true;
      }, 1500);
    });
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
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
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  setProject(project: Project, projectList: MatExpansionPanel) {
    this.loaded = false;
    this.projectService.setProject(project);
    this.projectBar.close();
    projectList.close();
  }

  getContextTitle(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? this.gbl(button.alt.title) : this.gbl(button.title);
  }
  getContextIcon(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? button.alt.icon : button.icon;
  }
  getContextTooltip(button: ContextButton) {
    if (!this.project) {
      return '';
    }
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? this.gbl(button.alt.tooltip) : this.gbl(button.tooltip).replace(Config.PROJECT, this.project.name.toUpperCase());
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
        this.clipboard.copy(this.project.name);
        break;
      }
      case Tag.CONTEXT_SUPERPROJECTS:
      case Tag.CONTEXT_SUBPROJECTS:
      case Tag.CONTEXT_MIDDLEPROJECTS:
      case Tag.CONTEXT_TOGGLEPANEL_NOCOUNT: {
        projectList.toggle();
        event.stopPropagation();
        break;
      }
    }
  }
  getContextProjectTooltip(project: ContextButton) {
    return this.gbl(LanguageLabel.CONTEXT_GOTOPROJECT_TOOLTIP).replace(Config.PROJECT, project.name.toUpperCase());
  }
  getContextDisabled(button: ContextButton) {
    return button.tag === Tag.CONTEXT_SUPERPROJECTS && this.superProjects.length === 0 ||
    button.tag === Tag.CONTEXT_SUBPROJECTS && this.subProjects.length === 0 ||
    button.tag === Tag.CONTEXT_MIDDLEPROJECTS && this.middleProjects.length === 0;
  }
  getContextCount(button: ContextButton) {
    switch (button.tag) {
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
        return this.projects;
      }
    }
  }

  openAdministrationWindow() {
    this.projectBar.close();
    this.routingService.navigateWindow(RoutingUrl.ADMINISTRATION_WINDOW);
  }

  openProjectsWindow() {
    this.projectBar.close();
    this.routingService.navigateWindow(RoutingUrl.PROJECTS_WINDOW);
  }

  getSwitchProjectName() {
    return this.projectService.getProjectName(this.project, 'SWITCH');
  }
  getContextProjectName(project: Project) {
    return this.projectService.getProjectName(project, 'CONTEXT');
  }
}
