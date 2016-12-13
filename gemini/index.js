gemini.suite('CSS component', (suite) => {
  suite.setUrl('/?selectedKind=CSS%20component&selectedStory=default')
    .setCaptureElements('#storybook-preview-iframe')
    .capture('plain');
});

gemini.suite('Stateless functional component', (suite) => {
  suite.setUrl('/?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .setCaptureElements('#storybook-preview-iframe')
    .capture('plain');
});

gemini.suite('Web Component', (suite) => {
  suite.setUrl('/?selectedKind=Web%20component&selectedStory=default')
    .setCaptureElements('#storybook-preview-iframe')
    .capture('plain');
});
