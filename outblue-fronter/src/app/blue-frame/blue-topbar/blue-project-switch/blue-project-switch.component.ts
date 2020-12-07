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

  opened = false;
  loaded = false;

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private languageService: LanguageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
    this.projectService.getProject().subscribe((project: Project) => {
      this.project = project;
      setTimeout(() => {
        this.loaded = true;
      }, 2000);
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
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  setProject(project: Project, projectList: MatExpansionPanel) {
    this.loaded = false;
    this.projectService.setProject(project);
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
    if (button.tag === Tag.CONTEXT_TOGGLE) {
      this.projectBar.toggle();
    }
    if (button.tag === Tag.CONTEXT_SUPERPROJECTS || button.tag === Tag.CONTEXT_SUBPROJECTS || button.tag === Tag.CONTEXT_TOGGLEPANEL_NOCOUNT) {
      projectList.toggle();
      event.stopPropagation();
    }
  }
  getContextProjectTooltip(project: ContextButton) {
    return this.gbl(LanguageLabel.CONTEXT_GOTOPROJECT_TOOLTIP).replace(Config.PROJECT, project.name.toUpperCase());
  }
  getContextDisabled(button: ContextButton) {
    return button.tag === Tag.CONTEXT_SUPERPROJECTS && this.superProjects.length === 0 || button.tag === Tag.CONTEXT_SUBPROJECTS && this.subProjects.length === 0;
  }
  getContextCount(button: ContextButton) {
    switch (button.tag) {
      case Tag.CONTEXT_SUPERPROJECTS: {
        return this.superProjects.length;
      }
      case Tag.CONTEXT_SUBPROJECTS: {
        return this.subProjects.length;
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
      default: {
        return this.projects;
      }
    }
  }

  openAdministrationWindow() {
    this.projectBar.close();
    this.dialog.open(ProjectsComponent, {
      width: '95%',
      height: '88%',
      data: {
        icon: 'shield-alt',
        title: this.gbl(LanguageLabel.WINDOW_ADMINISTRATION)
      }
    });
  }

  openProjectsWindow() {
    this.projectBar.close();
    this.dialog.open(ProjectsComponent, {
      width: '95%',
      height: '88%',
      data: {
        icon: 'bolt',
        title: this.gbl(LanguageLabel.WINDOW_PROJECTS).replace(Config.NAME, this.user.name)
      }
    });
  }
}
