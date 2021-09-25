import { Component, OnInit } from '@angular/core';
import { BaseCellComponent } from 'src/app/blue-utils/blue-base/base-cell/base-cell.component';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-percentage-rendering',
  templateUrl: './percentage-rendering.component.html',
  styleUrls: ['./percentage-rendering.component.css']
})
export class PercentageRenderingComponent extends BaseCellComponent implements OnInit {

  constructor(
    protected lightning: LightningService,
    protected clipboard: Clipboard
  ) {
    super(lightning, clipboard);
  }
}
