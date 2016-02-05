import AppMap from "can-ssr/app-map";
import route from "can/route/";
import Control from "can/control/";
import 'can/map/define/';
import 'can/route/pushstate/';
import $ from "jquery";

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
        isNull = false;
        //appelle requete ajax
        route.attr('page', 'home');
        route.attr('search' , '');
        route.attr('search' , 'search');
        
        //new Card('#testcard');
    },
    isNull: function(){
        return isNull;
    }
});

//var Card = Control.extend({
//    'div .test click': function(){
//        console.log(this.element);
//        this.element.addClass("hide");
//    },    
//    'div .search_cardHover mouseout': function(){
//        console.log(this.element);
//        this.element.removeClass("hide");
//    }
//});




export default AppViewModel;


