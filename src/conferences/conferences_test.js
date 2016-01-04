import QUnit from 'steal-qunit';
import { ViewModel } from './conferences';

// ViewModel unit tests
QUnit.module('youcode-website/conferences');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the conferences-page component');
});
