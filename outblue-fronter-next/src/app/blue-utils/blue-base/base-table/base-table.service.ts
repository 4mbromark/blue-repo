import { TablePreference } from './../../blue-object/preference/TablePreference';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { ProjectService } from './../../blue-service/project.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RowClickedEvent } from 'ag-grid-community';
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from 'rxjs';
import { Project } from '../../blue-object/record/Project';
import { Task } from '../../blue-object/record/Task';
import { PreferenceService } from '../../blue-service/preference.service';
import { Preferences } from '../../blue-object/preference/Preferences';

@Injectable({
  providedIn: 'root'
})
export class BaseTableService {

  protected url: string;

  protected localPreference: TablePreference;

  private tableSize = 100;
  private infoSize = 0;

  private subscription: Subscription;

  private sidepanel: BehaviorSubject<RowClickedEvent> = new BehaviorSubject<RowClickedEvent>(null);

  private records: ReplaySubject<Project[] | Task[]> = new ReplaySubject<Project[] | Task[]>();

  private loaded: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(
    protected projectService: ProjectService,
    protected preferenceService: PreferenceService,
    protected http: HttpClient,
  ) {
    this.preferenceService.getPreference().subscribe((preferences: Preferences) => {
      this.localPreference = preferences.table;
    });
  }

  public getRecords(): Observable<Project[] | Task[]> {
    return this.records.asObservable();
  }

  public getLoaded(): Observable<boolean> {
    return this.loaded.asObservable();
  }

  public buildService(): void {
    this.subscription = this.projectService.getProjectIdWithSubprojects().subscribe((projects: number[]) => {
      this.loaded.next(false);
      if (projects === null) {
        this.fetch();
      } else if (projects.length !== 0) {
        this.getBy(projects);
      }
    });
  }
  public destroyService(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public fetch(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + Url.FETCH, { responseType: 'json' }).subscribe(
        (records: Project[] | Task[]) => {
          this.records.next(records);
          this.loaded.next(true);
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
  public getBy(projectIds: number[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + Url.GETBY, { ids: projectIds }, { responseType: 'json' }).subscribe(
        (records: Project[] | Task[]) => {
          this.records.next(records);
          this.loaded.next(true);
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  protected add(record: Project | Task, url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(url + Url.ADD, { record: record }, { responseType: 'json' }).subscribe(
        () => {
          this.projectService.reloadAll();
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  public changeColor(id: number, color: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + Url.CHANGE_COLOR, { id: id, color: color },  { responseType: 'json' }).subscribe(
        () => {
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
  public changePriority(id: number, priority: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + Url.CHANGE_PRIORITY, { id: id, priority: priority },  { responseType: 'json' }).subscribe(
        () => {
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  protected updateTablePreference(table: TablePreference): void {
    this.preferenceService.updateTablePreference(table);
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
