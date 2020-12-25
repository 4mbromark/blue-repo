import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { Component } from '@angular/core';
import { Table } from 'src/app/blue-utils/blue-enum/table';
import { SidebarService } from 'src/app/blue-frame/blue-sidebar/blue-sidebar.service';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { TasklistService } from '../tasklist/tasklist.service';
import { VersionsService } from './versions.service';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent extends BaseTableComponent {

  columnDefs = Table.VERSIONS_TABLE;

  emptyOverlayParams = {
    text: this.gbl(LanguageLabel.TABLE_NOVERSIONS)
  };

  constructor(
    protected lightning: LightningService,
    protected sidebarService: SidebarService,
    protected versionsService: VersionsService,
    private languageService: LanguageService
  ) {
    super(lightning, sidebarService, versionsService);
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
