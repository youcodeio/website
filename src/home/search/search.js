import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './search.less!';
import template from './search.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the search-home component'
    }
  }
});

export default Component.extend({
  tag: 'search-home',
  viewModel: ViewModel,
  template
});