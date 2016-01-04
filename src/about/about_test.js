import QUnit from 'steal-qunit';
import { ViewModel } from './about';

// ViewModel unit tests
QUnit.module('youcode-website/about');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the about-page component');
});
