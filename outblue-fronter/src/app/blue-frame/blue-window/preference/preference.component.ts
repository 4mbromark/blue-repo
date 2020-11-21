import { LanguageService } from 'src/app/blue-utils/blue-language/language.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { BaseWindowService } from './../../../blue-utils/blue-base/base-window/base-window.service';
import { BaseWindowComponent } from './../../../blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Tag } from 'src/app/blue-utils/blue-enum/tag';
import { List } from 'src/app/blue-utils/blue-enum/list';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent extends BaseWindowComponent {

  tags =  Tag;
  preferenceButtons = List.PREFERENCE_BUTTONS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lightningService: LightningService,
    private languageService: LanguageService,
    protected service: BaseWindowService
    ) {
    super(data, service);
    this.lightningService.setDialogService(service);
  }

  gbl(label: string) {
    return this.languageService.getByLanguage(label);
  }
}
