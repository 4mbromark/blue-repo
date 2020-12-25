import { Component } from '@angular/core';
import { SidebarService } from 'src/app/blue-frame/blue-sidebar/blue-sidebar.service';
import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { Table } from 'src/app/blue-utils/blue-enum/table';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { TasklistService } from '../tasklist/tasklist.service';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends BaseTableComponent {

  columnDefs = Table.PROJECTS_TABLE;

  emptyOverlayParams = {
    text: this.gbl(LanguageLabel.TABLE_NOPROJECTS)
  };

  constructor(
    protected lightning: LightningService,
    protected sidebarService: SidebarService,
    protected projectsService: ProjectsService,
    private languageService: LanguageService
  ) {
    super(lightning, sidebarService, projectsService);
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }
}
