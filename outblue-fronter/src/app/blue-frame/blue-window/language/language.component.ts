import { LanguageLabel } from './../../../blue-utils/blue-language/language-labels';
import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { BaseWindowService } from './../../../blue-utils/blue-base/base-window/base-window.service';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseWindowComponent } from '../../../blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject } from '@angular/core';
import { List } from 'src/app/blue-utils/blue-enum/list';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent extends BaseWindowComponent {

  labels = LanguageLabel;

  languageButtons = List.LANGUAGE_BUTTONS;

  language: string;
  languageSelected: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private routingService: RoutingService,
    private lightning: LightningService,
    private languageService: LanguageService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightning.setDialogService(service);
    this.languageService.getLanguage().subscribe((language: string) => {
      this.language = language;
      this.languageSelected = language;
    });
  }

  gbl(label: string, force?: string): string {
    return this.languageService.getByLanguage(label, force);
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.routingService.reload();
  }

}
