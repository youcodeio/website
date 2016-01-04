import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './channels.less!';
import template from './channels.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the channels-page component'
    }
  }
});

export default Component.extend({
  tag: 'channels-page',
  viewModel: ViewModel,
  template
});