'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var Server = require('express-emitter');


var router = function router(app) {
  return app.set('port', process.env.PORT || 1981).get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../index.html'));
  }).get('/web.js', function (req, res) {
    res.type('text/javascript');
    res.sendFile(path.resolve(__dirname, '../web/bundle.js'));
  }).use('/assets', _express2.default.static(path.join(__dirname, '../../assets')));
};

var server = new Server(router);

server.on('listening', function () {
  return console.log('server started on port 1981');
});
server.on('error', function (error) {
  return console.log(error.stack);
});