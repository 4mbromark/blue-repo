import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseCellComponent } from 'src/app/blue-utils/blue-base/base-cell/base-cell.component';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { Project } from 'src/app/blue-utils/blue-object/record/Project';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-project-rendering',
  templateUrl: './project-rendering.component.html',
  styleUrls: ['./project-rendering.component.css']
})
export class ProjectRenderingComponent extends BaseCellComponent implements OnInit {

  tags = Tag;
  labels = LanguageLabel;

  type: string;
  project: Project;

  selectedproject: Project;

  constructor(
    private projectService: ProjectService,
    protected lightning: LightningService,
    protected clipboard: Clipboard
  ) {
    super(lightning, clipboard);
  }

  ngOnInit(): void {
    this.projectService.getProject().subscribe((project: Project) => {
      this.selectedproject = project;
    });
    this.setProjectName();
  }

  setProjectName(): void {
    this.type = this.params.data.nameType;
    const id = this.type === Tag.CHIP ? this.params.value : this.params.data.id;
    if (!id) {
      this.project = new Project();
      this.value = '';
    } else {
      this.project = this.projectService.getProjectById(id);
      this.value = this.projectService.getProjectName(this.project, this.type);
    }
  }

  isProjectLeader(): boolean {
    return !this.project.subprojectOf;
  }

  isProjectSelected(): boolean {
    return this.selectedproject && this.project.id === this.selectedproject.id;
  }
}
