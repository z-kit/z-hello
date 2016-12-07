import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { component } from '../src/component';

// Load Web Component
require('file-loader?name=component.html!../dist/component.html');

// Import Web component in page
const link = document.createElement('link');
link.rel = 'import';
link.href = 'component.html';
document.head.appendChild(link);

const Component = component(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-component">
      <h1 className="z-component__title">Hello World!</h1>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => <Component>Hello World!</Component>);

storiesOf('Web component', module)
  .add('default', () => <z-component>Hello World!</z-component>);
