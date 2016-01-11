import QUnit from 'steal-qunit';
import About from './about';

QUnit.module('models/about');

QUnit.test('getList', function(){
  stop();
  About.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
