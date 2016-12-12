const projectRoot = require('./projectRoot');

const browsers = {
  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
    },
  },
};

module.exports = {
  system: { projectRoot },
  rootUrl: 'http://localhost:3000/',
  browsers,
};
