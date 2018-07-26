const React = require('react');
const { storiesOf } = require('@storybook/react');
const { component } = require('../src/component');

// Load CSS
require('../dist/style.css');

// Load Web Component
require('file-loader?name=component.html!../dist/component.html'); // eslint-disable-line

// Import Web component in page
const link = document.createElement('link');
link.rel = 'import';
link.href = 'component.html';
document.head.appendChild(link);

const ZHello = component(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-hello">
      <h1 className="z-hello__title">
        Hello!
      </h1>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => (
    <ZHello>
      Hello!
    </ZHello>
  ));

storiesOf('Web component', module)
  .add('default', () => (
    <z-hello>
      Hello!
    </z-hello>
  ));
