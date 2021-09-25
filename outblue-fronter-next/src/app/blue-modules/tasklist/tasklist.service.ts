import { Task } from './../../blue-utils/blue-object/record/Task';
import { TablePreference } from './../../blue-utils/blue-object/preference/TablePreference';
import { TableService } from './../../blue-utils/blue-base/base-table/table.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseTableService } from 'src/app/blue-utils/blue-base/base-table/base-table.service';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { ColumnState } from 'ag-grid-community';
import { PreferenceService } from 'src/app/blue-utils/blue-service/preference.service';

@Injectable({
  providedIn: 'root'
})
export class TasklistService extends BaseTableService implements TableService {

  protected url = Url.BASE_REST + Url.TASK;

  constructor(
    protected projectService: ProjectService,
    protected preferenceService: PreferenceService,
    protected http: HttpClient
  ) {
    super(projectService, preferenceService, http);
  }

  public addRecord(task: Task): Promise<void> {
    return this.add(task, this.url);
  }

  public getColumnState(): ColumnState[] {
    return this.localPreference.state.tasks;
  }

  public updateColumnState(state: ColumnState[]): void {
    const table = this.localPreference;
    table.state.tasks = state;
    this.updateTablePreference(table);
  }
}
