import QUnit from 'steal-qunit';
import { ViewModel } from './welcome';

// ViewModel unit tests
QUnit.module('youcode-website/home/welcome');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the welcome-home component');
});
