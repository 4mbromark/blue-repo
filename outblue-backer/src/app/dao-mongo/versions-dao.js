var session = require('./config/dbsession');

var userMap = session.tableMap('blue_version')
    .columnMap('id', 'ID')
    .columnMap('idUser', 'ID_USER')
    .columnMap('name', 'VERSION_NAME')
    .columnMap('versionOf', 'VERSION_OF')
    .columnMap('insertDate', 'INSERT_DATE');

class VersionsDao {

    static async getByUserId(userId) {
        return new Promise((resolve, reject) => {

            var query = session.query(userMap).where(
                userMap.idUser.Equal(userId));

            query.then(function (projects) {
                resolve(projects);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });

        });
    }

}

module.exports = VersionsDao;