import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { component } from '../../../src/component';

const Component = component(React.createElement);

test('JSX component', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Component>Hello!</Component>);
  const expected = JSX(
    <div className="z-hello">
      <h1 className="z-hello__title">Hello!</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});
