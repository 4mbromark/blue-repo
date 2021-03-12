var session = require('./config/dbsession');

var userMap = session.tableMap('blue_version_code')
    .columnMap('id', 'ID')
    .columnMap('idVersion', 'ID_VERSION')
    .columnMap('code', 'VERSION_CODE')
    .columnMap('description', 'VERSION_DESCRIPTION')
    .columnMap('from', 'VERSION_FROM')
    .columnMap('to', 'VERSION_TO')
    .columnMap('insertDate', 'INSERT_DATE');

class VersionsCodesDao {

    static async getByVersionId(versionId) {
        return new Promise((resolve, reject) => {

            var query = session.query(userMap).where(
                userMap.idVersion.Equal(versionId));

            query.then(function (projects) {
                resolve(projects);
            }).catch(function (error) {
                console.log('Error: ' + error);
            });

        });
    }

}

module.exports = VersionsCodesDao;