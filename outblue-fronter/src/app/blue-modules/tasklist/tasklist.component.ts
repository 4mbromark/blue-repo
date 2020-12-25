import { SidebarService } from './../../blue-frame/blue-sidebar/blue-sidebar.service';
import { LanguageLabel } from './../../blue-utils/blue-language/language-labels';
import { Table } from './../../blue-utils/blue-enum/table';
import { TasklistService } from './tasklist.service';
import { Component } from '@angular/core';
import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent extends BaseTableComponent {

  columnDefs = Table.TASKLIST_TABLE;

  emptyOverlayParams = {
    text: this.gbl(LanguageLabel.TABLE_NOTASKS)
  };

  constructor(
    protected lightning: LightningService,
    protected sidebarService: SidebarService,
    protected tasklistService: TasklistService,
    private languageService: LanguageService
  ) {
    super(lightning, sidebarService, tasklistService);
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }
}
