import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { Component, Input } from '@angular/core';
import { BaseWindowService } from '../../blue-base/base-window/base-window.service';

@Component({
  selector: 'app-standard-toolbar',
  templateUrl: './standard-toolbar.component.html',
  styleUrls: ['./standard-toolbar.component.css']
})
export class StandardToolbarComponent {
  @Input() icon: string;
  @Input() title: string;

  service: BaseWindowService;

  constructor(private lightning: LightningService) {
    this.service = lightning.getDialogService();
  }

  close(): void {
    this.service.close();
  }

}
