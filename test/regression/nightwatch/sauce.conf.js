const path = require('path');

const config = {
  src_folders: [path.resolve(__dirname, '../suite')],

  globals_path: path.resolve(__dirname, './globals.js'),

  output_folder: './test/regression/nightwatch/reports',

  selenium: {
    start_process: false,
  },

  test_settings: {
    default: {
      launch_url: 'http://ondemand.saucelabs.com:80',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'Windows 10',
        version: '55',
      },
    },

    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11',
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        platform: 'Windows 10',
        version: '50',
        marionette: true,
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '14',
      },
    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        platform: 'OS X 10.11',
        version: '10',
      },
    },
  },
};

if (process.env.TRAVIS) {
  config.test_settings.default.desiredCapabilities = {
    build: `build-${process.env.TRAVIS_JOB_NUMBER}`,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  };
}

module.exports = config;
