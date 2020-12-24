var TasklistDao = require('../dao/tasklist-dao');

class TasklistService {

    static async getByUserId(userId) {
        return new Promise((resolve, reject) => {
            TasklistDao.getByUserId(userId).then((tasklist) => {
                let tasklistObjects = [];
                for (let task of tasklist) {
                    TasklistService.getTasklistObject(task).then((taskOK) => {
                        tasklistObjects.push(taskOK);
                    })
                }
                resolve(tasklistObjects);
            });
        });
    }

    static async getByProjectList(userId, projectId) {
        return new Promise((resolve, reject) => {
            const tasklistOk = [];
            TasklistService.getByUserId(userId).then((tasklist) => {

                for (let task of tasklist) {
                    for (let id of projectId) {
                        if (task.taskOf === id) {
                            tasklistOk.push(task);
                        }
                    }
                }
                resolve(tasklistOk);

            });
        });
    }

    static async getTasklistObject(dbObject) {
        dbObject.id = dbObject.ID;
        dbObject.idUser = dbObject.ID_USER;
        dbObject.type = dbObject.TASK_TYPE;
        dbObject.status = dbObject.TASK_STATUS;
        dbObject.priority = dbObject.TASK_PRIORITY;
        dbObject.name = dbObject.TASK_NAME;
        dbObject.taskOf = dbObject.TASK_OF;
        dbObject.icon = dbObject.ICON;
        dbObject.color = dbObject.COLOR;
        dbObject.colorRow = dbObject.COLOR_ROW;
        dbObject.insertDate = dbObject.INSERT_DATE;

        return dbObject;
    }
}

module.exports = TasklistService;