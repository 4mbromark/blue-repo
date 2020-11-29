var AuthService = require('./auth-service');
var UsersDao = require('../dao/users-dao');
var LoggerService = require('../services/logger-service');

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
        // const user = await UsersService.getById(id);
        // AuthService.sign(user); 

        LoggerService.log('authenticate() - Received value: ' + id, LoggerService.LOG_SERVICE);
        return new Promise((resolve, reject) => {
            LoggerService.log('authenticate() - Passing value to DAO: ' + id, LoggerService.LOG_SERVICE);
            const users = UsersDao.getByIdAndPassword(id, password);
            LoggerService.log('authenticate() - Passed value to DAO: ' + id, LoggerService.LOG_SERVICE);
            users.then((users) => {
                LoggerService.log('authenticate() - DAO response received for value: ' + id, LoggerService.LOG_SERVICE);
                LoggerService.log('authenticate() - DAO response is: ' + users, LoggerService.LOG_SERVICE);
                if (users && users.length > 0) {
                    LoggerService.log('authenticate() - Sending response to ROUTE: ' + true, LoggerService.LOG_SERVICE);
                    resolve(true);
                } else {
                    LoggerService.log('authenticate() - Sending response to ROUTE: ' + false, LoggerService.LOG_SERVICE);
                    resolve(false);
                }
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