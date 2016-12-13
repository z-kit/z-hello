const projectRoot = require('./projectRoot');

// Chrome is default, must be present in the dev environment
const browsers = {
  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
    },
  },
};

if (process.env.FIREFOX) {
  browsers.firefox = {
    desiredCapabilities: {
      browserName: 'firefox',
    },
  };
}

if (process.env.SAFARI) {
  browsers.safari = {
    desiredCapabilities: {
      browserName: 'safari',
    },
  };
}

if (process.env.IE) {
  browsers.ie = {
    desiredCapabilities: {
      browserName: 'internet explorer',
    },
  };
}

if (process.env.MS_EDGE) {
  browsers.msedge = {
    desiredCapabilities: {
      browserName: 'MicrosoftEdge',
    },
  };
}

module.exports = {
  system: { projectRoot },
  rootUrl: 'http://localhost:3000/',
  browsers,
};
