const path = require('path');
const Server = require('express-emitter');
const express = require('express');

const renderIndex = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../index.html'))
};

const router = app => app
  .set('port', process.env.PORT || 1981)
  .get('/', renderIndex)
  .get('/languages', renderIndex)
  .get('/projects', renderIndex)
  .get('/articles', renderIndex)
  .get('/articles/:article', renderIndex)
  .get('/article/:article', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../articles/', `${req.params.article}.md`));
  })
  .get('/web.js', (req, res) => {
    res.type('text/javascript');
    res.sendFile(path.resolve(__dirname, '../bundle.js'))
  })
  .use('/assets', express.static(path.join(__dirname, '../../assets')))
  ;

const server = new Server(router);

server.on('listening', () => console.log('server started on port 1981'));
server.on('error', error => console.log(error.stack));
