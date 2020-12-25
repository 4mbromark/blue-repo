import { Project } from './../blue-object/record/Project';
import { Preference } from './../blue-object/preference/Preference';
import { ProjectNamePreference } from 'src/app/blue-utils/blue-object/preference/ProjectNamePreference';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../blue-enum/url';
import { PreferenceService } from './preference.service';
import { Tag } from '../blue-enum/word/tag';

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

  project: BehaviorSubject<Project> = new BehaviorSubject<Project>(undefined);
  projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  superProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  subProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  middleProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  projectIdWithSubprojects: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private http: HttpClient,
    private prefererenceService: PreferenceService
  ) {
    this.fetchProjects();
    this.project.subscribe((project: Project) => {
      if (project) {
        this.updateSupportProjects();
        this.updateProjectIdWithSubprojects(project);
      } else {
        this.clearSupportProjects();
        if (project === null) {
          this.projectIdWithSubprojects.next(null);
        }
      }
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

  getProjectIdWithSubprojects(): Observable<number[]> {
    return this.projectIdWithSubprojects.asObservable();
  }

  getLoaded(): Observable<boolean> {
    return this.loaded.asObservable();
  }

  getProjectById(id: number): Project {
    return this.projects.value.find(project => project.id === id);
  }

  fetchProjects(): Promise<void> {
    this.loaded.next(false);
    return new Promise((resolve, reject) => {
      this.http.get(Url.PROJECTS_FETCH_REST).subscribe(
        (projects: Project[]) => {
          this.projects.next(projects);
          this.loaded.next(true);
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

  updateProjectIdWithSubprojects(p: Project): number[] {
    let projectIds = [];
    this.projects.value.filter(project =>
      project.subprojectOf === p.id
    ).forEach(project => {
      projectIds.push(project.id);
      projectIds = projectIds.concat(this.updateProjectIdWithSubprojects(project));
    });
    if (p.id === this.project.value.id) {
      projectIds.unshift(p.id);
      this.projectIdWithSubprojects.next(projectIds);
    }
    return projectIds;
  }

  clearSupportProjects() {
    this.superProjects.next([]);
    this.subProjects.next([]);
    this.middleProjects.next([]);
  }

  getProjectName(project: Project, destination: string) {
    const projectFather = this.findSuperProjects(project)[0];
    switch (destination) {
      case Tag.SWITCH: {
        return this.buildProjectName(project, projectFather, this.lp.switch);
      }
      case Tag.CONTEXT: {
        return this.buildProjectName(project, projectFather, this.lp.context);
      }
      case Tag.TABLE: {
        return this.buildProjectName(project, projectFather, this.lp.table);
      }
      case Tag.CHIP: {
        return this.buildProjectName(project, projectFather, this.lp.chip);
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
