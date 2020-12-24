var express = require('express');
var session = require('express-session');

var TasklistService = require('../services/tasklist-service');

var router = express.Router();

router.get('/outblue/tasklist/fetch', (req, res) => {
    const projects = TasklistService.getByUserId(session.id);
    projects.then((projects) => {
        res.send(projects); 
    });
})

router.get('/outblue/tasklist/getby/:projects', (req, res) => {
    const projects = TasklistService.getByProjectList(session.id, req.params.projects.split`,`.map(x=>+x));
    projects.then((projects) => {
        res.send(projects); 
    });
})

module.exports = router;