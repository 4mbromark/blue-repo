import { Preference } from './../../blue-database/entity/preference.entity';
import { PreferenceDao } from './../../blue-database/dao/preference.dao';
import { Injectable } from "@nestjs/common";

@Injectable()
export class PreferenceService {

    constructor(
        private preferenceDao: PreferenceDao
    ) {}

    public async getPreferenceById(id: number): Promise<Preference> {
        return await this.preferenceDao.getPreferenceById(id);
    }

    public async getPreferenceByIdUser(idUser: number): Promise<Preference> {
        return await this.preferenceDao.getPreferenceByIdUser(idUser);
    }

    public async getPreferenceByIdUserAndId(idUser: number, id: number): Promise<Preference> {
        return await this.preferenceDao.getPreferenceByIdUserAndId(idUser, id);
    }

    public async addOrUpdatePreference(idUser: number, preferences: string): Promise<Preference> {
        const check = await this.preferenceDao.getPreferenceByIdUser(idUser);
        if (check) {
            return await this.preferenceDao.updatePreference(idUser, check.id, preferences);
        } else {
            const p = new Preference();
            p.preferences = preferences;
            return await this.preferenceDao.addPreference(idUser, p);
        } 
    }
}