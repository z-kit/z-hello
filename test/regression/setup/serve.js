const http = require('http');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');

const projectRoot = require('./projectRoot');

const serve = serveStatic(`${projectRoot}/storybook-static`, { index: ['index.html'] });

const server = http.createServer((req, res) => serve(req, res, finalhandler(req, res)));

module.exports = port => server.listen(port);
