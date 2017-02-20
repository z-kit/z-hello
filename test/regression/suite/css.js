import { test } from 'ava';
import Nightmare from 'nightmare';

test('CSS component', (t) => {
  t.plan(1);
  const msg = 'should render the Hello! text';
  const expected = 'Hello!';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-hello')
    .evaluate(() => document.querySelector('.z-hello__title').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
