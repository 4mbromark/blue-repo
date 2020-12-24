import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { FormControl } from '@angular/forms';
import { LicenceType } from './../../blue-utils/blue-licence/licence-type';
import { LicenceService } from './../../blue-utils/blue-service/licence.service';
import { UserService } from './../../blue-utils/blue-service/user.service';
import { BaseWindowComponent } from './../../blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject, OnInit } from '@angular/core';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { BaseWindowService } from 'src/app/blue-utils/blue-base/base-window/base-window.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Licence } from 'src/app/blue-utils/blue-object/licence/Licence';

@Component({
  selector: 'app-login-form-register',
  templateUrl: './login-form-register.component.html',
  styleUrls: ['./login-form-register.component.css']
})
export class LoginFormRegisterComponent extends BaseWindowComponent implements OnInit {

  labels = LanguageLabel;

  licence: Licence;

  name = new FormControl();
  surname = new FormControl();
  mail = new FormControl();
  username = new FormControl();
  password = new FormControl();
  passwordConfirm = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private licenceService: LicenceService,
    private lightning: LightningService,
    private languageService: LanguageService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightning.setDialogService(service);
  }

  ngOnInit(): void {
    this.licenceService.getLicence().subscribe((licence: Licence[]) => {
      this.licence = licence[0];
    });
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  sendRegistration(): void {

  }

  canRegister(): boolean {
    if (
      this.name.invalid ||
      this.surname.invalid ||
      this.mail.invalid ||
      this.username.invalid ||
      this.password.invalid ||
      this.passwordConfirm.invalid
    ) {
      return false;
    }
    if (this.password.value !== this.passwordConfirm.value) {
      return false;
    }
    return this.licence.code !== LicenceType.NO_LICENCE;
  }

}
