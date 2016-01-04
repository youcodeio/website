import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './welcome.less!';
import template from './welcome.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the welcome-home component'
    }
  }
});

export default Component.extend({
  tag: 'welcome-home',
  viewModel: ViewModel,
  template
});