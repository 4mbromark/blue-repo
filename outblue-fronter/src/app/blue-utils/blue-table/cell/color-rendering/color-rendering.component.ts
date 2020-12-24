import { LanguageService } from './../../../blue-service/language.service';
import { BaseCellComponent } from './../../../blue-base/base-cell/base-cell.component';
import { Component, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-color-rendering',
  templateUrl: './color-rendering.component.html',
  styleUrls: ['./color-rendering.component.css']
})
export class ColorRenderingComponent extends BaseCellComponent implements OnInit {

  labels = LanguageLabel;

  color: string;

  constructor(
    private languageService: LanguageService,
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

  ngOnInit(): void {
    this.color = this.params.value;
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
