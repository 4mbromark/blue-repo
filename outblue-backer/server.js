const express = require ('express');
const session = require("express-session");
const http = require('http');

const app = express();

const port = process.env.PORT || 3000;

const user = require('./src/app/routes/users-route');
const licence = require('./src/app/routes/licence-route');
const projects = require('./src/app/routes/projects-route');
const tasklist = require('./src/app/routes/tasklist-route');
const versions = require('./src/app/routes/versions-route');

app.use(express.static('../outblue-fronter/dist/outblue-fronter'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
  });
  
app.use(user, licence, projects, tasklist,versions);

app.use(session({
  secret: 'a4f8071f-c873-4447-8ee2',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  }
  /*store: new (require('express-sessions'))({
      storage: 'mongodb',
      instance: mongoose, // optional
      host: 'localhost', // optional
      port: 27017, // optional
      db: 'test', // optional
      collection: 'sessions', // optional
      expire: 86400 // optional
  })*/
}));

// const server = http.createServer(app);

var path = require('path');
app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile(path.resolve('../outblue-fronter/dist/outblue-fronter/index.html'));
});

app.listen(port, () => console.log('Server Avviato...'));

