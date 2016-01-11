import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import Conference from './models/conference';

route(':page&:search', { page: 'home' , search: 'welcome'});
route.ready(); // do not forget to initialize can.route

var date = new Date(),
    isSearched = false,
    switchValue = "",
    lastQueryValue = "";


const AppViewModel = AppMap.extend({
    define: {
        message: {
            value: 'Youcode Website!',
            serialize: false
        },
        title: {
            value: 'YouCode: A plateform for developers to find talks and tutorials',
            serialize: false
        },
        annee: {
            get () {
                return date.getFullYear();
            }
        },
        lastQuery: {
            value: '',
            serialize: false
        },
        lastQueryValue: {
            get () {
                return lastQueryValue;
            }
        },
        switch: {
            value: 'Talks',
            serialize: false
        },
        switchValue: {
            get () {
                return switchValue;
            }
        },
        isSearched: {
            get () {
                return isSearched;
            }
        }
    },
    searched: function(){
        switchValue = this.define.switch.value;
        console.log(switchValue);
        lastQueryValue = this.define.lastQuery.value;
        console.log(lastQueryValue);
        isSearched = true;
  }
});

export default AppViewModel;


