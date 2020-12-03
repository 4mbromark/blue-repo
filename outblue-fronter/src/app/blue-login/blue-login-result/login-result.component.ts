import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseWindowComponent } from 'src/app/blue-utils/blue-base/base-window/base-window.component';
import { BaseWindowService } from 'src/app/blue-utils/blue-base/base-window/base-window.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';

@Component({
  selector: 'app-login-result',
  templateUrl: './login-result.component.html',
  styleUrls: ['./login-result.component.css']
})
export class LoginResultComponent extends BaseWindowComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lightningService: LightningService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightningService.setDialogService(service);
  }

}
