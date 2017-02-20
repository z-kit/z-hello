import { test } from 'ava';
import Nightmare from 'nightmare';

test('Web component', (t) => {
  t.plan(1);
  const msg = 'should render the Hello! text';
  const expected = 'Hello!';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Web%20component&selectedStory=default')
    .wait('z-hello')
    .evaluate(() => document.querySelector('z-hello').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
