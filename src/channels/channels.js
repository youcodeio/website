import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './channels.less!';
import template from './channels.stache!';
import Channels from 'youcode-website/models/channels';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the channels-page component'
    },
   allChannels: {
  		get() {
       return Channels.getList({});
   		}
    },
   firstChannel: {
		 /*get() {
			 return allChannels.then(data=> data.attr(0));
		 }*/
		 	
      get() {
        return Channels.getList({}).then(data=> data.attr(0));
      }
    }
  }
});

export default Component.extend({
  tag: 'channels-page',
  viewModel: ViewModel,
  template
});