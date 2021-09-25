import { TableComponent } from './../../blue-utils/blue-base/base-table/table.component';
import { Component } from '@angular/core';
import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { Table } from 'src/app/blue-utils/blue-enum/table';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { ProjectsService } from './projects.service';
import { ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends BaseTableComponent implements TableComponent {

  public columnDefs = Table.PROJECTS_TABLE as unknown as ColGroupDef[];

  public emptyOverlayParams = {
    text: LanguageLabel.TABLE_NOPROJECTS
  };

  constructor(
    protected lightning: LightningService,
    protected projectsService: ProjectsService
  ) {
    super(lightning, projectsService);
  }

  public setColumnState(): void {
    const state = this.projectsService.getColumnState();
    this.applyColumnState(state);
  }

  public updateColumnState(): void {
    if (this.loaded) {
      const state = this.filterColumnState();
      this.projectsService.updateColumnState(state);
    }
  }
}
