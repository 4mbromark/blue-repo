var VersionsDao = require('../dao/versions-dao');
var VersionsCodesDao = require('../dao/versions-codes-dao');

class VersionsService {

    static async getByUserId(userId) {
        return new Promise((resolve, reject) => {
            VersionsDao.getByUserId(userId).then((versions) => {
                let versionsObjects = [];
                for (let version of versions) {
                    VersionsCodesDao.getByVersionId(version.ID).then((versionsCodes) => {
                        for (let versionCode of versionsCodes) {
                            setTimeout(() => {
                                VersionsService.getVersionObject(version, versionCode).then((versionOK) => {
                                    versionsObjects.push(Object.assign({}, versionOK));
                                })
                            }, 100)
                            
                        }

                    });   
                }
                setTimeout(() => {
                    resolve(versionsObjects);
                }, 1000);
                
            });
        });
    }

    static async getByProjectList(userId, projectId) {
        return new Promise((resolve, reject) => {
            const versionsOk = [];
            VersionsService.getByUserId(userId).then((versions) => {
                for (let version of versions) {
                    for (let id of projectId) {
                        if (version.versionOf === id) {
                            versionsOk.push(version);
                        }
                    }
                }
                resolve(versionsOk);

            });
        });
    }

    static async getVersionObject(dbObjectVersion, dbObjectCode) {
        dbObjectVersion.id = dbObjectCode.ID;
        dbObjectVersion.idUser = dbObjectVersion.ID_USER;
        dbObjectVersion.name = dbObjectVersion.VERSION_NAME;
        dbObjectVersion.versionOf = dbObjectVersion.VERSION_OF;
        dbObjectVersion.code = dbObjectCode.VERSION_CODE;
        dbObjectVersion.description = dbObjectCode.VERSION_DESCRIPTION;
        dbObjectVersion.from = dbObjectCode.VERSION_FROM;
        dbObjectVersion.to = dbObjectCode.VERSION_TO;
        dbObjectVersion.insertDate = dbObjectCode.INSERT_DATE;

        return dbObjectVersion;
    }
}

module.exports = VersionsService;