var LicenceDao = require('../dao/licence-dao');

class LicenceService {

    static async getByUserId(userId) {
        return new Promise((resolve, reject) => {
            LicenceDao.getByUserId(userId).then((licence) => {
                resolve(licence);
            });
        });
    }

    static async getUserObject(dbObject) {
        dbObject.id = dbObject.ID;
        dbObject.username = dbObject.USER_NAME;
        dbObject.mail = dbObject.USER_EMAIL;
        dbObject.name = dbObject.NAME;
        dbObject.surname = dbObject.SURNAME;
        dbObject.gender = dbObject.GENDER;
        return dbObject;
    }
}

module.exports = LicenceService;