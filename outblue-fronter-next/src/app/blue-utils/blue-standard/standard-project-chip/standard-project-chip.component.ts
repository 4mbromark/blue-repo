import { Tag } from './../../blue-enum/word/tag';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Project } from './../../blue-object/record/Project';
import { ProjectService } from './../../blue-service/project.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-standard-project-chip',
  templateUrl: './standard-project-chip.component.html',
  styleUrls: ['./standard-project-chip.component.css']
})
export class StandardProjectChipComponent implements OnInit {
  @Input() project: Project;
  @Input() details = false;
  @Input() showSelected = false;
  @Input() showLeaderproject = false;

  @ViewChild('projectTrigger', {read: MatMenuTrigger}) projectTrigger: MatMenuTrigger;

  labels = LanguageLabel;

  private selectedProject: Project;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.getProject().subscribe((project: Project) => {
      this.selectedProject = project;
    });
  }

  public isProjectLeader(): boolean {
    return !this.project.subprojectOf;
  }

  public isProjectSelected(): boolean {
    return this.selectedProject && this.project.id === this.selectedProject.id;
  }

  public getName(): string {
    return this.projectService.getProjectName(this.project, Tag.CHIP);
  }

  public getNameExtended(): string {
    const name = this.project.nameExtended ? this.project.nameExtended : this.project.name;
    return name ? name.toUpperCase() : '';
  }

  public setProject(): void {
    this.projectService.setProject(this.project);
  }

  public triggerProject(event: any): void {
    if (this.details) {
      this.projectTrigger.openMenu();
      event.stopPropagation();
    }
  }
}
