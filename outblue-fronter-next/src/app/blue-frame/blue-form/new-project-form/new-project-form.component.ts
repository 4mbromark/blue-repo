import { HttpErrorResponse } from '@angular/common/http';
import { ProjectsService } from './../../../blue-modules/projects/projects.service';
import { ProjectService } from './../../../blue-utils/blue-service/project.service';
import { Project } from './../../../blue-utils/blue-object/record/Project';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LightningService } from './../../../blue-utils/blue-service/lightning.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseWindowComponent } from 'src/app/blue-utils/blue-base/base-window/base-window.component';
import { BaseWindowService } from 'src/app/blue-utils/blue-base/base-window/base-window.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class NewProjectFormComponent extends BaseWindowComponent implements OnInit {

  labels = LanguageLabel;

  public generalInfo: FormGroup;

  public nameControl: FormControl = new FormControl();
  public codeControl: FormControl = new FormControl();
  public extendedControl: FormControl = new FormControl();
  public customControl: FormControl = new FormControl();

  public superprojectControl: FormControl = new FormControl();

  public projects: Project[] = [];

  public error: LanguageLabel;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private projectService: ProjectService,
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
    private lightning: LightningService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightning.setDialogService(service);
  }

  ngOnInit(): void {
    this.projectService.getProject().subscribe((project: Project) => {
      this.superprojectControl.setValue(project);
    });
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
    this.generalInfo = this.formBuilder.group({
      nameControl: this.nameControl
    });
  }

  public addProject(): void {
    const project = new Project();

    project.name = this.nameControl.value;
    project.nameCode = this.codeControl.value;
    project.nameExtended = this.extendedControl.value;
    project.nameCustomized = this.customControl.value;

    project.subprojectOf = this.superprojectControl.value ? this.superprojectControl.value.id : null;

    this.projectsService.addRecord(project).then(() => {
      this.close();
    }).catch((error: HttpErrorResponse) => {
      switch (error.status) {
        case 409: {
          this.error = LanguageLabel.FORM_NEWPROJECT_ERRORDUPLICATE;
          break;
        }
        default: {
          this.error = LanguageLabel.FORM_NEWPROJECT_ERROR;
        }
      }
    });
  }
}
