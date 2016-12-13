const selenium = require('selenium-standalone');
const Gemini = require('gemini/api');
const setup = require('./setup/setup');
const serve = require('./setup/serve');
const getTests = require('./setup/getTests');
const seleniumConfig = require('./setup/seleniumConfig');
const geminiConfig = require('./setup/gemini.conf.js');

setup(() => {
  selenium.start(seleniumConfig, (err, child) => {
    if (err) {
      child.kill();
      throw err;
    }
    serve(3000);
    const gemini = new Gemini(geminiConfig);
    return getTests(gemini, (collection) => {
      collection
        .disable('Web Component', { browser: 'ie' })
        .disable('Web Component', { browser: 'safari' })
        .disable('Web Component', { browser: 'msedge' });
      gemini.test(collection, { reporters: ['flat'] })
        .then((results) => {
          child.kill();
          if (results.errored > 0 || results.failed > 0) process.exit(1);
          process.exit(0);
        })
        .catch(() => {
          child.kill();
          process.exit(1);
        });
    });
  });
});
