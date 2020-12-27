import { LanguageService } from './../../../blue-service/language.service';
import { ProjectStatus } from './../../../blue-enum/status/project-status';
import { BaseCellComponent } from './../../../blue-base/base-cell/base-cell.component';
import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/blue-utils/blue-object/status/Status';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-status-rendering',
  templateUrl: './status-rendering.component.html',
  styleUrls: ['./status-rendering.component.css']
})
export class StatusRenderingComponent extends BaseCellComponent implements OnInit {

  status: Status;

  constructor(
    private languageService: LanguageService,
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

  ngOnInit(): void {
    this.status = ProjectStatus.get(this.params.value);
    if (this.status) {
      this.value = this.gbl(this.status.title);
    }
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }
}
