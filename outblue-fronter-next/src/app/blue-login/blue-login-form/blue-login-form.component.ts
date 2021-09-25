import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { LoginResultComponent } from './../blue-login-result/login-result.component';
import { LicenceService } from './../../blue-utils/blue-service/licence.service';
import { MatDialog } from '@angular/material/dialog';
import { Config } from '../../blue-utils/blue-enum/word/config';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LanguageService } from './../../blue-utils/blue-service/language.service';
import { UserService } from './../../blue-utils/blue-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/blue-utils/blue-object/User';
import { LoginFormRegisterComponent } from '../blue-login-form-register/login-form-register.component';
import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './blue-login-form.component.html',
  styleUrls: ['./blue-login-form.component.css']
})
export class BlueLoginFormComponent implements OnInit {

  labels = LanguageLabel;

  hide = true;

  user: User;
  customWelcomeMessage: string;

  username = new FormControl('');
  password = new FormControl('');

  constructor(
    private userService: UserService,
    private licenceService: LicenceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.customWelcomeMessage = LanguageLabel.WELCOME_MESSAGE_STANDARD;
  }

  checkIfUserExists() {
    this.userService.getUserByMailOrName(this.username.value).then((user: User) => {
      if (user) {
        this.user = user;
        this.setCustomWelcomeMessage();
      }
    });
  }

  login(): void {
    this.userService.login(this.username.value, this.password.value).then(
    () => {

    }).catch((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401: {
          break;
        }
        case 404: {
          break;
        }
        default: {

        }
      }
      this.openLoginResultWindow();
    });
  }

  setCustomWelcomeMessage() {
    if (this.user.name.toLowerCase() === Config.ALICE) {
      this.customWelcomeMessage = LanguageLabel.WELCOME_MESSAGE_ALICE;
    } else {
      this.customWelcomeMessage = LanguageLabel.WELCOME_MESSAGE_SIMPLE;
    }
  }

  openLoginResultWindow() {
    this.dialog.open(LoginResultComponent, {
      width: '30%',
      height: '30%',
      data: {
        icon: 'user-times',
        title: LanguageLabel.LOGIN_ERROR
      }
    });
  }

  openRegisterWindow() {
    const dialogRef = this.dialog.open(LoginFormRegisterComponent, {
      width: '50%',
      // height: '90%',
      data: {
        icon: 'user',
        title: LanguageLabel.REGISTRATION_TITLE
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.licenceService.clearLicence();
    });
  }

}
