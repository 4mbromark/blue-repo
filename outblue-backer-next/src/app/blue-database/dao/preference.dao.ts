import { Preference } from './../entity/preference.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PreferenceDao {

    constructor(
        @InjectRepository(Preference) private preferencesRepository: Repository<Preference>,
    ) {}

    public async getPreferenceById(id: number): Promise<Preference> {
        const preference = await this.preferencesRepository.findOne(id);
        return preference;
    }

    public async getPreferenceByIdUser(idUser: number): Promise<Preference> {
        const preference = await this.preferencesRepository.findOne({
            where: {
                idUser: idUser
            }
        });
        return preference;
    }

    public async getPreferenceByIdUserAndId(idUser: number, id: number): Promise<Preference> {
        const preference = await this.preferencesRepository.findOne(id, {
            where: {
                idUser: idUser
            }
        });
        return preference;
    }

    public async addPreference(idUser: number, preference: Preference): Promise<Preference> {
        preference.idUser = idUser;
        return await this.preferencesRepository.save(preference);
    }

    public async updatePreference(idUser: number, id: number, preferences: string): Promise<Preference> {
        const preference = await this.getPreferenceByIdUserAndId(idUser, id);
        preference.preferences = preferences;
        return await this.preferencesRepository.save(preference);
    }
}