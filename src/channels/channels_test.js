import QUnit from 'steal-qunit';
import { ViewModel } from './channels';

// ViewModel unit tests
QUnit.module('youcode-website/channels');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the channels-page component');
});
