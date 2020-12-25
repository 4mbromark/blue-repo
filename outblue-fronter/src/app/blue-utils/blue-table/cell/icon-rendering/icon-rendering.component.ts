import { LanguageLabel } from './../../../blue-language/language-labels';
import { LanguageService } from './../../../blue-service/language.service';
import { BaseCellComponent } from './../../../blue-base/base-cell/base-cell.component';
import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-icon-rendering',
  templateUrl: './icon-rendering.component.html',
  styleUrls: ['./icon-rendering.component.css']
})
export class IconRenderingComponent extends BaseCellComponent implements OnInit {

  labels = LanguageLabel;

  constructor(
    private languageService: LanguageService,
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
