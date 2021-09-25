import { PreferenceService } from './../database/preference.service';
import { Injectable, NotFoundException } from "@nestjs/common";
import { MasterPreference } from './object/MasterPreference';
import { Preference } from 'src/app/blue-database/entity/preference.entity';

@Injectable()
export class PreferenceMasterService {

    constructor(
        private preferenceService: PreferenceService
    ) {}

    public async get(idUser: number): Promise<MasterPreference> {
        const preference = await this.preferenceService.getPreferenceByIdUser(idUser);
        if (preference) {
            return this.buildMasterPreference(preference);
        }
        throw new NotFoundException();
    }

    private buildMasterPreference(preference: Preference): MasterPreference {
        const masterPreference = new MasterPreference(preference);
        return masterPreference
    }
}