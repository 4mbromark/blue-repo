var session = require('./config/dbsession');

var userMap = session.tableMap('blue_reguser')
    // columnMap(object-name-property, table-name-property, optional-property-config)
    .columnMap('id', 'ID')
    .columnMap('username', 'USER_NAME')
    .columnMap('mail', 'USER_EMAIL')
    .columnMap('password', 'USER_PASSWORD')
    .columnMap('name', 'NAME')
    .columnMap('surname', 'SURNAME')
    .columnMap('gender', 'GENDER');

class UsersDao {

    static async getById(id) {
        return new Promise((resolve, reject) => {

            var query = session.query(userMap).where(
                userMap.id.Equal(id));

            query.then(function (result) {
                resolve(result);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });

        });
    }

    static async getByIdAndPassword(id, password) {
        return new Promise((resolve, reject) => {

            var query = session.query(userMap).where(
                userMap.id.Equal(id).And().
                password.Equal(password));

            query.then(function (result) {
                resolve(result);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });

        });
    }

    static async getByMailOrName(mailOrName) {
        return new Promise((resolve, reject) => {

            var query = session.query(userMap).where(
                userMap.username.Equal(mailOrName).Or().
                mail.Equal(mailOrName));

            query.then(function (result) {
                resolve(result);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });

        });
    }

}

module.exports = UsersDao;