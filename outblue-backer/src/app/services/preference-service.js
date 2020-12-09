var PreferenceDao = require('../dao/preference-dao');

class PreferenceService {

    static async getPreferenceByUserId(userId) {
        return new Promise((resolve, reject) => {
            PreferenceDao.getByUserId(userId).then((preference) => {
                resolve(JSON.parse(preference[0]));
            });
        });
    }

    static async setPreferenceByUserId(preference, userId) {
        newPreference;
        PreferenceDao.getByUserId(userId).then((oldPreference) => {
            if (oldPreference) {
                oldPreference.PREFERENCE_DATA = JSON.stringify(preference);
                newPreference = oldPreference;
            } else {
                newPreference.ID_USER = userId;
                newPreference.PREFERENCE_DATA = JSON.stringify(preference);
            }
            PreferenceDao.savePreference(newPreference);
        });
    }

    static async getPreferenceObject(dbObject) {
        dbObject.id = dbObject.ID;
        dbObject.idUser = dbObject.ID_USER;
        dbObject.type = dbObject.PREFERENCE_TYPE;
        dbObject.data = dbObject.PREFERENCE_DATA;

        return dbObject;
    }
}

module.exports = PreferenceService;