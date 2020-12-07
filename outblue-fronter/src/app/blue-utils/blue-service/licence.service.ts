import { LicenceStatusList } from './../blue-licence/licence-status-list';
import { LicenceDetail } from './../blue-licence/licence-detail';
// tslint:disable: max-line-length
import { LicenceTag } from './../blue-licence/licence-tag';
import { LicenceType } from './../blue-licence/licence-type';
import { Licence } from './../blue-object/licence/Licence';
import { Injectable } from '@angular/core';
import { Config } from '../blue-enum/word/config';
import { BehaviorSubject, Observable } from 'rxjs';
import { LicenceStatus } from '../blue-object/licence/LicenceStatus';
import { HttpClient } from '@angular/common/http';
import { Url } from '../blue-enum/url';

@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  licenceDetails = LicenceDetail.LICENCE_DETAIL;

  licence: BehaviorSubject<Licence[]> = new BehaviorSubject<Licence[]>([]);
  licenceStatus: BehaviorSubject<LicenceStatus> = new BehaviorSubject<LicenceStatus>(LicenceStatusList.NO_LICENCE);

  constructor(private http: HttpClient) {}

  getLicence(): Observable<Licence[]> {
    if (this.licence.value.length === 0) {
      this.addTempLicence(this.licenceDetails[0]);
    }
    return this.licence.asObservable();
  }
  getLicenceStatus(): Observable<LicenceStatus> {
    return this.licenceStatus.asObservable();
  }

  getLicenceWithDetailByCode(code: string, serial?: string): Licence {
    for (const licence of this.licenceDetails) {
      if (licence.code === code) {
        licence.serial = serial;
        return licence;
      }
    }
    return this.licenceDetails[0];
  }

  loadLicence(): Promise<Licence[]> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.LICENCE_LOAD_REST).subscribe(
        (licence: Licence[]) => {
          this.updateLicence(licence);
          resolve();
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }
  saveLicence(): Promise<Licence[]> {
    return new Promise((resolve, reject) => {
      this.http.post(Url.LICENCE_SAVE_REST, this.licence.value).subscribe(
        (licence: Licence[]) => {
          this.updateLicence(licence);
          resolve();
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  updateLicence(licence: Licence[]): void {
    this.licence.next(licence);
    this.updateLicenceStatus();
  }
  updateLicenceStatus(): void {

  }

  addTempLicence(licence: Licence) {
    this.licence.value.unshift(licence);
    this.licence.next(this.licence.value);
  }

  generateTrialLicence(): void {
    this.removeNoLicence();
    this.addTempLicence(this.getLicenceWithDetailByCode(LicenceType.LICENCE_LIMITED_TRIAL, this.generateSerial()));
  }

  generateSerial(): string {
    return LicenceTag.LICENCE_SERIAL_BASE.replace(Config.YEAR, '' + (new Date()).getFullYear()) + Math.random().toString(36).substring(7).toUpperCase() + Math.random().toString(36).substring(7).toUpperCase();
  }

  removeNoLicence(): void {
    if (this.licence.value[0].code === LicenceTag.NO_LICENCE) {
      this.licence.next([]);
    }
  }

  clearLicence(): void {
    if (!this.licence.value[0].insertDate) {
      this.licence.value.splice(0, 1);
    }
  }
}
