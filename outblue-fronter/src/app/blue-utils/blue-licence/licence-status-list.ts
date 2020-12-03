// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LicenceTag } from './licence-tag';

export class LicenceStatusList {
  public static NO_LICENCE = {
    code: LicenceTag.NO_LICENCE,
    title: LanguageLabel.LICENCE_STATUS_NONE,
    icon: 'exclamation-circle',
    color: 'darkred',
    backcolor: 'lightcoral'
  };
  public static WAITING_FOR_CHECK = {
    code: LicenceTag.WAITING_FOR_CHECK,
    title: LanguageLabel.LICENCE_STATUS_WAITING,
    icon: 'sync-alt',
    color: 'white',
    backcolor: 'lightsalmon'
  };
  public static ACTIVE = {
    code: LicenceTag.ACTIVE,
    title: LanguageLabel.LICENCE_STATUS_ACTIVE,
    icon: 'check-circle',
    color: 'darkgreen',
    backcolor: 'lightgreen'
  };
  public static EXPIRING = {
    code: LicenceTag.EXPIRING,
    title: LanguageLabel.LICENCE_STATUS_EXPIRING,
    icon: 'clock',
    color: 'white',
    backcolor: 'lightsalmon'
  };
  public static EXPIRED = {
    code: LicenceTag.EXPIRED,
    title: LanguageLabel.LICENCE_STATUS_EXPIRED,
    icon: 'exclamation-circle',
    color: 'darkred',
    backcolor: 'lightcoral'
  };
}
