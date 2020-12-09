var session = require('./config/dbsession');

var userMap = session.tableMap('blue_reguser_preference')
    .columnMap('id', 'ID')
    .columnMap('idUser', 'ID_USER')
    .columnMap('type', 'PREFERENCE_TYPE')
    .columnMap('data', 'PREFERENCE_DATA')

class PreferenceDao {

    static async getByUserId(userId) {
        return new Promise((resolve, reject) => {

            var query = session.query(userMap).where(
                userMap.idUser.Equal(userId));

            query.then(function (preference) {
                resolve(preference);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });

        });
    }

    static async savepreference(preference) {
        session.Update()query(userMap).where(
            userMap.idUser.Equal(userId));

            query.then(function (preference) {
                resolve(preference);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });
    }

}

module.exports = PreferenceDao;