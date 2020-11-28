import { LicenceType } from './licence-type';
// tslint:disable: max-line-length
import { LanguageLabels } from 'src/app/blue-utils/blue-language/language-labels';
import { Licence } from '../blue-object/licence/Licence';

export class LicenceContract {
  public static LICENCE: Licence[] = [
    { code: LicenceType.LICENCE_LIMITED_TRIAL, title: LanguageLabels.LICENCE_LIMITED_TRIAL, description: LanguageLabels.LICENCE_LIMITED_TRIAL_DESCRIPTION }
  ];
}
