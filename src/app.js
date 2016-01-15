import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import Conference from './models/conference';

route(':page&:search:query', { page: 'home' , search: 'welcome'});
route.ready(); // do not forget to initialize can.route

var date = new Date(),
    switchValue = "",
    lastQueryValue = "",
    isNull = false;


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
            serialize: false,
            get () {
                return lastQueryValue;
            }
        },
        switch: {
            value: 'Talks',
            serialize: false
        },
        switchValue: {
            serialize: false,
            get () {
                return switchValue;
            }
        }
    },
    searched: function(){
        switchValue = this.switch;
        lastQueryValue = this.lastQuery;
        isNull = true;
        //appelle requete ajax
        
        route.attr('page', 'home');
        route.attr('search' , '');
        route.attr('search' , 'search');
        route.attr('query' , lastQueryValue);
    },
    isNull: function(){
        return isNull;
    }
});

export default AppViewModel;


