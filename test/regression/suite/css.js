import test from 'ava';
import Nightmare from 'nightmare';

test('CSS component', async (t) => {
  t.plan(1);
  const msg = 'should render the Hello! text';
  const expected = 'Hello!';
  const actual = await Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-hello')
    .evaluate(() => document.querySelector('.z-hello__title').textContent)
    .end();
  return t.deepEqual(expected, actual, msg);
});
