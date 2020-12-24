var session = require('./config/dbsession');

var userMap = session.tableMap('blue_project')
    .columnMap('id', 'ID')
    .columnMap('idUser', 'ID_USER')
    .columnMap('type', 'PROJECT_TYPE')
    .columnMap('status', 'PROJECT_STATUS')
    .columnMap('priority', 'PROJECT_PRIORITY')
    .columnMap('name', 'PROJECT_NAME')
    .columnMap('nameCode', 'NAME_CODE')
    .columnMap('nameExtended', 'NAME_EXTENDED')
    .columnMap('nameCustomized', 'NAME_CUSTOMIZED')
    .columnMap('subprojectOf', 'SUBPROJECT_OF')
    .columnMap('startDate', 'START_DATE')
    .columnMap('endDate', 'END_DATE')
    .columnMap('deadline', 'DEADLINE')
    .columnMap('icon', 'ICON')
    .columnMap('color', 'COLOR')
    .columnMap('colorRow', 'COLOR_ROW')
    .columnMap('insertDate', 'INSERT_DATE');

class ProjectsDao {

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

module.exports = ProjectsDao;