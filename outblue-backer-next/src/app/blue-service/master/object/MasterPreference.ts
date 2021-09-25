import { Preference } from './../../../blue-database/entity/preference.entity';
import { Master } from './Master';

export class MasterPreference extends Master {
    idUser: number;
    preferences: string;

    constructor(
        preference: Preference
    ) {
        super(preference);
        this.idUser = preference.idUser;
        this.preferences = preference.preferences;
    }
}