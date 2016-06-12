"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var search_service_1 = require('./search/search.service');
var welcome_component_1 = require('./welcome/welcome.component');
var search_component_1 = require('./search/search.component');
var HomeComponent = (function () {
    function HomeComponent(_searchService, _router, _routeParams) {
        var _this = this;
        this._searchService = _searchService;
        this._router = _router;
        this._routeParams = _routeParams;
        //text
        this.talks = "Talks";
        this.tutorials = "Tutorials";
        this.active = false;
        this.empty = false;
        this.type = false;
        this._searchService.getTopSearch().then(function (topSearch) { return _this.topSearch = topSearch; });
    }
    //fonction de recherche
    HomeComponent.prototype.onSearch = function () {
        if (this.query) {
            //            let link = ['Search', { query: this.query.replace('#','alt043').replace(' ','alt08'), type: this.type }];
            var link = ['Search', { query: encodeURIComponent(this.query), type: this.type }];
            this._router.navigate(link);
            this.empty = false;
        }
        else {
            this.empty = true;
        }
    };
    HomeComponent.prototype.popular = function (popular) {
        this.query = popular;
        this.onSearch();
    };
    HomeComponent.prototype.ngDoCheck = function () {
        if (this.query) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    HomeComponent.prototype.toggle = function () {
        this.type = !this.type;
        this.onSearch();
        this.type = !this.type;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/home/home.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [search_service_1.SearchService]
        }),
        router_deprecated_1.RouteConfig([
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
        __metadata('design:paramtypes', [search_service_1.SearchService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map