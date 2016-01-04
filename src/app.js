import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

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

route('/:page', { page: 'home' });

export default AppViewModel;
