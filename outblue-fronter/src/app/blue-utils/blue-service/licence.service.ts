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
      this.licence.value.unshift(this.licenceDetails[0]);
    }
    return this.licence.asObservable();
  }

  getActualLicence(): Licence {
    return this.licence.value[0];
  }

  getLicenceOnRest(): Promise<Licence[]> {
    return new Promise((resolve, reject) => {
      this.http.get(Url.LICENCE_FETCH_REST).subscribe(
        (licence: Licence[]) => {
          resolve(licence);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
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

  getLicenceStatus(): Observable<LicenceStatus> {
    return this.licenceStatus.asObservable();
  }

  generateTrialLicence(): void {
    this.removeNoLicence();
    this.licence.value.unshift(this.getLicenceWithDetailByCode(LicenceType.LICENCE_LIMITED_TRIAL, this.generateSerial()));
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
