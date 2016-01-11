import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './conferences.less!';
import template from './conferences.stache!';
import Conferences from 'youcode-website/models/conference';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the conferences-page component'
    },
    conferences: {
      get() {
        return Conferences.getList({});
      }
    }
  }
});

export default Component.extend({
  tag: 'conferences-page',
  viewModel: ViewModel,
  template
});