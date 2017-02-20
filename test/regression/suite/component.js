import { test } from 'ava';
import Nightmare from 'nightmare';

test('Stateless functional component', (t) => {
  t.plan(1);
  const msg = 'should render the Hello! text';
  const expected = 'Hello!';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-hello')
    .evaluate(() => document.querySelector('.z-hello__title').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
