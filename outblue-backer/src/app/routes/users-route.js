var express = require('express');

var UsersService = require('../services/users-service');
var LoggerService = require('../services/logger-service');

var router = express.Router();

router.post('/outblue/users/auth/:id/:pwd', (req, res) => {
    LoggerService.log('/users/auth - New Request for value: ' + req.params.id, LoggerService.LOG_ROUTE);
    result = UsersService.authenticate(req.params.id, req.params.pwd);
    result.then((result) => {
        LoggerService.log('/users/auth - Sending response for value: ' + req.params.id, LoggerService.LOG_ROUTE);
        if (result) {
            res.sendStatus(200);
            LoggerService.log('/users/auth - Response sent: ' + 200, LoggerService.LOG_ROUTE);
        } else {
            res.sendStatus(403);
            LoggerService.log('/users/auth - Response sent: ' + 403, LoggerService.LOG_ROUTE);
        }  
    });
})

router.get('/outblue/users/exists/:mailOrName', (req, res) => {
    LoggerService.log('/users/exists - New Request for value: ' + req.params.mailOrName, LoggerService.LOG_ROUTE);
    const user = UsersService.checkIfExistsByMailOrName(req.params.mailOrName);
    user.then(function (user) {
        LoggerService.log('/users/exists - Sending response for value: ' + req.params.mailOrName, LoggerService.LOG_ROUTE);
        res.send(user);
        LoggerService.log('/users/exists - response sent: ' + user, LoggerService.LOG_ROUTE);
    }) 
    

})

module.exports = router;