module.exports = {
  '@tags': ['webcomponent'],
  'Plain render': (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=Web%20component&selectedStory=default')
      .waitForElementPresent('body', 1000)
      .assert.containsText('z-hello', 'Hello!')
      .end();
  },
};
