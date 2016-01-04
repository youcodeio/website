import QUnit from 'steal-qunit';
import { ViewModel } from './search';

// ViewModel unit tests
QUnit.module('youcode-website/home/search');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the search-home component');
});
