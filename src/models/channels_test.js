import QUnit from 'steal-qunit';
import Channels from './channels';

QUnit.module('models/channels');

QUnit.test('getList', function(){
  stop();
  Channels.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
