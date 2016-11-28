import test from 'ava';
import nightmare from 'nightmare';

test('CSS render', (t) => {
  t.plan(1);
  const n = nightmare({ show: false });
  const msg = 'should render CSS component';
  const expected = true;
  return n
    .goto('http://localhost:8080/demo')
    .wait('main')
    .evaluate(() => !!document.querySelector('main > .z-component'))
    .end()
    .then((result) => {
      t.deepEqual(result, expected, msg);
    })
    .catch(t.fail);
});

test('Web Component render', (t) => {
  t.plan(1);
  const n = nightmare({ show: false });
  const msg = 'should render Web Component';
  const expected = true;
  return n
    .goto('http://localhost:8080/demo')
    .wait('main')
    .evaluate(() => !!document.querySelector('z-component'))
    .end()
    .then((result) => {
      t.deepEqual(result, expected, msg);
    })
    .catch(t.fail);
});

test('preact render', (t) => {
  t.plan(1);
  const n = nightmare({ show: false });
  const msg = 'should a component using preact';
  const expected = true;
  return n
    .goto('http://localhost:8080/demo')
    .wait('.preact-container > div')
    .evaluate(() => !!document.querySelector('.preact-container > .z-component'))
    .end()
    .then((result) => {
      t.deepEqual(result, expected, msg);
    })
    .catch(t.fail);
});

test('React render', (t) => {
  t.plan(1);
  const n = nightmare({ show: false });
  const msg = 'should render a component using React';
  const expected = true;
  return n
    .goto('http://localhost:8080/demo')
    .wait('.react-container > div')
    .evaluate(() => !!document.querySelector('.react-container > .z-component'))
    .end()
    .then((result) => {
      t.deepEqual(result, expected, msg);
    })
    .catch(t.fail);
});
