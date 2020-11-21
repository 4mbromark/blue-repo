import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { BaseWindowService } from './../../../blue-utils/blue-base/base-window/base-window.service';
import { LanguageService } from 'src/app/blue-utils/blue-language/language.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseWindowComponent } from '../../../blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject } from '@angular/core';
import { List } from 'src/app/blue-utils/blue-enum/list';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent extends BaseWindowComponent {

  languageButtons = List.LANGUAGE_BUTTONS;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
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

  getSelectedLanguage(): string {
    return this.languageService.getSelectedLanguage();
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.close();
  }

}
