System.register(['angular2/core', 'angular2/router', './search/topSearch.service', './welcome/welcome.component', './search/search.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, topSearch_service_1, welcome_component_1, search_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (topSearch_service_1_1) {
                topSearch_service_1 = topSearch_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_topSearchService, _router) {
                    var _this = this;
                    this._topSearchService = _topSearchService;
                    this._router = _router;
                    //text
                    this.talks = "Talks";
                    this.tutorials = "Tutorials";
                    //variable de home
                    this.type = false;
                    this.searched = false;
                    this._topSearchService.getTopSearch().then(function (topSearch) { return _this.topSearch = topSearch; });
                }
                //fonction de recherche
                HomeComponent.prototype.onSearch = function () {
                    //changement de l'url
                    var link = ['Search', { query: this.query, type: this.type }];
                    this._router.navigate(link);
                    this.searched = true;
                };
                HomeComponent.prototype.popular = function (popular) {
                    this.query = popular;
                    this.onSearch();
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [topSearch_service_1.TopSearchService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Welcome',
                            component: welcome_component_1.WelcomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/search/:query/:type',
                            name: 'Search',
                            component: search_component_1.SearchComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [topSearch_service_1.TopSearchService, router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map