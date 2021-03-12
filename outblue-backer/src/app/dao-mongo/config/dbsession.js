var hibernate = require('js-hibernate');
var dbconfig = require('./dbconfig');

const { session: _session } = hibernate;
var session = _session(dbconfig);

module.exports = session;
