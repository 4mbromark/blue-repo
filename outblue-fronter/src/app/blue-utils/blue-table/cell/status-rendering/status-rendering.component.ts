import { LanguageService } from './../../../blue-service/language.service';
import { ProjectStatus } from './../../../blue-enum/status/project-status';
import { BaseCellComponent } from './../../../blue-base/base-cell/base-cell.component';
import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/blue-utils/blue-object/status/Status';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-status-rendering',
  templateUrl: './status-rendering.component.html',
  styleUrls: ['./status-rendering.component.css']
})
export class StatusRenderingComponent extends BaseCellComponent implements OnInit {

  status = ProjectStatus;
  labels = LanguageLabel;

  rowStatus: Status;

  constructor(
    private languageService: LanguageService,
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

  ngOnInit(): void {
    this.rowStatus = this.status.get(this.params.value);
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }
}
