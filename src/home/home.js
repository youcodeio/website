import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './home.less!';
import template from './home.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the header-home component'
    }
  }
});

export default Component.extend({
  tag: 'header-home',
  viewModel: ViewModel,
  template
});

