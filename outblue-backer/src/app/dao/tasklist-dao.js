var session = require('./config/dbsession');

var userMap = session.tableMap('blue_tasklist')
    .columnMap('id', 'ID')
    .columnMap('idUser', 'ID_USER')
    .columnMap('type', 'TASK_TYPE')
    .columnMap('status', 'TASK_STATUS')
    .columnMap('priority', 'TASK_PRIORITY')
    .columnMap('name', 'TASK_NAME')
    .columnMap('taskOf', 'TASK_OF')
    .columnMap('icon', 'ICON')
    .columnMap('color', 'COLOR')
    .columnMap('colorRow', 'COLOR_ROW')
    .columnMap('insertDate', 'INSERT_DATE');

class TasklistDao {

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

module.exports = TasklistDao;