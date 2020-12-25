import { ProjectService } from './../../blue-service/project.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RowClickedEvent } from 'ag-grid-community';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../blue-object/record/Project';
import { Task } from '../../blue-object/record/Task';

@Injectable({
  providedIn: 'root'
})
export class BaseTableService {

  httpBaseUrl: string;
  httpBaseFetch: string;

  tableSize = 100;
  infoSize = 0;

  sidepanel: BehaviorSubject<RowClickedEvent> = new BehaviorSubject<RowClickedEvent>(null);

  records: BehaviorSubject<Project[] | Task[]> = new BehaviorSubject<Project[] | Task[]>([]);

  loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    protected projectService: ProjectService,
    protected http: HttpClient,
  ) { }

  getRecords(): Observable<Project[] | Task[]> {
    return this.records.asObservable();
  }

  getLoaded(): Observable<boolean> {
    return this.loaded.asObservable();
  }

  buildService(): void {
    this.projectService.getProjectIdWithSubprojects().subscribe((projects: number[]) => {
      this.loaded.next(false);
      if (this.httpBaseFetch && projects === null) {
        this.getAllOnRest(this.httpBaseFetch);
      } else if (this.httpBaseUrl && projects.length !== 0) {
        this.getAllOnRest(this.httpBaseUrl + projects);
      }
    });
  }

  getAllOnRest(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (records: Project[] | Task[]) => {
          this.records.next(records);
          this.loaded.next(true);
          resolve();
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  getSidepanel(): Observable<RowClickedEvent> {
    return this.sidepanel.asObservable();
  }

  openInformations(event?: RowClickedEvent): void {
    if (event) {
      this.sidepanel.next(event);
    }
    this.tableSize = 60;
    this.infoSize = 40;
  }
  openInformationsFull(): void {
    if (this.infoSize === 100) {
      this.openInformations();
    } else {
      this.tableSize = 0;
      this.infoSize = 100;
    }
  }
  closeInformations(): void {
    this.tableSize = 100;
    this.infoSize = 0;
    this.sidepanel.next(null);
  }
  getTableSize(): number {
    return this.tableSize;
  }
  getInfoSize(): number {
    return this.infoSize;
  }
}
