import QUnit from 'steal-qunit';
import Conference from './conference';

QUnit.module('models/conference');

QUnit.test('getList', function(){
  stop();
  Conference.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
