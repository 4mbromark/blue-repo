var express = require('express');
var session = require('express-session');

var VersionsService = require('../services/versions-service');

var router = express.Router();

router.get('/outblue/versions/fetch', (req, res) => {
    const versions = VersionsService.getByUserId(session.id);
    versions.then((versions) => {
        res.send(versions); 
    });
})

router.get('/outblue/versions/getby/:projects', (req, res) => {
    const versions = VersionsService.getByProjectList(session.id, req.params.projects.split`,`.map(x=>+x));
    versions.then((versions) => {
        res.send(versions); 
    });
})

module.exports = router;