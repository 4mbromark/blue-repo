var express = require('express');
var session = require('express-session');

var LicenceService = require('../services/licence-service');

var router = express.Router();

router.post('/outblue/licence/load', (req, res) => {
    const licence = LicenceService.getByUserId(session.user.id);
    licence.then((licence) => {
        res.send(licence); 
    });
})

module.exports = router;