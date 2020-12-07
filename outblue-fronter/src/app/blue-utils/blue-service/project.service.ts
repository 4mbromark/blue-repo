import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Project } from '../blue-object/record/Project';
import { HttpClient } from '@angular/common/http';
import { Url } from '../blue-enum/url';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project: BehaviorSubject<Project> = new BehaviorSubject<Project>(null);
  projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  superProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  subProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  constructor(private http: HttpClient) {
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
      this.subProjects.next(this.findSupProjects(this.project.value));
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
  findSupProjects(p: Project): Project[] {
    let subProjects = [];
    subProjects = this.projects.value.filter(project =>
      project.subprojectOf && project.subprojectOf === p.id
    );
    return subProjects;
  }
}
