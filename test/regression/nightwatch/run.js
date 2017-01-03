const serve = require('./server');
const installSelenium = require('../selenium/install');
const startSelenium = require('../selenium/start');

function test() {
  startSelenium((err) => {
    if (err) throw err;
    serve(3000);
    require('nightwatch/bin/runner.js');
  });
}

installSelenium((err) => {
  if (err) throw err;
  test();
});
