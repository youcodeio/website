import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './about.less!';
import template from './about.stache!';
import About from 'youcode-website/models/about';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the about-page component'
    },
    aboutTeam: {
      get() {
        return About.getList();
      }
    }
  }
});

export default Component.extend({
  tag: 'about-page',
  viewModel: ViewModel,
  template
});