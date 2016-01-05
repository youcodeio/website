import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import Conference from './models/conference';

const AppViewModel = AppMap.extend({
  define: {
    message: {
      value: 'Youcode Website!',
      serialize: false
    },
    title: {
      value: 'YouCode: A plateform for developers to find talks and tutorials',
      serialize: false
    }
  }
});

Conference.getList({}).then(conferences => console.log(conferences.attr()));

route('/:page', { page: 'home' });

export default AppViewModel;
