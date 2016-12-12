gemini.suite('CSS component', (suite) => {
  suite.setUrl('/')
    .setCaptureElements('#storybook-preview-iframe')
    .capture('plain');
});
