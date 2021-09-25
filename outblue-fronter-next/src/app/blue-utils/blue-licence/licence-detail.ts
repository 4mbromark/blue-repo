import { LicenceType } from './licence-type';
// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Licence } from '../blue-object/licence/Licence';

export class LicenceDetail {
  public static LICENCE_DETAIL: Licence[] = [
    { code: LicenceType.NO_LICENCE, serial: null, title: LanguageLabel.NO_LICENCE, description: LanguageLabel.NO_LICENCE_DESCRIPTION },
    { code: LicenceType.LICENCE_LIMITED_TRIAL, serial: null, title: LanguageLabel.LICENCE_LIMITED_TRIAL, description: LanguageLabel.LICENCE_LIMITED_TRIAL_DESCRIPTION }
  ];
}
