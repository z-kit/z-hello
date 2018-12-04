import test from 'ava';
import Nightmare from 'nightmare';

test('Stateless functional component', async (t) => {
  t.plan(1);
  const msg = 'should render the Hello! text';
  const expected = 'Hello!';
  const actual = await Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-hello')
    .evaluate(() => document.querySelector('.z-hello__title').textContent)
    .end();
  return t.deepEqual(expected, actual, msg);
});
