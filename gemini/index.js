gemini.suite('CSS component', (suite) => {
  suite.setUrl('/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .setCaptureElements('body')
    .before((actions) => {
      actions.setWindowSize(1024, 768);
    })
    .capture('plain');
});

gemini.suite('Stateless functional component', (suite) => {
  suite.setUrl('/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .setCaptureElements('body')
    .before((actions) => {
      actions.setWindowSize(1024, 768);
    })
    .capture('plain');
});

gemini.suite('Web Component', (suite) => {
  suite.setUrl('/iframe.html?selectedKind=Web%20component&selectedStory=default')
    .setCaptureElements('body')
    .before((actions) => {
      actions.setWindowSize(1024, 768);
    })
    .capture('plain');
});
