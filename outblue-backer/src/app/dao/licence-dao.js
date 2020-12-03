var session = require('./config/dbsession');

var userMap = session.tableMap('blue_reguser_licence')
    // columnMap(object-name-property, table-name-property, optional-property-config)
    .columnMap('id', 'ID')
    .columnMap('idUser', 'ID_USER')
    .columnMap('type', 'LICENCE_TYPE')
    .columnMap('note', 'NOTE')
    .columnMap('insertDate', 'INSERT_DATE')
    .columnMap('updateDate', 'UPDATE_DATE');

class LicenceDao {

    static async getByUserId(userId) {
        return new Promise((resolve, reject) => {

            var query = session.query(userMap).where(
                userMap.idUser.Equal(userId)).orderBy();

            query.then(function (licence) {
                resolve(licence);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });

        });
    }

}

module.exports = LicenceDao;