import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './conferences.less!';
import template from './conferences.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the conferences-page component'
    }
  }
});

export default Component.extend({
  tag: 'conferences-page',
  viewModel: ViewModel,
  template
});