var express = require('express');
var session = require('express-session');

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var UsersService = require('../services/users-service');

var router = express.Router();

router.post('/outblue/users/login/:id', jsonParser, (req, res) => {
    const result = UsersService.authenticate(req.params.id, req.body.pwd);
    result.then((result) => {
        if (result) {
            session.id = req.params.id;
            res.status(200).send(result);
        } else {
            res.sendStatus(403);
        }
    });
});

router.post('/outblue/users/auth', jsonParser, (req, res) => {
    if (session.id) {
        res.sendStatus(200).send(null);
    } else {
        res.sendStatus(403);
    }

    /** 
    const result = UsersService.verify(req.body.token);
    result.then((result) => {
        console.log(req.body.token);
        if (result) {
            console.log(result);
            res.status(200).send(result);
        } else {
            res.sendStatus(403);
        }
    });*/
});

router.get('/outblue/users/exists/:mailOrName', (req, res) => {
    const user = UsersService.checkIfExistsByMailOrName(req.params.mailOrName);
    user.then((user) => {
        res.send(user);
    });
});

module.exports = router;