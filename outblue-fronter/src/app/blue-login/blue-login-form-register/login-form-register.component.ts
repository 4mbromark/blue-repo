import { UserService } from './../../blue-utils/blue-service/user.service';
import { BaseWindowComponent } from './../../blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject, OnInit } from '@angular/core';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { BaseWindowService } from 'src/app/blue-utils/blue-base/base-window/base-window.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form-register',
  templateUrl: './login-form-register.component.html',
  styleUrls: ['./login-form-register.component.css']
})
export class LoginFormRegisterComponent extends BaseWindowComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private lightningService: LightningService,
    private languageService: LanguageService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightningService.setDialogService(service);
  }


}
