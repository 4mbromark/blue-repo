var express = require('express');
var session = require('express-session');

var ProjectsService = require('../services/projects-service');

var router = express.Router();

router.get('/outblue/projects/fetch', (req, res) => {
    const projects = ProjectsService.getByUserId(session.id);
    projects.then((projects) => {
        res.send(projects); 
    });
})

module.exports = router;