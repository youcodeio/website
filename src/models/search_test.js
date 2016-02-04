import QUnit from 'steal-qunit';
import Search from './search';

QUnit.module('models/search');

QUnit.test('getList', function(){
  stop();
  Search.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
