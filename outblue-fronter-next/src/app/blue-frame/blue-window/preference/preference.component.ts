import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { BaseWindowService } from './../../../blue-utils/blue-base/base-window/base-window.service';
import { BaseWindowComponent } from './../../../blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { List } from 'src/app/blue-utils/blue-enum/list';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent extends BaseWindowComponent {

  tags = Tag;
  preferenceButtons = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lightning: LightningService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightning.setDialogService(service);
  }
}
