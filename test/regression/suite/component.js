module.exports = {
  'Plain render': (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
      .waitForElementPresent('.z-hello', 1000)
      .assert.containsText('.z-hello__title', 'Hello!')
      .end();
  },
};
