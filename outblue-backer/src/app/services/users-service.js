var AuthService = require('./auth-service');
var UsersDao = require('../dao/users-dao');

class UsersService {

    static async getById(id) {
        const users = await UsersDao.getById(id);
        if (users && users.length > 0) {
            return UsersService.getUserObject(users[0]);
        } else {
            return undefined;
        }
    }

    static async authenticate(id, password) {
        return new Promise((resolve, reject) => {
            const users = UsersDao.getByIdAndPassword(id, password);
            users.then((users) => {
                if (users && users.length > 0) {
                    AuthService.sign(users[0]).then((token) => {
                        resolve(token);
                    });
                } else {
                    reject();
                }
            });
        });
    }

    static async verify(token) {
        return new Promise((resolve, reject) => {
            AuthService.verify(token).then((auth) => {
                resolve(auth);
            });
        });
    }

    static async checkIfExistsByMailOrName(mailOrName) {
        const users = await UsersDao.getByMailOrName(mailOrName);
        if (users && users.length > 0) {
            return UsersService.getUserObject(users[0]);
        } else {
            return undefined;
        }
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

module.exports = UsersService;