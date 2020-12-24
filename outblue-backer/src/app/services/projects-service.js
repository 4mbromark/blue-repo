var ProjectsDao = require('../dao/projects-dao');

class ProjectsService {

    static async getByUserId(userId) {
        return new Promise((resolve, reject) => {
            ProjectsDao.getByUserId(userId).then((projects) => {
                let projectObjects = [];
                for (let project of projects) {
                    ProjectsService.getProjectObject(project).then((projectOK) => {
                        projectObjects.push(projectOK);
                    })
                    
                }
                resolve(projectObjects);
            });
        });
    }

    static async getProjectObject(dbObject) {
        dbObject.id = dbObject.ID;
        dbObject.idUser = dbObject.ID_USER;
        dbObject.type = dbObject.PROJECT_TYPE;
        dbObject.status = dbObject.PROJECT_STATUS;
        dbObject.priority = dbObject.PROJECT_PRIORITY;
        dbObject.name = dbObject.PROJECT_NAME;
        dbObject.nameCode = dbObject.NAME_CODE;
        dbObject.nameExtended = dbObject.NAME_EXTENDED;
        dbObject.nameCustomized = dbObject.NAME_CUSTOMIZED;
        dbObject.subprojectOf = dbObject.SUBPROJECT_OF;
        dbObject.startDate = dbObject.START_DATE;
        dbObject.endDate = dbObject.END_DATE;
        dbObject.deadline = dbObject.DEADLINE;
        dbObject.icon = dbObject.ICON;
        dbObject.color = dbObject.COLOR;
        dbObject.colorRow = dbObject.COLOR_ROW;
        dbObject.insertDate = dbObject.INSERT_DATE;

        return dbObject;
    }
}

module.exports = ProjectsService;