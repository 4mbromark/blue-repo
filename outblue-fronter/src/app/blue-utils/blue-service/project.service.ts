import { Preference } from './../blue-object/preference/Preference';
import { ProjectNamePreference } from 'src/app/blue-utils/blue-object/preference/ProjectNamePreference';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Project } from '../blue-object/record/Project';
import { HttpClient } from '@angular/common/http';
import { Url } from '../blue-enum/url';
import { PreferenceService } from './preference.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  lp: {
    switch: ProjectNamePreference;
    context: ProjectNamePreference;
    table: ProjectNamePreference;
    chip: ProjectNamePreference;
  };

  project: BehaviorSubject<Project> = new BehaviorSubject<Project>(null);
  projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  superProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  subProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  middleProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  constructor(
    private http: HttpClient,
    private prefererenceService: PreferenceService
  ) {
    this.fetchProjects();
    this.project.subscribe((project: Project) => {
      this.updateSupportProjects();
    });
    this.projects.subscribe((projects: Project[]) => {
      // TODO
      if (!this.project.value) {
        this.project.next(this.projects.value[0]);
      }
      this.updateSupportProjects();
    });
    this.prefererenceService.getPreference().subscribe((preference: Preference) => {
      this.lp = preference.projects.name;
    });
  }

  getProject(): Observable<Project> {
    return this.project.asObservable();
  }
  getProjects(): Observable<Project[]> {
    return this.projects.asObservable();
  }

  getSuperProjects(): Observable<Project[]> {
    return this.superProjects.asObservable();
  }
  getSubProjects(): Observable<Project[]> {
    return this.subProjects.asObservable();
  }
  getMiddleProjects(): Observable<Project[]> {
    return this.middleProjects.asObservable();
  }

  fetchProjects(): Promise<Project[]> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.PROJECTS_FETCH_REST).subscribe(
        (projects: Project[]) => {
          this.projects.next(projects);
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  setProject(project: Project): void {
    this.project.next(project);
  }

  updateSupportProjects(): void {
    if (this.project.value) {
      this.superProjects.next(this.findSuperProjects(this.project.value));
      this.subProjects.next(this.findSubProjects(this.project.value));
      this.middleProjects.next(this.findMiddleProjects(this.project.value));
    }
  }
  findSuperProjects(p: Project): Project[] {
    let superProjects = [];
    if (p.subprojectOf) {
      superProjects = this.projects.value.filter(project =>
        p.subprojectOf === project.id
      );
      superProjects = this.findSuperProjects(superProjects[0]).concat(superProjects);
    }
    return superProjects;
  }
  findSubProjects(p: Project): Project[] {
    let subProjects = [];
    subProjects = this.projects.value.filter(project =>
      project.subprojectOf && project.subprojectOf === p.id
    );
    return subProjects;
  }
  findMiddleProjects(p: Project): Project[] {
    let middleProjects = [];
    middleProjects = this.projects.value.filter(project =>
      p.subprojectOf === project.subprojectOf &&
      p.id !== project.id
    );
    return middleProjects;
  }

  getProjectName(project: Project, destination: string) {
    if (!this.lp) {
      return '';
    }
    const projectFather = this.findSuperProjects(project)[0];
    switch (destination) {
      case 'SWITCH': {
        return this.buildProjectName(project, projectFather, this.lp.switch);
      }
      case 'CONTEXT': {
        return this.buildProjectName(project, projectFather, this.lp.context);
      }
    }

  }
  buildProjectName(project: Project, projectFather: Project, preference: ProjectNamePreference) {
    let projectName = this.getProjectNameByType(project, preference.type);
    if (preference.toUpperCase) {
      projectName = projectName.toUpperCase();
    }
    if (projectFather && preference.showFather) {
      let projectFatherName = this.getProjectNameByType(projectFather, preference.fatherType);
      if (preference.fatherToUpperCase) {
        projectFatherName = projectFatherName.toUpperCase();
      }
      switch (preference.fatherSeparator) {
        case 'DASH': {
          return projectFatherName + ' - ' + projectName;
        }
        case 'BRACKETS': {
          return projectFatherName + ' (' + projectName + ')';
        }
        case 'OF': {
          return projectName + ' of ' + projectFatherName;
        }
        default: {
          return projectFatherName + ' ' + projectName;
        }
      }
    }
    return projectName;
  }
  getProjectNameByType(project: Project, type: string) {
    switch (type) {
      case 'EXTENDED': {
        if (project.nameExtended) {
          return project.nameExtended;
        }
        break;
      }
      case 'REDUCED': {
        if (project.nameCode) {
          return project.nameCode;
        }
        break;
      }
      case 'PERSONALIZED': {
        if (project.nameCustomized) {
          return project.nameCustomized;
        }
        break;
      }
    }
    return project.name;
  }
}
