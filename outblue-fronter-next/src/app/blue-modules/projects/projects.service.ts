import { TablePreference } from './../../blue-utils/blue-object/preference/TablePreference';
import { TableService } from './../../blue-utils/blue-base/base-table/table.service';
import { Project } from './../../blue-utils/blue-object/record/Project';
import { BaseTableService } from './../../blue-utils/blue-base/base-table/base-table.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { ColDef, ColGroupDef, ColumnState } from 'ag-grid-community';
import { PreferenceService } from 'src/app/blue-utils/blue-service/preference.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseTableService implements TableService {

  protected url = Url.BASE_REST + Url.PROJECT;

  constructor(
    protected projectService: ProjectService,
    protected preferenceService: PreferenceService,
    protected http: HttpClient
  ) {
    super(projectService, preferenceService, http);
  }

  public addRecord(project: Project): Promise<void> {
    return this.add(project, this.url);
  }

  public getColumnState(): ColumnState[] {
    return this.localPreference.state.projects;
  }

  public updateColumnState(state: ColumnState[]): void {
    const table = this.localPreference;
    table.state.projects = state;
    this.updateTablePreference(table);
  }
}
