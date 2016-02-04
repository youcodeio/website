import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './search.less!';
import template from './search.stache!';
import Search from 'youcode-website/models/search';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the search-home component'
    },
    video: {
        get() {
            return Search.getList();
        }
    }
  }
});

export default Component.extend({
  tag: 'search-home',
  viewModel: ViewModel,
  template
});