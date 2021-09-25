import { TasklistService } from './../../../blue-modules/tasklist/tasklist.service';
import { BaseWindowComponent } from 'src/app/blue-utils/blue-base/base-window/base-window.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseWindowService } from 'src/app/blue-utils/blue-base/base-window/base-window.service';
import { Project } from 'src/app/blue-utils/blue-object/record/Project';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { Task } from 'src/app/blue-utils/blue-object/record/Task';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class NewTaskFormComponent extends BaseWindowComponent implements OnInit {

  labels = LanguageLabel;

  public generalInfo: FormGroup;

  public nameControl: FormControl = new FormControl();
  public descriptionControl: FormControl = new FormControl();

  public projectControl: FormControl = new FormControl();

  public projects: Project[] = [];

  public error: LanguageLabel;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private projectService: ProjectService,
    private tasklistService: TasklistService,
    private formBuilder: FormBuilder,
    private lightning: LightningService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightning.setDialogService(service);
  }

  ngOnInit(): void {
    this.projectService.getProject().subscribe((project: Project) => {
      this.projectControl.setValue(project);
    });
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
    this.generalInfo = this.formBuilder.group({
      nameControl: this.nameControl
    });
  }

  public addTask(): void {
    const task = new Task();

    task.name = this.nameControl.value;
    task.description = this.descriptionControl.value;

    task.taskOf = this.projectControl.value ? this.projectControl.value.id : null;

    this.tasklistService.addRecord(task).then(() => {
      this.close();
    }).catch((error: HttpErrorResponse) => {
      this.error = LanguageLabel.FORM_NEWPROJECT_ERROR;
    });
  }

}
