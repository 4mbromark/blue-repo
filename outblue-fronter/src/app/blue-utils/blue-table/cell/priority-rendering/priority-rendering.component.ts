import { LanguageService } from './../../../blue-service/language.service';
import { BaseCellComponent } from './../../../blue-base/base-cell/base-cell.component';
import { Component, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-priority-rendering',
  templateUrl: './priority-rendering.component.html',
  styleUrls: ['./priority-rendering.component.css']
})
export class PriorityRenderingComponent extends BaseCellComponent implements OnInit {

  labels = LanguageLabel;

  priority: string;
  color: string;

  constructor(
    private languageService: LanguageService,
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

  ngOnInit(): void {
    switch (this.params.value) {
      case '1': {
        this.priority = 'angle-up';
        this.color = 'orange';
        break;
      }
      case '2': {
        this.priority = 'angle-double-up';
        this.color = 'red';
        break;
      }
      case '-1': {
        this.priority = 'angle-down';
        this.color = 'greenyellow';
        break;
      }
      case '-2': {
        this.priority = 'angle-double-down';
        this.color = 'green';
        break;
      }
      default: {
        // this.priority = 'bars';
      }
    }
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
