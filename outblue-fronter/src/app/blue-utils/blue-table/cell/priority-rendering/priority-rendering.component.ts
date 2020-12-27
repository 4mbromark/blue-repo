import { PriorityList } from './../../../blue-enum/priority/priority-list';
import { LanguageService } from './../../../blue-service/language.service';
import { BaseCellComponent } from './../../../blue-base/base-cell/base-cell.component';
import { Component, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Clipboard } from '@angular/cdk/clipboard';
import { Priority } from 'src/app/blue-utils/blue-object/priority/Priority';

@Component({
  selector: 'app-priority-rendering',
  templateUrl: './priority-rendering.component.html',
  styleUrls: ['./priority-rendering.component.css']
})
export class PriorityRenderingComponent extends BaseCellComponent implements OnInit {

  labels = LanguageLabel;

  priority: Priority;

  constructor(
    private languageService: LanguageService,
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

  ngOnInit(): void {
    this.priority = PriorityList.get(this.params.value);
    if (this.priority) {
      this.value = this.gbl(this.priority.title);
    }
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
