import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LanguageService } from './../../../blue-utils/blue-service/language.service';
import { BaseTableService } from './../../../blue-utils/blue-base/base-table/base-table.service';
import { BaseTableComponent } from './../../../blue-utils/blue-base/base-table/base-table.component';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/blue-utils/blue-enum/table';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { Project } from 'src/app/blue-utils/blue-object/record/Project';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent extends BaseTableComponent implements OnInit {

  columnDefs = Table.PROJECTS_TABLE;

  emptyOverlayParams = {
    text: this.gbl(LanguageLabel.TABLE_NOPROJECTS)
  };

  constructor(
    protected lightning: LightningService,
    protected baseTableService: BaseTableService,
    protected projectService: ProjectService,
    private languageService: LanguageService
  ) {
    super(lightning, baseTableService);
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.rowData = projects;
    });
    this.projectService.getLoaded().subscribe((loaded: boolean) => {
      if (!this.gridApi) {
        return; // TODO
      }
      if (loaded) {
        this.gridApi.hideOverlay();
        if (this.rowData.length === 0) {
          this.gridApi.showNoRowsOverlay();
        }
      } else {
        this.gridApi.showLoadingOverlay();
      }
    });
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  gridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

}
