const serve = require('./server');
const installSelenium = require('../selenium/install');
const startSelenium = require('../selenium/start');

function startNightwatch() {
  serve(3000);
  require('nightwatch/bin/runner.js');
}

function test() {
  startSelenium((err) => {
    if (err) throw err;
    startNightwatch();
  });
}

if (process.env.SAUCE && !String(process.env.TRAVIS_PULL_REQUEST).match('^(true|1)$')) {
  startNightwatch();
} else {
  installSelenium((err) => {
    if (err) throw err;
    test();
  });
}
