module.exports = {
  'Plain render': (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=CSS%20component&selectedStory=default')
      .waitForElementPresent('.z-hello', 1000)
      .assert.containsText('.z-hello__title', 'Hello!')
      .end();
  },
  tearDown: require('../nightwatch/sauce'),
};
