import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
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

  constructor(
    protected lightning: LightningService,
    protected clipboard: Clipboard
  ) {
    super(lightning, clipboard);
  }

  changeColor(color: string) {
    this.saving = true;
    this.service.changeColor(this.params.data.id, color).then(() => {
      this.value = color;
      this.saving = false;
    });
  }
}
