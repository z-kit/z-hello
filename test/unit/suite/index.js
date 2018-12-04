import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { component } from '../../../src/component';

configure({ adapter: new Adapter() });

const Component = component(React.createElement);

test('JSX component', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <Component>
      Hello!
    </Component>,
  ).html();
  const expected = shallow(
    <div className="z-hello">
      <h1 className="z-hello__title">
        Hello!
      </h1>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});
