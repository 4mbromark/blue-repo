const express = require ('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const user = require('./src/app/routes/users-route');

app.use(express.static('../outblue-fronter/dist/outblue-fronter'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
  });
  
app.use(user);

const server = http.createServer(app);

server.listen(port, () => console.log('Server Avviato...'));

