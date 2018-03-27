import path from 'path';
import Server from 'express-emitter';

const router = app => app
  .set('port', 1981)
  .get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../index.html'))
  })
  .get('/web.js', (req, res) => {
    res.type('text/javascript');
    res.sendFile(path.resolve(__dirname, '../web/bundle.js'))
  })
  ;

const server = new Server(router);

server.on('listening', () => console.log('server started on port 1981'));
server.on('error', error => console.log(error.stack));
