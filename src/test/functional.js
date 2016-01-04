import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('youcode-website functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('youcode-website main page shows up', function() {
  F('title').text('youcode-website', 'Title is set');
});
