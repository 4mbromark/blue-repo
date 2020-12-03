import { LicenceType } from './../../blue-licence/licence-type';
import { LicenceStatusList } from './../../blue-licence/licence-status-list';
import { LicenceStatus } from './../../blue-object/licence/LicenceStatus';
import { Licence } from './../../blue-object/licence/Licence';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { LicenceService } from './../../blue-service/licence.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LanguageLabel } from '../../blue-language/language-labels';

@Component({
  selector: 'app-standard-licence-bar',
  templateUrl: './standard-licence-bar.component.html',
  styleUrls: ['./standard-licence-bar.component.css']
})
export class StandardLicenceBarComponent implements OnInit {

  labels = LanguageLabel;

  form = new FormControl();
  licence: Licence[];
  status: LicenceStatus;

  constructor(private licenceService: LicenceService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.licenceService.getLicence().subscribe((licence: Licence[]) => {
      this.licence = licence;
    });
    this.licenceService.getLicenceStatus().subscribe((status: LicenceStatus) => {
      this.status = status;
    });
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  generateTrialLicence(): void {
    this.licenceService.generateTrialLicence();
    this.status = LicenceStatusList.ACTIVE;
    this.form.setValue(this.licence[0].serial);
    this.form.disable();
  }

  setStatusToWaiting(): void {
    if (this.form.value) {
      this.status = LicenceStatusList.WAITING_FOR_CHECK;
    } else {
      this.status = LicenceStatusList.NO_LICENCE;
    }
  }

  isLicenceMissing(): boolean {
    return this.licenceService.getActualLicence().code === LicenceType.NO_LICENCE;
  }

}
