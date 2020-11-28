import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { BaseWindowService } from './../../../blue-utils/blue-base/base-window/base-window.service';
import { Tag } from '../../../blue-utils/blue-enum/word/tag';
import { List } from '../../../blue-utils/blue-enum/list';
import { BaseWindowComponent } from '../../../blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent extends BaseWindowComponent {

  tags = Tag;
  messagingButtons = List.MESSAGING_BUTTONS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lightningService: LightningService,
    private languageService: LanguageService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightningService.setDialogService(service);
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
