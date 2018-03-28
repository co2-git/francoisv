const path = require('path');
const Server = require('express-emitter');
import express from 'express';

const router = app => app
  .set('port', process.env.PORT || 1981)
  .get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../index.html'))
  })
  .get('/web.js', (req, res) => {
    res.type('text/javascript');
    res.sendFile(path.resolve(__dirname, '../web/bundle.js'))
  })
  .use('/assets', express.static(path.join(__dirname, '../../assets')))
  ;

const server = new Server(router);

server.on('listening', () => console.log('server started on port 1981'));
server.on('error', error => console.log(error.stack));
