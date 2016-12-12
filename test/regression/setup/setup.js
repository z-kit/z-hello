const selenium = require('selenium-standalone');
const seleniumConfig = require('./seleniumConfig');

// Grab selenium for local visual regression testing
/* eslint-disable no-console */
module.exports = cb => selenium.install(seleniumConfig, cb);
