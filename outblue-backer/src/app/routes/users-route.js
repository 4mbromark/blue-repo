var express = require('express');
var session = require('express-session');

var UsersService = require('../services/users-service');

var router = express.Router();

router.head('/outblue/users/login/:id/:pwd', (req, res) => {
    const result = UsersService.authenticate(req.params.id, req.params.pwd);
    result.then((result) => {
        if (result) {
            session.id = req.params.id;
            res.sendStatus(200);
        } else {
            res.sendStatus(403);
        }
    });
});

router.get('/outblue/users/exists/:mailOrName', (req, res) => {
    const user = UsersService.checkIfExistsByMailOrName(req.params.mailOrName);
    user.then((user) => {
        res.send(user);
    });
});

module.exports = router;